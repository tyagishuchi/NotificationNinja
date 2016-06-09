from django.db import models
import datetime
# Create your models here.
class Notification(models.Model):

    not_id = models.IntegerField(max_length=10,primary_key=True)
    not_text = models.CharField(max_length=100,help_text="Notification Texts")
    not_time = models.DateTimeField(auto_now_add=True)
    not_status = models.BooleanField(default=False,help_text="True = Read, False = Unread")

    def __unicode__(self):
        return self.not_text,self.not_time

    def create_new_notif(self,**kwargs):
        import time
        sleep_time = kwargs.get('st',30)
        notification_texts = {"Divesh Sadhwani","Sadu","Jaanu","Sweety","Babes"}
        while True:
            for e in notification_texts:
                new_not = Notification()
                new_not['not_text'] = e
                new_not.save()
            time.sleep(sleep_time)
