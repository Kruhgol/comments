
module.exports = function($scope, $rootScope, textvalService, requestsService, appData){
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

            $scope.sendComment = function(userComment){
                var validCommentText = textvalService.isvaltext(userComment.comment);
                if(validCommentText){
                    userComment.comment = validCommentText; 
                    var fd = new FormData();
                    fd.append('name', userComment.name);
                    fd.append('email', userComment.email);
                    fd.append('comment', userComment.comment);
                    console.log($scope.formId)
                    if($scope.formId != 'commentFormId'){
                        fd.append('comment_id', $scope.comment.comment_id);
                        console.log("_______FFFF_________");
                        console.log($scope.comment.comment_id);
                    }
                    if(document.getElementById($scope.formId).picture.files[0]){
                        console.log('add1');
                        console.log(document.getElementById($scope.formId).picture.files[0]);
                        fd.append('picture', document.getElementById($scope.formId).picture.files[0]);                       
                    }
                    requestsService.postComment(fd).then(function(result){
                        appData.comments = result.data;
                        $rootScope.$broadcast('changeCommentsData');
                    })
                } else {
                    $scope.textareaInvalid = true;
                }
            }
}

