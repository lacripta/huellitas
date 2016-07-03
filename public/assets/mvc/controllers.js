function MainCtrl() {
    /**
     * daterange - Used as initial model for data range picker in Advanced form view
     */
    this.daterange = {startDate: null, endDate: null};
    /**
     * slideInterval - Interval for bootstrap Carousel, in milliseconds:
     */
    this.slideInterval = 5000;
}

function modalDemoCtrl($scope, $uibModal) {
    $scope.open = function () {

        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal_example.html',
            controller: ModalInstanceCtrl
        });
    };

    $scope.open1 = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal_example1.html',
            controller: ModalInstanceCtrl
        });
    };

    $scope.open2 = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal_example2.html',
            controller: ModalInstanceCtrl,
            windowClass: "animated fadeIn"
        });
    };

    $scope.open3 = function (size) {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal_example3.html',
            size: size,
            controller: ModalInstanceCtrl
        });
    };

    $scope.open4 = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal_example2.html',
            controller: ModalInstanceCtrl,
            windowClass: "animated flipInY"
        });
    };
}
function formValidation($scope) {

    $scope.signupForm = function () {
        if ($scope.signup_form.$valid) {
            // Submit as normal
        } else {
            $scope.signup_form.submitted = true;
        }
    }

    $scope.signupForm2 = function () {
        if ($scope.signup_form.$valid) {
            // Submit as normal
        }
    }

}
function sweetAlertCtrl($scope, SweetAlert) {


    $scope.demo1 = function () {
        SweetAlert.swal({
            title: "Welcome in Alerts",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        });
    }

    $scope.demo2 = function () {
        SweetAlert.swal({
            title: "Good job!",
            text: "You clicked the button!",
            type: "success"
        });
    }

    $scope.demo3 = function () {
        SweetAlert.swal({
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
                function () {
                    SweetAlert.swal("Ok!");
                });
    }

    $scope.demo4 = function () {
        SweetAlert.swal({
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false},
                function (isConfirm) {
                    if (isConfirm) {
                        SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
                    } else {
                        SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
                    }
                });
    }

}
function selectCtrl($scope) {

    $scope.person = {};
    $scope.people = [
        {name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States'},
        {name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina'},
        {name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina'},
        {name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador'},
        {name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador'},
        {name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States'},
        {name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia'},
        {name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador'},
        {name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia'},
        {name: 'Nicolás', email: 'nicolas@email.com', age: 43, country: 'Colombia'}
    ];

    $scope.option = {};
    $scope.options = [
        {number: '1', text: 'Option 1'},
        {number: '2', text: 'Option 2'},
        {number: '3', text: 'Option 3'},
        {number: '4', text: 'Option 4'},
        {number: '5', text: 'Option 5'},
        {number: '6', text: 'Option 6'}
    ];

    $scope.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

    $scope.multipleDemo = {};
    $scope.multipleDemo.colors = ['Blue', 'Red'];

}
function datatablesCtrl($scope, DTOptionsBuilder) {

    $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                {extend: 'copy'},
                {extend: 'csv'},
                {extend: 'excel', title: 'ExampleFile'},
                {extend: 'pdf', title: 'ExampleFile'},
                {extend: 'print',
                    customize: function (win) {
                        $(win.document.body).addClass('white-bg');
                        $(win.document.body).css('font-size', '10px');

                        $(win.document.body).find('table')
                                .addClass('compact')
                                .css('font-size', 'inherit');
                    }
                }
            ]);

    /**
     * persons - Data used in Tables view for Data Tables plugin
     */
    $scope.persons = [
        {
            id: '1',
            firstName: 'Monica',
            lastName: 'Smith'
        },
        {
            id: '2',
            firstName: 'Sandra',
            lastName: 'Jackson'
        },
        {
            id: '3',
            firstName: 'John',
            lastName: 'Underwood'
        },
        {
            id: '4',
            firstName: 'Chris',
            lastName: 'Johnatan'
        },
        {
            id: '5',
            firstName: 'Kim',
            lastName: 'Rosowski'
        }
    ];

}
function translateCtrl($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
        $scope.language = langKey;
    };
}
angular
        .module('easyapp')
        .controller('MainCtrl', MainCtrl)
        .controller('translateCtrl', translateCtrl)
        .controller('modalDemoCtrl', modalDemoCtrl)
        .controller('formValidation', formValidation)
        .controller('sweetAlertCtrl', sweetAlertCtrl)
        .controller('selectCtrl', selectCtrl)
        .controller('datatablesCtrl', datatablesCtrl);