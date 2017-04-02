from django.contrib import admin

# Register your models here.

from models import Comment

class CommentAdmin(admin.ModelAdmin):
    fields = [
                'comment_name',
                'comment_email',
                'comment_homeurl',
                'comment_text',
                'comment_date',
                'comment_rating',
                'comment_isparent',
                'comment_parentid'
            ]


admin.site.register(Comment, CommentAdmin)