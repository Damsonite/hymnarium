from django.db.models import (
    Model,
    AutoField,
    IntegerField,
    TextField,
    ForeignKey,
    ManyToManyField,
    CASCADE,
    RESTRICT,
    CheckConstraint,
    UniqueConstraint,
    Q,
)


class Author(Model):
    id = AutoField(primary_key=True)
    name = TextField(unique=True, db_collation="nocase")

    class Meta:
        db_table = "authors"

    def __str__(self) -> str:
        return self.name


class Hymn(Model):
    id = IntegerField(primary_key=True)
    author = ForeignKey(Author, on_delete=CASCADE, null=True, blank=True)
    topics = ManyToManyField(
        "Topic", related_name="hymns", blank=True, db_table="hymn_topics"
    )
    verse = TextField(null=True, blank=True)
    has_track = IntegerField(default=0)
    has_demo = IntegerField(default=0)

    class Meta:
        db_table = "hymns"
        constraints = [
            CheckConstraint(
                condition=Q(has_demo__in=[0, 1]), name="hymns_has_demo_0_1"
            ),
            CheckConstraint(
                condition=Q(has_track__in=[0, 1]), name="hymns_has_track_0_1"
            ),
        ]

    def __str__(self) -> str:
        return str(self.id)


class Topic(Model):
    id = AutoField(primary_key=True)
    name = TextField(unique=True, db_collation="nocase")

    class Meta:
        db_table = "topics"

    def __str__(self) -> str:
        return self.name


class HymnTranslation(Model):
    hymn = ForeignKey(Hymn, on_delete=RESTRICT)
    language = TextField()
    title = TextField()
    text = TextField()

    class Meta:
        db_table = "hymn_translations"
        constraints = [
            UniqueConstraint(fields=["hymn", "language"], name="hymn_language_unique")
        ]

    def __str__(self) -> str:
        return f"{self.hymn_id}:{self.language}"
