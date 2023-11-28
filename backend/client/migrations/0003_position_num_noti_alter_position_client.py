from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0002_user_fcm_token'),
    ]

    operations = [
        migrations.AddField(
            model_name='position',
            name='num_noti',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='position',
            name='client',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
