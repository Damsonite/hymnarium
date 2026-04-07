from django.urls import reverse_lazy
from django.views.generic import (
    TemplateView,
    ListView,
    DetailView,
    CreateView,
    UpdateView,
    DeleteView,
)

from .models import Author, Topic, Hymn, HymnTranslation


class HomeView(TemplateView):
    template_name = "home.html"


class AuthorListView(ListView):
    model = Author
    template_name = "author_list.html"


class AuthorDetailView(DetailView):
    model = Author
    template_name = "author_detail.html"


class AuthorCreateView(CreateView):
    model = Author
    fields = ["name"]
    template_name = "form.html"
    success_url = reverse_lazy("hymns:author-list")


class AuthorUpdateView(UpdateView):
    model = Author
    fields = ["name"]
    template_name = "form.html"
    success_url = reverse_lazy("hymns:author-list")


class AuthorDeleteView(DeleteView):
    model = Author
    template_name = "confirm_delete.html"
    success_url = reverse_lazy("hymns:author-list")


class TopicListView(ListView):
    model = Topic
    template_name = "topic_list.html"


class TopicDetailView(DetailView):
    model = Topic
    template_name = "topic_detail.html"


class TopicCreateView(CreateView):
    model = Topic
    fields = ["name"]
    template_name = "form.html"
    success_url = reverse_lazy("hymns:topic-list")


class TopicUpdateView(UpdateView):
    model = Topic
    fields = ["name"]
    template_name = "form.html"
    success_url = reverse_lazy("hymns:topic-list")


class TopicDeleteView(DeleteView):
    model = Topic
    template_name = "confirm_delete.html"
    success_url = reverse_lazy("hymns:topic-list")


class HymnListView(ListView):
    model = Hymn
    template_name = "hymn_list.html"


class HymnDetailView(DetailView):
    model = Hymn
    template_name = "hymn_detail.html"


class HymnCreateView(CreateView):
    model = Hymn
    fields = ["id", "author", "topics", "verse", "has_track", "has_demo"]
    template_name = "form.html"
    success_url = reverse_lazy("hymns:hymn-list")


class HymnUpdateView(UpdateView):
    model = Hymn
    fields = ["author", "topics", "verse", "has_track", "has_demo"]
    template_name = "form.html"
    success_url = reverse_lazy("hymns:hymn-list")


class HymnDeleteView(DeleteView):
    model = Hymn
    template_name = "confirm_delete.html"
    success_url = reverse_lazy("hymns:hymn-list")


class HymnTranslationListView(ListView):
    model = HymnTranslation
    template_name = "hymntranslation_list.html"


class HymnTranslationDetailView(DetailView):
    model = HymnTranslation
    template_name = "hymntranslation_detail.html"


class HymnTranslationCreateView(CreateView):
    model = HymnTranslation
    fields = ["hymn", "language", "title", "text"]
    template_name = "form.html"
    success_url = reverse_lazy("hymns:hymntranslation-list")


class HymnTranslationUpdateView(UpdateView):
    model = HymnTranslation
    fields = ["hymn", "language", "title", "text"]
    template_name = "form.html"
    success_url = reverse_lazy("hymns:hymntranslation-list")


class HymnTranslationDeleteView(DeleteView):
    model = HymnTranslation
    template_name = "confirm_delete.html"
    success_url = reverse_lazy("hymns:hymntranslation-list")
