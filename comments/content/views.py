from django.shortcuts import render, render_to_response, redirect
from django.http.response import HttpResponse, Http404
import json
from models import Comment
from captcha.models import CaptchaStore
from captcha.helpers import captcha_image_url

# Create your views here.

def index(request):
    return render(request, 'index.html')

def getCaptcha(request):
    r = {}
    r['new_cptch_key'] = CaptchaStore.generate_key()
    print '_ _ _ _ _ _'
    print r['new_cptch_key']
    r['new_cptch_image'] = captcha_image_url(r['new_cptch_key'])
    res = json.dumps(r)
    return HttpResponse(res)


def getComments(request):
    print '_____getcomments______'
    comments = Comment.objects.filter(comment_isparent = False)
    r =[]
    for i in comments:
        o={}
        o['userName'] = i.comment_name
        o['userDate'] = json.dumps(i.comment_date.strftime("%Y-%m-%d %H:%M"))
        o['userRating'] = i.comment_rating
        o['commentText'] = i.comment_text
        o['parent_id'] = i.comment_parentid
        o['comment_id'] = i.id
        if Comment.objects.filter(comment_parentid = i.id):
            c = Comment.objects.filter(comment_parentid = i.id)
            o['childComments'] = getChildComment(c)
        r.append(o)
    res = json.dumps(r)
    return HttpResponse(res)


def getChildComment(c):
    arr=[]
    for i in c:
        obj={}
        obj['userName'] = i.comment_name
        obj['userDate'] = json.dumps(i.comment_date.strftime("%Y-%m-%d %H:%M"))
        obj['userRating'] = i.comment_rating
        obj['commentText'] = i.comment_text
        obj['parent_id'] = i.comment_parentid
        obj['comment_id'] = i.id
        if Comment.objects.filter(comment_parentid = i.id):
            c = Comment.objects.filter(comment_parentid = i.id)
            obj['childComments'] = getChildComment(c)
        arr.append(obj)
    return arr