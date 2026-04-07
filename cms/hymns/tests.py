from django.test import TestCase

from .forms import (
    AuthorForm,
    HymnCreateForm,
    HymnTranslationForm,
    HymnUpdateForm,
    TopicForm,
)
from .models import Author


class FormWidgetTests(TestCase):
    def test_short_text_fields_render_as_single_line_inputs(self):
        self.assertEqual(AuthorForm().fields["name"].widget.input_type, "text")
        self.assertEqual(TopicForm().fields["name"].widget.input_type, "text")
        self.assertEqual(
            HymnTranslationForm().fields["language"].widget.input_type, "text"
        )
        self.assertEqual(
            HymnTranslationForm().fields["title"].widget.input_type, "text"
        )

    def test_boolean_flags_render_as_checkboxes(self):
        self.assertEqual(
            HymnCreateForm().fields["has_track"].widget.input_type, "checkbox"
        )
        self.assertEqual(
            HymnCreateForm().fields["has_demo"].widget.input_type, "checkbox"
        )
        self.assertEqual(
            HymnUpdateForm().fields["has_track"].widget.input_type, "checkbox"
        )
        self.assertEqual(
            HymnUpdateForm().fields["has_demo"].widget.input_type, "checkbox"
        )

    def test_hymn_create_form_saves_checkbox_values_as_integers(self):
        author = Author.objects.create(name="Test Author")
        form = HymnCreateForm(
            data={
                "id": 123,
                "author": author.pk,
                "verse": "First verse",
                "has_track": "on",
            }
        )

        self.assertTrue(form.is_valid(), form.errors)

        hymn = form.save()
        self.assertEqual(hymn.has_track, 1)
        self.assertEqual(hymn.has_demo, 0)
