from django.shortcuts import render, render_to_response, redirect
from django.http.response import HttpResponse, Http404
import json
from models import Comment
from datetime import datetime

# Create your views here.

def index(request):
    return render(request, 'index.html')



def like(request, commentId):
    print commentId
    c = Comment.objects.get(id = commentId)
    rating = c.comment_rating
    c.comment_rating = c.comment_rating + 1
    c.save()
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
        if i.comment_picture:
            o['comment_picture'] = i.comment_picture.url
        if Comment.objects.filter(comment_parentid = i.id):
            c = Comment.objects.filter(comment_parentid = i.id)
            o['childComments'] = getChildComment(c)
        r.append(o)
    res = json.dumps(r)
    return HttpResponse(res)

def disLike(request, commentId):
    print commentId
    c = Comment.objects.get(id = commentId)
    rating = c.comment_rating
    if rating > 0:
        c.comment_rating = c.comment_rating - 1
    c.save()        
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
        if i.comment_picture:
            o['comment_picture'] = i.comment_picture.url
        if Comment.objects.filter(comment_parentid = i.id):
            c = Comment.objects.filter(comment_parentid = i.id)
            o['childComments'] = getChildComment(c)
        r.append(o)
    res = json.dumps(r)
    return HttpResponse(res)

def postComment(request):
    print request
    if 'picture' in request.FILES:
        print '____Est picture____'
    if 'file' in request.FILES:
        print '____Est file____'        
    c = Comment.objects.create(comment_name = request.POST['name'],
                                comment_email = request.POST['email'],
                                comment_text = request.POST['comment'],
                                comment_rating = 0,
                                comment_isparent = False)
    if 'comment_id' in request.POST:
        print '___comment_id___'
        print request.POST['comment_id']
        c.comment_isparent = True
        c.comment_parentid = request.POST['comment_id']
        c.save()
    if 'homeurl' in request.POST:
        print '___home_url___'
        c.comment_homeurl = request.POST['homeurl']
        c.save()
    if 'picture' in request.FILES:
        print '___picture___'
        c.comment_picture = request.FILES['picture']
        c.save()

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
        if i.comment_picture:
            o['comment_picture'] = i.comment_picture.url
        if Comment.objects.filter(comment_parentid = i.id):
            c = Comment.objects.filter(comment_parentid = i.id)
            o['childComments'] = getChildComment(c)
        r.append(o)
    res = json.dumps(r)
    return HttpResponse(res)

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
        if i.comment_picture:
            o['comment_picture'] = i.comment_picture.url
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
        if i.comment_picture:
            obj['comment_picture'] = i.comment_picture.url
        if Comment.objects.filter(comment_parentid = i.id):
            c = Comment.objects.filter(comment_parentid = i.id)
            obj['childComments'] = getChildComment(c)
        arr.append(obj)
    return arr