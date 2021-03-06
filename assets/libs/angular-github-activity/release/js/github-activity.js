/*
 angular-github-activity - v0.1.0
 (c) 2013, Daniel Kanze. https://github.com/gigablox
 License: MIT
*/

angular.module('github.activity', ['github.activity.tpls'])
.factory('GithubActivityService', function($q,$rootScope,$resource) {
    var _githubActivity = {};
    _githubActivity.events = function(opts){
        return $resource('https://api.github.com/users/:user/events', {user: opts.user}, {
            get: {method:'JSONP',params:opts.params}
        });
    }
    return _githubActivity;
})

.directive('githubActivity', function() {
    return {
        restrict: 'EA',
        replace: true,
        scope:{
          events: '=',
          options: '=',
        },
        templateUrl: 'views/github.activity.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityPushEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.pushEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityIssuesEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.issuesEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityIssuesCommentEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.issuesCommentEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityForkEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.forkEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityPullRequestEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.pullRequestEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityWatchEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.watchEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityFollowEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.followEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityCommitCommentEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.commitCommentEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityCreateEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.createEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityReleaseEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.releaseEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityForkApplyEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.forkApplyEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityGistEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.gistEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityGollumEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.gollumEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityMemberEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.memberEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityPublicEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.publicEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityPullRequestReviewCommentEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.pullRequestReviewCommentEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityTeamAddEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.teamAddEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityDeleteEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/github.activity.deleteEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
});


/*  -14/18 Complete
    -Need to set up public repo.
    -Need to work in template caching.
    
    CommitCommentEvent              Complete
    CreateEvent                     Complete
    DeleteEvent                     Complete
    ReleaseEvent                    Complete        
    FollowEvent                     Complete
    ForkEvent                       Complete
    ForkApplyEvent                  Need        --- Made directive and template. Not working on github?
    GistEvent                       Need        --- Made directive and template. Not working on github?
    GollumEvent                     Complete
    IssueCommentEvent               Complete
    IssuesEvent                     Complete
    MemberEvent                     Complete
    PublicEvent                     Complete
    PullRequestEvent                Complete
    PullRequestReviewCommentEvent   Need        --- Made directive and template. Not working on github?
    PushEvent                       Complete
    TeamAddEvent                    Need        --- Made directive and template. Not working on github?
    WatchEvent                      Complete
*/
angular.module('github.activity.tpls', ['views/github.activity.commitCommentEvent.tpl.html', 'views/github.activity.createEvent.tpl.html', 'views/github.activity.deleteEvent.tpl.html', 'views/github.activity.followEvent.tpl.html', 'views/github.activity.forkApplyEvent.tpl.html', 'views/github.activity.forkEvent.tpl.html', 'views/github.activity.gistEvent.tpl.html', 'views/github.activity.gollumEvent.tpl.html', 'views/github.activity.issuesCommentEvent.tpl.html', 'views/github.activity.issuesEvent.tpl.html', 'views/github.activity.memberEvent.tpl.html', 'views/github.activity.publicEvent.tpl.html', 'views/github.activity.pullRequestEvent.tpl.html', 'views/github.activity.pullRequestReviewCommentEvent.tpl.html', 'views/github.activity.pushEvent.tpl.html', 'views/github.activity.releaseEvent.tpl.html', 'views/github.activity.teamAddEvent.tpl.html', 'views/github.activity.tpl.html', 'views/github.activity.watchEvent.tpl.html']);

angular.module("views/github.activity.commitCommentEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.commitCommentEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='CommitCommentEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-bubble github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <a class=\"github-activity-description-url\" href=\"{{event.payload.comment.html_url}}\" target=\"_blank\">({{event.payload.comment.commit_id | limitTo: 7}})</a>\n" +
    "        <span class=\"github-activity-description-label\">&nbsp;commit comment</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.payload.comment.body}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.createEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.createEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='CreateEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span ng-show=\"event.payload.ref_type=='repository'\" class=\"icon-book-alt github-activity-row-icon\"></span>\n" +
    "        <span ng-show=\"event.payload.ref_type=='tag'\" class=\"icon-tag-fill github-activity-row-icon\"></span>\n" +
    "        <span ng-show=\"event.payload.ref_type=='branch'\" class=\"icon-tree github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <span ng-show=\"event.payload.ref_type=='repository'\" class=\"github-activity-description-label\">created {{event.payload.ref_type}}</span>\n" +
    "        <span ng-show=\"event.payload.ref_type=='tag'\" class=\"github-activity-description-label\"><a href=\"https://github.com/{{event.repo.name}}/tree/{{event.payload.ref}}\">({{event.payload.ref}})</a> created {{event.payload.ref_type}}</span>\n" +
    "        <span ng-show=\"event.payload.ref_type=='branch'\" class=\"github-activity-description-label\"><a href=\"https://github.com/{{event.repo.name}}/tree/{{event.payload.ref}}\">({{event.payload.ref}})</a> created {{event.payload.ref_type}}</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.actor.login}} created a {{event.payload.ref_type}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.deleteEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.deleteEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='DeleteEvent'\">\n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-cancel-circle github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <span class=\"github-activity-description-label\">{{event.payload.ref_type}}&nbsp;deleted</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.payload.ref}}&nbsp;{{event.payload.ref_type}}&nbsp;deleted\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.followEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.followEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='FollowEvent'\">\n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-user github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <!-- make this one transclude directive -->\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <span class=\"github-activity-description-label\">started following</span>\n" +
    "        <br>\n" +
    "        <a href=\"{{event.payload.target.html_url}}\" target=\"_blank\">@{{event.payload.target.login}}</a>\n" +
    "    </div>\n" +
    "    <!-- make this another transclude directive -->\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.actor.login}}&nbsp;started following&nbsp;{{event.payload.target.login}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.forkApplyEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.forkApplyEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='ForkApplyEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-bubble github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <a class=\"github-activity-description-url\" href=\"{{event.payload.comment.html_url}}\" target=\"_blank\">({{event.payload.comment.commit_id | limitTo: 7}})</a>\n" +
    "        <span class=\"github-activity-description-label\">&nbsp;commit comment</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.payload.body}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.forkEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.forkEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='ForkEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-fork github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <a class=\"github-activity-description-url\" href=\"{{event.payload.forkee.html_url}}\" target=\"_blank\">{{event.payload.forkee.full_name}}</a>\n" +
    "        <span class=\"github-activity-description-label\">forked</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.payload.forkee.description}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.gistEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.gistEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='GistEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-bubble github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <a class=\"github-activity-description-url\" href=\"{{event.payload.comment.html_url}}\" target=\"_blank\">({{event.payload.comment.commit_id | limitTo: 7}})</a>\n" +
    "        <span class=\"github-activity-description-label\">&nbsp;commit comment</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.payload.body}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.gollumEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.gollumEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='GollumEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-file github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <span class=\"github-activity-description-label\" ng-repeat=\"page in event.payload.pages | limitTo: 1\">{{page.action}} page</span>\n" +
    "        <br>\n" +
    "        <a ng-repeat=\"page in event.payload.pages | limitTo: 1\" href=\"{{page.html_url}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\" ng-repeat=\"page in event.payload.pages | limitTo: 1\">\n" +
    "            {{event.actor.login}} {{page.action}} {{page.page_name}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.issuesCommentEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.issuesCommentEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='IssueCommentEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-bubble github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <a class=\"github-activity-description-url\" href=\"{{event.payload.issue.html_url}}\" target=\"_blank\">(#{{event.payload.issue.number}})</a>\n" +
    "        <span class=\"github-activity-description-label\">comment&nbsp;{{event.payload.action}}</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.payload.comment.body}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.issuesEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.issuesEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='IssuesEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-warning github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <a class=\"github-activity-description-url\" href=\"{{event.payload.issue.html_url}}\" target=\"_blank\">(#{{event.payload.issue.number}})</a>\n" +
    "        <span class=\"github-activity-description-label\">&nbsp;{{event.payload.action}}</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.payload.issue.title}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.memberEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.memberEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='MemberEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-users github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <span class=\"github-activity-description-label\">{{event.payload.action}} member</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.actor.login}} {{event.payload.action}} {{event.payload.member.login}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.publicEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.publicEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='PublicEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-share github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <span class=\"github-activity-description-label\">made public</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.actor.login}} made this repo public\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.pullRequestEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.pullRequestEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='PullRequestEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-download github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <a class=\"github-activity-description-url\" href=\"{{event.payload.pull_request.html_url}}\" target=\"_blank\">(#{{event.payload.pull_request.number}})</a>\n" +
    "        <span class=\"github-activity-description-label\">&nbsp;pull request</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.payload.pull_request.title}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.pullRequestReviewCommentEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.pullRequestReviewCommentEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='PullRequestReviewCommentEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-bubble github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <a class=\"github-activity-description-url\" href=\"{{event.payload.comment.html_url}}\" target=\"_blank\">({{event.payload.comment.commit_id | limitTo: 7}})</a>\n" +
    "        <span class=\"github-activity-description-label\">&nbsp;commit comment</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.payload.comment.body}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.pushEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.pushEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='PushEvent'\">\n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-upload github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <a ng-repeat=\"commit in event.payload.commits\" ng-hide=\"!$last\" class=\"github-activity-description-url\" href=\"https://github.com/{{event.repo.name}}/commits/{{event.payload.head}}\" target=\"_blank\">({{event.payload.size}})</a>\n" +
    "        <span class=\"github-activity-description-label\">&nbsp;{{(event.payload.size>1)?'commits':'commit'}}</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.payload.commits[0].message}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.releaseEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.releaseEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='ReleaseEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-bubble github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <a class=\"github-activity-description-url\" href=\"{{event.payload.release.html_url}}\" target=\"_blank\">({{event.payload.release.tag_name}})</a>\n" +
    "        <span class=\"github-activity-description-label\">release {{event.payload.action}}</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.actor.login}} {{event.payload.action}} a release\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.teamAddEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.teamAddEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='TeamAddEvent'\">             \n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-bubble github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <a class=\"github-activity-description-url\" href=\"{{event.payload.comment.html_url}}\" target=\"_blank\">({{event.payload.comment.commit_id | limitTo: 7}})</a>\n" +
    "        <span class=\"github-activity-description-label\">&nbsp;commit comment</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.payload.body}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.tpl.html",
    "<div class=\"github-activity\">\n" +
    "    <div class=\"github-activity-header\">\n" +
    "        <span class=\"icon-github github-activity-icon\"></span>\n" +
    "        <span class=\"github-activity-header-label\">GITHUB ACTIVITY</span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-row\" ng-repeat=\"event in events | limitTo:options.limit\">\n" +
    "        <github-activity-push-event></github-activity-push-event>\n" +
    "        <github-activity-issues-event></github-activity-issues-event>\n" +
    "        <github-activity-issues-comment-event></github-activity-issues-comment-event>\n" +
    "        <github-activity-fork-event></github-activity-fork-event>\n" +
    "        <github-activity-pull-request-event></github-activity-pull-request-event>\n" +
    "        <github-activity-delete-event></github-activity-delete-event>\n" +
    "        <github-activity-watch-event></github-activity-watch-event>\n" +
    "        <github-activity-follow-event></github-activity-follow-event>\n" +
    "        <github-activity-commit-comment-event></github-activity-commit-comment-event>\n" +
    "        <github-activity-create-event></github-activity-create-event>\n" +
    "        <github-activity-release-event></github-activity-release-event>\n" +
    "        <github-activity-fork-apply-event></github-activity-fork-apply-event>\n" +
    "        <github-activity-gist-event></github-activity-gist-event>\n" +
    "        <github-activity-gollum-event></github-activity-gollum-event>\n" +
    "        <github-activity-member-event></github-activity-member-event>\n" +
    "        <github-activity-public-event></github-activity-public-event>\n" +
    "        <github-activity-pull-request-review-comment-event></github-activity-pull-request-review-comment-event>\n" +
    "        <github-activity-team-add-event></github-activity-team-add-event>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/github.activity.watchEvent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/github.activity.watchEvent.tpl.html",
    "<div class=\"github-activity-row-event\" ng-show=\"event.type=='WatchEvent'\">\n" +
    "    <div class=\"github-activity-row-date\">{{event.created_at | date:'medium'}}</div><br>\n" +
    "    <div class=\"github-activity-row-icon-container\">\n" +
    "        <span class=\"icon-eye github-activity-row-icon\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-description-container\">\n" +
    "        <span class=\"github-activity-description-label\">{{event.payload.action}}&nbsp;watching</span>\n" +
    "        <br>\n" +
    "        <a href=\"https://github.com/{{event.repo.name}}\" target=\"_blank\">@{{event.repo.name}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"github-activity-message-container\">\n" +
    "        <span class=\"github-activity-message-lquote\">&#8220;</span>\n" +
    "        <span class=\"github-activity-message\">\n" +
    "            {{event.actor.login}}&nbsp;{{event.payload.action}}&nbsp;watching&nbsp;{{event.repo.name}}\n" +
    "        </span>\n" +
    "        <span class=\"github-activity-message-rquote\">&#8221;</span>\n" +
    "    </div>\n" +
    "</div>");
}]);
