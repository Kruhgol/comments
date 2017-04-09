module.exports = angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('addcomment.html','<div class="add-comment">\r\n    <p>\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439</p>\r\n\r\n    <form name="commentForm" id="{{\'commentFormId\'+comment.comment_id}}" novalidate ng-controller="addCommentCtrl" enctype="multipart/form-data" ng-model="ddd">\r\n        <label for="name">\u0412\u0430\u0448\u0435 \u0438\u043C\u044F:</label><br/>\r\n        <input \r\n            type="text" \r\n            id="name"\r\n            name="name" \r\n            ng-pattern="/^[a-zA-Z0-9]*$/"\r\n            required\r\n            ng-model="userComment.name"\r\n            ng-minlength="5" \r\n            ng-maxlength="15" \r\n            ng-class="{\'input-wrong\': !commentForm.name.$pristine && (commentForm.name.$error.minlength || commentForm.name.$error.maxlength || commentForm.name.$invalid) }"\r\n            placeholder="Enter your name"><br/>\r\n            <div class="input-invalid" ng-show="!commentForm.name.$pristine && commentForm.name.$invalid">\r\n                \u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u0435\u043D\u0438\u044F \u0438 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043B\u0438\u0448\u044C  \u0431\u0443\u043A\u0432\u044B \u043B\u0430\u0442\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0430 \u0438 \u0446\u0438\u0444\u0440\u044B!\r\n            </div>\r\n            <div class="input-invalid" ng-show="!commentForm.name.$pristine && commentForm.name.$error.minlength">\r\n                \u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 5 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432!\r\n            </div>\r\n            <div class="input-invalid" ng-show="!commentForm.name.$pristine && commentForm.name.$error.maxlength">\r\n                \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 15 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432!\r\n            </div>\r\n        <label for="email">\u0412\u0430\u0448 email:</label><br/>\r\n        <input type="text" \r\n            name="email" \r\n            type="email"\r\n            id="email" \r\n            ng-pattern="/^([a-z0-9_\\.-]+)@([a-z0-9_\\.-]+)\\.([a-z\\.]{2,6})$/"\r\n            required\r\n            ng-model="userComment.email"\r\n            ng-maxlength="50"\r\n            ng-class="{\'input-wrong\': !commentForm.email.$pristine && (commentForm.email.$error.minlength || commentForm.email.$error.maxlength || commentForm.email.$invalid) }"\r\n            placeholder="Enter your email"><br/>\r\n            <div class="input-invalid" ng-show="!commentForm.email.$pristine && commentForm.email.$invalid">\r\n                \u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u0435\u043D\u0438\u044F \u0438 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C "email"!\r\n            </div>\r\n            <div class="input-invalid" ng-show="!commentForm.email.$pristine && commentForm.email.$error.maxlength">\r\n                \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 50 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432!\r\n            </div>\r\n\r\n        <label for="homeurl">\u0412\u0430\u0448 homepage url:</label><br/>\r\n        <input type="text" \r\n            name="homeurl" \r\n            ng-pattern="/^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$/" \r\n            id="homeurl"\r\n            ng-model="userComment.homeurl" \r\n            ng-class="{\'input-wrong\': !commentForm.homeurl.$valid}"\r\n            placeholder="Enter your homepage url"><br/>\r\n            <div class="input-invalid" ng-show="!commentForm.homeurl.$pristine && commentForm.homeurl.$invalid">\r\n                \u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0442\u0438\u043F\u0443 "url"!\r\n            </div>\r\n\r\n        <div class="comment-textarea">\r\n                <label for="comment">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439:</label><br/>  \r\n                <textarea \r\n                    name="comment" \r\n                    id="comment" \r\n                    required\r\n                    ng-minlength="1"\r\n                    ng-model="userComment.comment" \r\n                    ng-class="{\'input-wrong\':textareaInvalid || !commentForm.comment.$pristine && commentForm.comment.$error.minlength}"\r\n                    ng-click="textareaInvalid = false"\r\n                    placeholder="Enter your comment"></textarea>\r\n                <div class="buttons">\r\n                    <p>\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u0433\u0438:</p>\r\n                    <button ng-click="addI()">&lt;i&gt;</button><br/>\r\n                    <button ng-click="addStrong()">&lt;strong&gt;</button><br/>\r\n                    <button ng-click="addCode()">&lt;code&gt;</button><br/>\r\n                    <button ng-click="addA()">&lt;a href="" title=""&gt;</button><br/>\r\n                </div>    \r\n        </div>\r\n        <div class="textarea-invalid" ng-show="textareaInvalid">\r\n            \u0422\u0435\u043A\u0441\u0442 \u0412\u0430\u0448\u0435\u0433\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043D\u0435 \u0432\u0430\u043B\u0438\u0434\u0435\u043D! \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u044B:\r\n                <ul>\r\n                    <li>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u0433\u0430 &lt;script&gt;</li>\r\n                    <li>\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0430\u044F \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0442\u0435\u0433\u043E\u0432</li>\r\n                    <li>\u041F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u043D\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0435 \u0442\u0435\u0433\u0438</li>\r\n                    <li>\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C</li>\r\n                </ul>\r\n            \u041D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0435\u043C, \u0447\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u043B\u0438\u0448\u044C \u0442\u0435\u0433\u0438: &lt;i&gt;, &lt;strong&gt;, &lt;code&gt;, &lt;a href="" title=""&gt;\r\n        </div>   \r\n        <label for="picture">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443:</label>\r\n        <input type="file" \r\n            name="picture"\r\n            id="picture" \r\n            ng-model="userComment.picture"\r\n            inchange-dir="isFileValide">\r\n        <div class="input-invalid" ng-show="!fileValid">\r\n                \u0424\u0430\u0439\u043B \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \u043C\u0435\u043D\u044C\u0448\u0435 \u0447\u0435\u043C 3 \u043C\u0435\u0433\u0430\u0431\u0430\u0439\u0442\u0430. \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u044B - JPG, GIF, PNG!\r\n        </div>\r\n        <button \r\n            class="send" \r\n            ng-disabled="commentForm.$invalid"\r\n            ng-click="sendComment(userComment)">\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439!</button>    \r\n    \r\n    </form>\r\n</div>\r\n');
$templateCache.put('comments.html','<div class="comments">\r\n    <div class="comment" ng-repeat="comment in comments |orderBy:sortField:rever">\r\n        <div class="comment-parent">\r\n            <div class="user-data">\r\n                <div class="user-image">\r\n                    <img src="media/user.png" height="40px;" alt="user">\r\n                </div>\r\n                <div class="user-name">\r\n                    <span>{{comment.userName}}</span>\r\n                </div>\r\n                <div class="user-comment-date">\r\n                    <p><span>{{comment.userDate | mydateFilter}}</span></p>\r\n                </div>\r\n                <div class="user-rating">\r\n                    <span>{{comment.userRating}}</span>\r\n                </div>\r\n                <div class="user-rating-plus" ng-click="getLike(comment)">\r\n                    \r\n                </div>\r\n                <div class="user-rating-minus" ng-click="getDislike(comment)">\r\n\r\n                </div>\r\n            </div>\r\n            <div class="user-text">\r\n                <div class="comment-text">\r\n                    <p ng-bind-html="(comment.commentText | myTrustAsHtmlFilter)"></p>\r\n                </div>\r\n                <div class="comment-image">\r\n                    <img ng-src="{{comment.comment_picture}}" alt="{{comment.comment_picture}}">\r\n                </div>\r\n            </div>\r\n            <div class="comment-comment">\r\n                <span ng-click="addForm = !addForm">\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</span>\r\n                <div class="add-form" ng-show="addForm">\r\n                    <addcomment-dir comment="comment"></addcomment-dir>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="comments-child">\r\n            <comments-dir comments="{{comment.childComments}}"></comments-dir>\r\n        </div>\r\n    </div>\r\n</div>');
$templateCache.put('page.html','<addcomment-dir></addcomment-dir>\r\n<br/>\r\n<div class="sort">\r\n    <div class="sort-line">\r\n        <span>\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432:</span>\r\n        <button ng-click="orderByName(\'userName\')">\u041F\u043E \u0438\u043C\u0435\u043D\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F</button>\r\n        <button ng-click="orderByRating(\'userRating\')">\u041F\u043E \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0443</button>\r\n        <button ng-click="orderByDate(\'userDate\')">\u041F\u043E \u0434\u0430\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F</button>\r\n    </div>\r\n</div>\r\n\r\n<comments-dir comments="{{comments[page]}}"></comments-dir>\r\n\r\n\r\n<div class="pages" id="pages">\r\n    <a href="#/page/{{page - 1}}" ng-show="!leftBlock">&lt;</a>\r\n    <a ng-show="leftBlock" id="arrow-left-block">&lt;</a>\r\n    <a href="#/page/{{$index+1}}" page-dir index="{{$index}}" ng-repeat="i in comments">{{$index+1}}</a>\r\n    <a ng-show="rightBlock" id="arrow-right-block">&gt;</a>\r\n    <a href="#/page/{{page + 1}}" ng-show="!rightBlock">&gt;</a>\r\n</div>\r\n');
$templateCache.put('start.html','<div class="add-comment">\r\n    <p>Send comment</p>\r\n    <form name="addCommentForm">\r\n        <label for="name">Your name:</label><br/>\r\n        <input type="text" name="userName" id="name" placeholder="Enter your name"><br/>\r\n\r\n        <label for="email">Your email:</label><br/>\r\n        <input type="text" name="userEmail" id="email" placeholder="Enter your email"><br/>\r\n\r\n        <label for="url">Your homepage url:</label><br/>\r\n        <input type="text" name="userUrl" id="url" placeholder="Enter your homepage url"><br/>\r\n        <div class="comment-textarea">\r\n                <label for="comment">Enter your comment:</label><br/>  \r\n                <textarea name = "userComment" id="comment" placeholder="Enter your comment"></textarea>\r\n                <div class="buttons">\r\n                    <p>You can use tags:</p>\r\n                    <button>&lt;i&gt;</button><br/>\r\n                    <button>&lt;strong&gt;</button><br/>\r\n                    <button>&lt;a&gt;</button><br/>\r\n                    <button>&lt;code&gt;</button><br/>\r\n                </div>    \r\n        </div>   \r\n        <div class="captha">\r\n            <img src="dd" alt="dd">\r\n            <input type="text" name="captha">\r\n            <div class="clear-both"></div>\r\n        </div> \r\n        <button class="send">Send comment!</button>    \r\n    \r\n    </form>\r\n</div>\r\n\r\n<div class="comments">\r\n    <div class="comment">\r\n        <div class="comment-parent">\r\n            <div class="user-data">\r\n                <div class="user-image">\r\n                    <img src="1" alt="">\r\n                </div>\r\n                <div class="user-name">\r\n                    <span>Nikolay Krugol</span>\r\n                </div>\r\n                <div class="user-comment-date">\r\n                    <p><span>1 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2016</span> \u0432 <span>17:44</span></p>\r\n                </div>\r\n                <div class="user-rating">\r\n                    10\r\n                </div>\r\n                <div class="user-rating-plus">\r\n                    <img src="1" alt="">\r\n                </div>\r\n                <div class="user-rating-minus">\r\n                    <img src="2" alt="">\r\n                </div>\r\n            </div>\r\n            <div class="user-text">\r\n                <div class="comment-text">\r\n                    <p>lsfkfsfnkls dl fsjdf  djsgj sgg jksg jkg s gjkg js gjs gjk gjsgj gj gsjk gjks gkj sgj jkg jksg jgjs gkjg jks gjks gjsjg jg jsg kj gskjg jks gjks gkj gkjg kjsg jkg kjsg sjgkjs gjsdg sd gosdg lsjdg ljsdg lsdgj dsg jds jlg jdlsg ljsdg jlg dsgjsd glsd</p>\r\n                </div>\r\n                <div class="comment-image">\r\n                    <img src="33" alt="">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="comments-child">\r\n            \r\n\r\n            <div class="comment">\r\n                <div class="comment-parent">\r\n                    <div class="user-data">\r\n                        <div class="user-image">\r\n                            <img src="1" alt="">\r\n                        </div>\r\n                        <div class="user-name">\r\n                            <span>Nikolay Krugol</span>\r\n                        </div>\r\n                        <div class="user-comment-date">\r\n                            <p><span>1 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2016</span> \u0432 <span>17:44</span></p>\r\n                        </div>\r\n                        <div class="user-rating">\r\n                            10\r\n                        </div>\r\n                        <div class="user-rating-plus">\r\n                            <img src="1" alt="">\r\n                        </div>\r\n                        <div class="user-rating-minus">\r\n                            <img src="2" alt="">\r\n                        </div>\r\n                    </div>\r\n                    <div class="user-text">\r\n                        <div class="comment-text">\r\n                            <p>lsfkfsfnkls dl fsjdf  djsgj sgg jksg jkg s gjkg js gjs gjk gjsgj gj gsjk gjks gkj sgj jkg jksg jgjs gkjg jks gjks gjsjg jg jsg kj gskjg jks gjks gkj gkjg kjsg jkg kjsg sjgkjs gjsdg sd gosdg lsjdg ljsdg lsdgj dsg jds jlg jdlsg ljsdg jlg dsgjsd glsd</p>\r\n                        </div>\r\n                        <div class="comment-image">\r\n                            <img src="33" alt="">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="comments-child">\r\n                    \r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>');}]);