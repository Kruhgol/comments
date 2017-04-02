from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Parent(models.Model):
    class Meta:
        db_table = "Parent"

class Comment(models.Model):
    class Meta:
        db_table = "comment"

    comment_name = models.CharField(max_length=200)
    comment_email = models.EmailField()
    comment_homeurl = models.CharField(blank=True, max_length=200)
    comment_text = models.TextField()
    comment_date = models.DateTimeField()
    comment_rating = models.IntegerField()
    comment_isparent = models.BooleanField()
    comment_parentid = models.IntegerField(null=True,blank=True)
    #comment_parent = models.ForeignKey(Comment, null=True)
    def __unicode__(self):
        return self.comment_name