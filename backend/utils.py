import math
from firebase_admin import messaging

def get_fail_res(msg):
    """ 
    Create fail Response
    """
    return {
        'status': "fail",
        'message': msg
    }


def send_to_FCM(tokens, body):
    message = messaging.MulticastMessage(
        notification=messaging.Notification(title=body),
        data={'body': body},
        tokens=tokens,
    )
    response = messaging.send_multicast(message)

    result = {
        'failure_count': response.failure_count,
        'failed_tokens': [],
    }

    if result['failure_count'] > 0:
        responses = response.responses
        for idx, resp in enumerate(responses):
            if not resp.success:
                result['failed_tokens'].append(tokens[idx])
    return result
