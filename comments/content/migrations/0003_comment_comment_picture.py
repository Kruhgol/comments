# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-04-06 19:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0002_auto_20170406_2100'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='comment_picture',
            field=models.ImageField(blank=True, null=True, upload_to='images', verbose_name='photo'),
        ),
    ]
