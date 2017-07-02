var app=angular.module('mystuffApp',['ui.router','toaster','mgcrea.ngStrap','app.constants','app.controllers',
                                        'app.factory','app.service','app.directives']);

app.config(function($datepickerProvider) {
  angular.extend($datepickerProvider.defaults, {placement:'bottom',dateFormat: 'dd-MM-yyyy',autoclose: true });
});

app.config(function($httpProvider){
  $httpProvider.interceptors.push('AuthInterceptor');
});

app.run(function($rootScope,AuthService,$state){
      $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
         if(toState.authenticate && toState.name !== 'login' && !AuthService.isLoggedIn()){
           event.preventDefault();
           $state.transitionTo('login');
         }
      });
});

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'templates/index.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller:'LoginController'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'templates/signup.html',
            controller:'SignupController'
        })
        .state('list', {
            url: '/list',
            templateUrl: 'templates/list.html',
            controller:'ListController',
            authenticate: true
        })
        .state('edit', {
            url: '/edit/:id',
            templateUrl: 'templates/edit-bookmark.html',
            controller:'EditController',
            authenticate: true
        })
        .state('createContact', {
            url: '/create',
            templateUrl: 'templates/contact/create_contact_form.html',
            controller:'ContactController',
            authenticate: true
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact/list_contact.client.view.html',
            controller:'ContactController',
            authenticate: true
        })
        .state('editcontact', {
            url: '/editcontact/:id',
            templateUrl: 'templates/contact/edit_contact.client.view.html',
            controller:'ContactController',
            authenticate: true
        })
        .state('listNote', {
            url: '/listNote',
            templateUrl: 'templates/note/list_note.client.view.html',
            controller:'ContactController',
            authenticate: true
        })
        .state('note', {
            url: '/note',
            templateUrl: 'templates/note/create_note_form.html',
            controller:'ContactController',
            authenticate: true
        })
        .state('viewnote', {
            url: '/viewnote/:id',
            templateUrl: 'templates/note/view-note.client.html',
            controller:'ContactController',
            authenticate: true
        });
});
