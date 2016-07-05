function pageTitle($rootScope, $timeout) {
    return {
        link: function (scope, element) {
            var listener = function (event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = 'EASYAPP | Gestro de contenidos Web';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle)
                    title = 'EASYAPP | ' + toState.data.pageTitle;
                $timeout(function () {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    };
}
function sideNavigation($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            // Call the metsiMenu plugin and plug it to sidebar navigation
            $timeout(function () {
                element.metisMenu();

            });
        }
    };
}
function minimalizaSidebar($timeout) {
    return {
        restrict: 'A',
        template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
        controller: function ($scope, $element) {
            $scope.minimalize = function () {
                $("body").toggleClass("mini-navbar");
                if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
                    // Hide menu in order to smoothly turn on when maximize menu
                    $('#side-menu').hide();
                    // For smoothly turn on menu
                    setTimeout(
                            function () {
                                $('#side-menu').fadeIn(400);
                            }, 200);
                } else if ($('body').hasClass('fixed-sidebar')) {
                    $('#side-menu').hide();
                    setTimeout(
                            function () {
                                $('#side-menu').fadeIn(400);
                            }, 100);
                } else {
                    // Remove all inline style from jquery fadeIn function to reset menu state
                    $('#side-menu').removeAttr('style');
                }
            }
        }
    };
}
/**
 * landingScrollspy - Directive for scrollspy in landing page
 */
function landingScrollspy() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.scrollspy({
                target: '.navbar-fixed-top',
                offset: 80
            });
        }
    }
}
/**
 * fitHeight - Directive for set height fit to window height
 */
function fitHeight() {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.css("height", $(window).height() + "px");
            element.css("min-height", $(window).height() + "px");
        }
    };
}
function closeOffCanvas() {
    return {
        restrict: 'A',
        template: '<a class="close-canvas-menu" ng-click="closeOffCanvas()"><i class="fa fa-times"></i></a>',
        controller: function ($scope, $element) {
            $scope.closeOffCanvas = function () {
                $("body").toggleClass("mini-navbar");
            }
        }
    };
}

angular
        .module('easyapp')
        .directive('pageTitle', pageTitle)
        .directive('sideNavigation', sideNavigation)
        .directive('minimalizaSidebar', minimalizaSidebar)
        .directive('landingScrollspy', landingScrollspy)
        .directive('closeOffCanvas', closeOffCanvas)
        .directive('fitHeight', fitHeight);