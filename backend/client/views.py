from django.utils import timezone
from rest_framework.response import Response
from rest_framework.views import APIView

from client.models import Position, User, NotiLog
from map.models import PingNoti, PingConn
from utils import get_fail_res
import logging


class CheckPosition(APIView):
    def post(self, request):
        client = request.data.get('client', None)
        latitude = request.data.get('latitude', None)
        longitude = request.data.get('longitude', None)
        data = None
        # 데이터 validation
        if latitude and longitude and client:
            pos = Position.objects.filter(client=client)
            now = timezone.now()
            if len(pos) > 0:
                target = pos.first()
                target.latitude = float(latitude)
                target.longitude = float(longitude)
                time_diff = now - target.update_at
                sec = time_diff.seconds
                if sec >= 60:
                    target.open_at = now
                noti_logs = NotiLog.objects.filter(
                    client=client).order_by("-id")
                if len(noti_logs) > target.num_noti:
                    target.num_noti = len(noti_logs)
                    noti_log = noti_logs.first()
                    ping_conn = PingConn.objects.filter(
                        noti=noti_log.noti).first()
                    print("ping_conn", ping_conn)

                    data = ping_conn.to_json()
                    print("data", data)

                target.save()
            else:
                Position.objects.create(
                    client=client, latitude=latitude, longitude=longitude, open_at=now, update_at=now, num_noti=0)
        else:
            msg = f"client {client}, latitude {latitude}, longitude {longitude}"
            logging.info(msg)
            return Response(get_fail_res(msg))

        return Response({'status': 'success', 'message': '', 'data': data})


class NotiLogListView(APIView):
    '''
    url: client/v1/noti-log/?client={client_name}
    '''

    def get(self, request):
        res = {'status': 'success', 'data': None, 'message': ''}
        try:
            client = str(request.GET.get('client'))
            noties = NotiLog.objects.filter(client=client).values("noti")
            print("noties", noties)
            ping_conn = PingConn.objects.filter(
                noti__in=noties).order_by("-noti_id")

            data = {}
            for obj in ping_conn:
                if obj.noti_id in data:
                    data[obj.noti_id]['messages'].append(obj.ping.message)
                    data[obj.noti_id]['cnt'] += 1
                else:
                    noti = {
                        "latitude": obj.noti.latitude,
                        "longitude": obj.noti.longitude,
                        "create_at": obj.noti.create_at,
                        "cnt": 1,
                        "messages": [obj.ping.message]
                    }
                    data[obj.noti_id] = noti
            print("data", data)
            res['data'] = data
            res['message'] = f'{len(data.keys())}개의 로그 '

        except Exception as e:
            logging.exception(f'NotiLogListView {e}')
            return Response(get_fail_res('알림내역을 가져오는데 실패했습니다.'))

        return Response(res)


class UserSave(APIView):

    def post(self, request):
        name = request.data.get('name', None)
        fcm_token = request.data.get('fcm_token', None)
        now = timezone.now()
        users = User.objects.filter(name=name)
        if len(users) > 0:
            user = users.first()
            user.fcm_token = fcm_token
            user.save()
        else:
            user = User.objects.create(
                name=name, fcm_token=fcm_token, update_at=now)

        return Response({'status': 'success', 'message': f'{user.name}'})
