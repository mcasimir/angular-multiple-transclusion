(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if (typeof exports === 'object') {
    factory(require('angular'));
  } else {
    factory(root.angular);
  }
}(this, function (angular) {
  'use strict';

  angular.module('angular-multiple-transclusion', [])

  .directive('ngTransclude', function(){
    return {
      priority: 1, // run after ng-transclude

      link: function(scope, elem, attrs) {

        if (attrs.transcludeFrom) {
          var children = elem.children();
          for (var i = 0; i < children.length; i++) {
            var child = angular.element(children[i]);
            var transcludeAs = child.attr('transclude-to');
            if (transcludeAs !== attrs.transcludeFrom) {
              child.remove();
            }
          }
        }

      }
    };
  });

}));
