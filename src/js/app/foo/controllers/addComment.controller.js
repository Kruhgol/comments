'use strict';

module.exports = function($scope, textvalService, requestsService){
            var textarea = document.getElementById("comment");
            $scope.addI = function(){
                var commentText = textarea.value;
                commentText += '<i></i>'
                textarea.value = commentText;
            }
            $scope.addStrong = function(){
                var commentText = textarea.value;
                commentText += '<strong></strong>'
                textarea.value = commentText;
            }
            $scope.addCode = function(){
                var commentText = textarea.value;
                commentText += '<code></code>'
                textarea.value = commentText;
            }
            $scope.addA = function(){
                var commentText = textarea.value;
                commentText += '<a href="" title=""></a>'
                textarea.value = commentText;
            }
            $scope.fileValid = true;
            $scope.$on("inputFileChange", function(){
                var f = document.forms.commentForm.picture.files[0]
                if(f.size < 3000000 && 
                    (
                        f.type == 'image/jpeg' ||
                        f.type == 'image/jpg' ||
                        f.type == 'image/png' ||
                        f.type == 'image/gif'
                        )){
                    $scope.fileValid = true;
                console.log($scope.fileValid)
                } else {
                    $scope.fileValid = false;
                    console.log($scope.fileValid)
                }   
                $scope.$apply();          


            })


            $scope.sendComment = function(comment){
                var text = textvalService.isvaltext(comment.comment);
                if(text){
                    // alert('i' + $scope.commentForm.picture);
                    // console.log("_____");
                    // console.log(document.forms.commentForm);
                    //var fd = new FormData(document.forms.commentForm); //document.forms.commentForm
                    

                    var fd = new FormData();
                    fd.append('name', comment.name);
                    fd.append('email', comment.email);
                    fd.append('comment', comment.comment);

                    console.log(comment.comment_id);
                    if(comment.comment_id){
                        fd.append('comment_id', comment.comment_id)
                    }
                    if(document.forms.commentForm.picture.files[0]){
                        console.log('add1')
                        fd.append('file', document.forms.commentForm.picture.files[0])                       
                    }

                    //console.log(fd);


                    // $scope.textareaInvalid = false;
                    // if(commentForm.picture.value){
                    //     console.log('add1')
                    //     formData.append('file', commentForm.picture.files[0])                       
                    // }
                    // if(commentForm.userurl.value){
                    //     comment['userurl'] = $scope.comment.userurl;
                    //     console.log(comment['userurl'])
                    // }

                    // var request = new XMLHttpRequest();
                    // request.open("POST", "http://127.0.0.1:8000/postcomment/");
                    // request.send(fd);
                    requestsService.postComment(fd).then(function(result){
                        console.log(result);
                    })
                } else {
                    $scope.textareaInvalid = true;
                }
            }
}

