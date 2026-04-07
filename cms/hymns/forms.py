from django import forms

from .models import Author, Hymn, HymnTranslation, Topic


INPUT_CLASSES = (
    "mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm "
    "leading-5 text-text shadow-sm outline-none transition focus:border-primary "
    "focus:ring-2 focus:ring-primary/20"
)
TEXTAREA_CLASSES = (
    "mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm "
    "leading-5 text-text shadow-sm outline-none transition focus:border-primary "
    "focus:ring-2 focus:ring-primary/20 min-h-36 resize-y"
)
SELECT_CLASSES = (
    "mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm "
    "leading-5 text-text shadow-sm outline-none transition focus:border-primary "
    "focus:ring-2 focus:ring-primary/20"
)
CHECKBOX_CLASSES = (
    "h-4 w-4 rounded border-slate-300 text-primary focus:ring-2 "
    "focus:ring-primary/20"
)


def _merge_classes(existing: str, extra: str) -> str:
    if existing:
        return f"{existing} {extra}".strip()
    return extra


class StyledModelForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field in self.fields.values():
            widget = field.widget
            existing_classes = widget.attrs.get("class", "")

            if isinstance(widget, forms.CheckboxInput):
                widget.attrs["class"] = _merge_classes(
                    existing_classes, CHECKBOX_CLASSES
                )
            elif isinstance(widget, forms.Textarea):
                widget.attrs["class"] = _merge_classes(
                    existing_classes, TEXTAREA_CLASSES
                )
            elif isinstance(widget, (forms.Select, forms.SelectMultiple)):
                widget.attrs["class"] = _merge_classes(existing_classes, SELECT_CLASSES)
            else:
                widget.attrs["class"] = _merge_classes(existing_classes, INPUT_CLASSES)


class AuthorForm(StyledModelForm):
    name = forms.CharField()

    class Meta:
        model = Author
        fields = ["name"]


class TopicForm(StyledModelForm):
    name = forms.CharField()

    class Meta:
        model = Topic
        fields = ["name"]


class HymnCreateForm(StyledModelForm):
    id = forms.IntegerField()
    has_track = forms.BooleanField(required=False, widget=forms.CheckboxInput())
    has_demo = forms.BooleanField(required=False, widget=forms.CheckboxInput())

    class Meta:
        model = Hymn
        fields = ["id", "author", "topics", "verse", "has_track", "has_demo"]
        widgets = {
            "verse": forms.Textarea(),
            "author": forms.Select(),
            "topics": forms.SelectMultiple(),
        }


class HymnUpdateForm(StyledModelForm):
    has_track = forms.BooleanField(required=False, widget=forms.CheckboxInput())
    has_demo = forms.BooleanField(required=False, widget=forms.CheckboxInput())

    class Meta:
        model = Hymn
        fields = ["author", "topics", "verse", "has_track", "has_demo"]
        widgets = {
            "verse": forms.Textarea(),
            "author": forms.Select(),
            "topics": forms.SelectMultiple(),
        }


class HymnTranslationForm(StyledModelForm):
    language = forms.CharField()
    title = forms.CharField()

    class Meta:
        model = HymnTranslation
        fields = ["hymn", "language", "title", "text"]
        widgets = {
            "hymn": forms.Select(),
            "text": forms.Textarea(),
        }
