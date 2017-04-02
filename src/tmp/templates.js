module.exports = angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('addcomment.html','<div class="add-comment">\r\n    <p>Send comment</p>\r\n    <form name="addCommentForm">\r\n        <label for="name">Your name:</label><br/>\r\n        <input type="text" name="userName" id="name" placeholder="Enter your name"><br/>\r\n\r\n        <label for="email">Your email:</label><br/>\r\n        <input type="text" name="userEmail" id="email" placeholder="Enter your email"><br/>\r\n\r\n        <label for="url">Your homepage url:</label><br/>\r\n        <input type="text" name="userUrl" id="url" placeholder="Enter your homepage url"><br/>\r\n        <div class="comment-textarea">\r\n                <label for="comment">Enter your comment:</label><br/>  \r\n                <textarea name = "userComment" id="comment" placeholder="Enter your comment"></textarea>\r\n                <div class="buttons">\r\n                    <p>You can use tags:</p>\r\n                    <button>&lt;i&gt;</button><br/>\r\n                    <button>&lt;strong&gt;</button><br/>\r\n                    <button>&lt;a&gt;</button><br/>\r\n                    <button>&lt;code&gt;</button><br/>\r\n                </div>    \r\n        </div>   \r\n        <div class="captha">\r\n            <no-captcha\r\n                g-recaptcha-response="gRecaptchaResponse"\r\n                theme=\'light\'\r\n                control="noCaptchaControl"\r\n                site-key="<your site key>">\r\n            </no-captcha>\r\n  <!--           <img src="dd" alt="dd">\r\n            <input type="text" name="captha">\r\n            <div class="clear-both"></div> -->\r\n        </div> \r\n        <button class="send">Send comment!</button>    \r\n    \r\n    </form>\r\n</div>\r\n');
$templateCache.put('comments.html','<div class="comments">\r\n    <div class="comment" ng-repeat="comment in comments">\r\n        <div class="comment-parent">\r\n            <div class="user-data">\r\n                <div class="user-image">\r\n                    <img src="media/user.png" height="40px;" alt="user">\r\n                </div>\r\n                <div class="user-name">\r\n                    <span>{{comment.userName}}</span>\r\n                </div>\r\n                <div class="user-comment-date">\r\n                    <p><span>1 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2016</span> \u0432 <span>17:44</span></p>\r\n                </div>\r\n                <div class="user-rating">\r\n                    <span>{{comment.userRating}}</span>\r\n                </div>\r\n                <div class="user-rating-plus">\r\n                    <img src="1" alt="">\r\n                </div>\r\n                <div class="user-rating-minus">\r\n                    <img src="2" alt="">\r\n                </div>\r\n            </div>\r\n            <div class="user-text">\r\n                <div class="comment-text">\r\n                    <p>{{comment.commentText}}</p>\r\n                </div>\r\n                <div class="comment-image">\r\n                    <img src="33" alt="">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="comments-child">\r\n            <comments-dir comments="{{comment.childComments}}"></comments-dir>\r\n        </div>\r\n    </div>\r\n</div>');
$templateCache.put('page.html','<addcomment-dir></addcomment-dir>\r\n\r\n<comments-dir comments="{{comments}}"></comments-dir>\r\n\r\n<div class="pages">\r\n    <a href="#/page/1">1</a>\r\n    <a href="#/page/2">2</a>\r\n    <a href="#/page/3">3</a>\r\n    <a href="#/page/4">4</a>\r\n</div>');
$templateCache.put('start.html','<div class="add-comment">\r\n    <p>Send comment</p>\r\n    <form name="addCommentForm">\r\n        <label for="name">Your name:</label><br/>\r\n        <input type="text" name="userName" id="name" placeholder="Enter your name"><br/>\r\n\r\n        <label for="email">Your email:</label><br/>\r\n        <input type="text" name="userEmail" id="email" placeholder="Enter your email"><br/>\r\n\r\n        <label for="url">Your homepage url:</label><br/>\r\n        <input type="text" name="userUrl" id="url" placeholder="Enter your homepage url"><br/>\r\n        <div class="comment-textarea">\r\n                <label for="comment">Enter your comment:</label><br/>  \r\n                <textarea name = "userComment" id="comment" placeholder="Enter your comment"></textarea>\r\n                <div class="buttons">\r\n                    <p>You can use tags:</p>\r\n                    <button>&lt;i&gt;</button><br/>\r\n                    <button>&lt;strong&gt;</button><br/>\r\n                    <button>&lt;a&gt;</button><br/>\r\n                    <button>&lt;code&gt;</button><br/>\r\n                </div>    \r\n        </div>   \r\n        <div class="captha">\r\n            <img src="dd" alt="dd">\r\n            <input type="text" name="captha">\r\n            <div class="clear-both"></div>\r\n        </div> \r\n        <button class="send">Send comment!</button>    \r\n    \r\n    </form>\r\n</div>\r\n\r\n<div class="comments">\r\n    <div class="comment">\r\n        <div class="comment-parent">\r\n            <div class="user-data">\r\n                <div class="user-image">\r\n                    <img src="1" alt="">\r\n                </div>\r\n                <div class="user-name">\r\n                    <span>Nikolay Krugol</span>\r\n                </div>\r\n                <div class="user-comment-date">\r\n                    <p><span>1 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2016</span> \u0432 <span>17:44</span></p>\r\n                </div>\r\n                <div class="user-rating">\r\n                    10\r\n                </div>\r\n                <div class="user-rating-plus">\r\n                    <img src="1" alt="">\r\n                </div>\r\n                <div class="user-rating-minus">\r\n                    <img src="2" alt="">\r\n                </div>\r\n            </div>\r\n            <div class="user-text">\r\n                <div class="comment-text">\r\n                    <p>lsfkfsfnkls dl fsjdf  djsgj sgg jksg jkg s gjkg js gjs gjk gjsgj gj gsjk gjks gkj sgj jkg jksg jgjs gkjg jks gjks gjsjg jg jsg kj gskjg jks gjks gkj gkjg kjsg jkg kjsg sjgkjs gjsdg sd gosdg lsjdg ljsdg lsdgj dsg jds jlg jdlsg ljsdg jlg dsgjsd glsd</p>\r\n                </div>\r\n                <div class="comment-image">\r\n                    <img src="33" alt="">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="comments-child">\r\n            \r\n\r\n            <div class="comment">\r\n                <div class="comment-parent">\r\n                    <div class="user-data">\r\n                        <div class="user-image">\r\n                            <img src="1" alt="">\r\n                        </div>\r\n                        <div class="user-name">\r\n                            <span>Nikolay Krugol</span>\r\n                        </div>\r\n                        <div class="user-comment-date">\r\n                            <p><span>1 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2016</span> \u0432 <span>17:44</span></p>\r\n                        </div>\r\n                        <div class="user-rating">\r\n                            10\r\n                        </div>\r\n                        <div class="user-rating-plus">\r\n                            <img src="1" alt="">\r\n                        </div>\r\n                        <div class="user-rating-minus">\r\n                            <img src="2" alt="">\r\n                        </div>\r\n                    </div>\r\n                    <div class="user-text">\r\n                        <div class="comment-text">\r\n                            <p>lsfkfsfnkls dl fsjdf  djsgj sgg jksg jkg s gjkg js gjs gjk gjsgj gj gsjk gjks gkj sgj jkg jksg jgjs gkjg jks gjks gjsjg jg jsg kj gskjg jks gjks gkj gkjg kjsg jkg kjsg sjgkjs gjsdg sd gosdg lsjdg ljsdg lsdgj dsg jds jlg jdlsg ljsdg jlg dsgjsd glsd</p>\r\n                        </div>\r\n                        <div class="comment-image">\r\n                            <img src="33" alt="">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="comments-child">\r\n                    \r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>');}]);