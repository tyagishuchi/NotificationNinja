from django.conf.urls import patterns, include, url
from django.conf.urls.static import static

from django.contrib import admin
import settings
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'NotificationNinja.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),(r'^$', 'InternalServiceProvider.views.index'),
)
urlpatterns += patterns('',
                        url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {
                            'document_root': settings.STATIC_URL,
                        }),
                        )

