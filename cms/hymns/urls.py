from django.urls import path

from . import views

app_name = "hymns"

urlpatterns = [
    path("", views.HomeView.as_view(), name="home"),
    path("authors/", views.AuthorListView.as_view(), name="author-list"),
    path("authors/new/", views.AuthorCreateView.as_view(), name="author-create"),
    path("authors/<int:pk>/", views.AuthorDetailView.as_view(), name="author-detail"),
    path(
        "authors/<int:pk>/edit/",
        views.AuthorUpdateView.as_view(),
        name="author-update",
    ),
    path(
        "authors/<int:pk>/delete/",
        views.AuthorDeleteView.as_view(),
        name="author-delete",
    ),
    path("topics/", views.TopicListView.as_view(), name="topic-list"),
    path("topics/new/", views.TopicCreateView.as_view(), name="topic-create"),
    path("topics/<int:pk>/", views.TopicDetailView.as_view(), name="topic-detail"),
    path("topics/<int:pk>/edit/", views.TopicUpdateView.as_view(), name="topic-update"),
    path(
        "topics/<int:pk>/delete/",
        views.TopicDeleteView.as_view(),
        name="topic-delete",
    ),
    path("hymns/", views.HymnListView.as_view(), name="hymn-list"),
    path("hymns/new/", views.HymnCreateView.as_view(), name="hymn-create"),
    path("hymns/<int:pk>/", views.HymnDetailView.as_view(), name="hymn-detail"),
    path("hymns/<int:pk>/edit/", views.HymnUpdateView.as_view(), name="hymn-update"),
    path("hymns/<int:pk>/delete/", views.HymnDeleteView.as_view(), name="hymn-delete"),
    path(
        "translations/",
        views.HymnTranslationListView.as_view(),
        name="hymntranslation-list",
    ),
    path(
        "translations/new/",
        views.HymnTranslationCreateView.as_view(),
        name="hymntranslation-create",
    ),
    path(
        "translations/<int:pk>/",
        views.HymnTranslationDetailView.as_view(),
        name="hymntranslation-detail",
    ),
    path(
        "translations/<int:pk>/edit/",
        views.HymnTranslationUpdateView.as_view(),
        name="hymntranslation-update",
    ),
    path(
        "translations/<int:pk>/delete/",
        views.HymnTranslationDeleteView.as_view(),
        name="hymntranslation-delete",
    ),
]
