# Angular Multiple Transclusion

## A concise way to use multiple `ng-transclude` directives within the same AngularJs template.

Angular Multiple Transclusion extends `ng-transclude` to add support for multiple transclusion.

``` html
<div class="panel panel-default">
  <div class="panel-heading" ng-transclude transclude-from="header">
  </div>
  <div class="panel-body" ng-transclude transclude-from="content">
  </div>
</div>
```

## Demo

http://codepen.io/mcasimir/pen/XbapYd

## Install

```
bower i --save angular-multiple-transclusion
```

## Usage

**Example task:** Create a `myPanel` directive transcluding a fragment to the header and a fragment to the body.

Use `transclude-from` attribute along with `ng-transclude` directive to define insertion points for transclusion:

``` js
angular.module('myApp', ['angular-multiple-transclusion'])

.directive('myPanel', function(){
  return {
    restrict: 'E',
    transclude: true,
    template:
      '<div class="panel panel-default">' +
      '    <div class="panel-heading" ng-transclude transclude-from="header">' +
      '    </div>' +
      '    <div class="panel-body" ng-transclude transclude-from="content">' +
      '    </div>' +
      '</div>'
  };
});
```

Use `transclude-to` to wire each element to the respective `ng-transclude` block:

``` html
<main ng-app="myApp">
  <my-panel>
    <div transclude-to="header">Hi there!</div>
    <div transclude-to="content">Lorem ipsum dolor sit amet...</div>
  </my-panel>
</main>
```

## Works with isolated scopes

``` js
.directive('myDialog', function(){
  return {
    restrict: 'E',
    scope: {
      title: '@'
    },
    transclude: true,
    template:
      '<div class="dialog">' +
      '    <div class="dialog-title">{{title}}</div>' +
      '    <div class="dialog-body" ng-transclude transclude-from="content">' +
      '    </div>' +
      '    <div class="dialog-actions" ng-transclude transclude-from="actions">' +
      '    </div>' +
      '</div>'
  };
});
```

``` html
<main ng-app="myApp" ng-init="title='My Document'">
  <my-dialog title="Save Document">
    <div transclude-to="body">Are you sure?</div>
    <div transclude-to="actions">
      <button>Save {{title}}</button>
    </div>
  </my-dialog>
</main>
```

## Why multiple transclusion rocks?

See how people at [OpenTable](http://www.opentable.com) uses multiple transclusion with angular to create reusable components:

- https://www.airpair.com/angularjs/posts/creating-container-components-part-2-angular-1-directives
