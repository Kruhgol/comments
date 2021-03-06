'use strict'
// controller for addComment.directive

module.exports = function($scope, $rootScope, textvalService, requestsService, appData) {

    //the validity of the file in the field input[type=file]. Default value
    $scope.fileValid = true;

    //send form to server if comment text is valid
    //@param userComment{Object}
    $scope.sendComment = function(userComment) {
        var validCommentText = textvalService.isvaltext(userComment.comment);

        if (validCommentText) {

            userComment.comment = validCommentText;

            var fd = new FormData();
            fd.append('name', userComment.name);
            fd.append('email', userComment.email);
            fd.append('comment', userComment.comment);

            if ($scope.formId != 'commentFormId') {
                fd.append('comment_id', $scope.comment.comment_id);
            }

            if (document.getElementById($scope.formId).picture.files[0]) {
                fd.append('picture', document.getElementById($scope.formId).picture.files[0]);
            }

            //POST form, and get result - (Array of comments with new comment)
            // result with comments (Array) save in appData.value service for storing 
            // event 'changeCommentsData' informs in App that appData is has changed
            requestsService.postComment(fd).then(function(result) {
                appData.comments = result.data;
                $rootScope.$broadcast('changeCommentsData');

            })
        } else {
            $scope.textareaInvalid = true;
        }
    }
}
