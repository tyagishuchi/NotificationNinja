__author__ = 'SHUCHI'
from django.conf.urls import patterns, include, url
from InternalServiceProvider.views import Notification
homepatterns = patterns('',
                        url(r'^dashboard/$', Notification.as_view(), name='notification_dashboard'),
                        )
