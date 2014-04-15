var graybear = angular.module('test', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/graybear/home");

    $stateProvider
   .state('graybear', {
       url: "/graybear",
       views: {
           "mainView": { templateUrl: "app/features/graybear/home.tpl.html" }, 
       },
       abstract: true,
   })
    .state('graybear.home', {
        url: "/home",
        views: {
            "SideDetails": { templateUrl: "app/features/graybear/collaberations/collaberations.tpl.html", },

        }
    })
   .state('graybear.contact', {
       url: "/contact",
       views: {
           "SideDetails": { templateUrl: "app/features/graybear/contact/contact.tpl.html", }
       },
       abstract: true,
   })
    .state('graybear.contact.form', {
        url: "/email",
        views: {
            "form": { templateUrl: "app/features/graybear/contact/form/form.tpl.html", }
        },
    })
    .state('graybear.contact.details', {
        url: "/details",
        views: {
            "ContactDetails": { templateUrl: "app/features/graybear/contact/details/details.tpl.html", }
        },
    })
   .state('graybear.about', {
       url: "/about",
       views: {
           "SideDetails": { templateUrl: "app/features/graybear/about/about.tpl.html" }
       }
   })

});