'use strict';

// Declare app level module which depends on views, and components
angular.module('App', ['ui.router'])

.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
  /*
      IMPORTANTE:
      Aquí es donde se definen las rutas
      */

  $stateProvider

.state('bar', {
    url: '/bar',
    templateUrl: 'views/bar.html',
    controller: 'BarCtrl'
  })

.state('bar.landing', {
    url: '/landing',
    templateUrl: 'views/landing.html',
    controller: 'LandingCtrl'
  })

.state('bar.atencion', {
    url: '/atencion',
    templateUrl: 'views/atencion.html',
    controller: 'AtencionCtrl'
  })

.state('bar.contacto', {
    url: '/contacto',
    templateUrl: 'views/contacto.html',
    controller: 'ContactoCtrl'
  })

.state('bar.opciones', {
    url: '/opciones',
    templateUrl: 'views/opciones.html',
    controller: 'OpcionesCtrl'
  })

.state('bar.pago', {
    url: '/pago',
    templateUrl: 'views/pago.html',
    controller: 'PagoCtrl'
  })

.state('bar.consulta', {
    url: '/consulta',
    templateUrl: 'views/consulta.html',
    controller: 'ConsultaCtrl'
  })

.state('bar.actualizacion', {
    url: '/actualizacion',
    templateUrl: 'views/actualizacion.html',
    controller: 'ActualizacionCtrl'
  })

.state('bar.reclamos', {
    url: '/reclamos',
    templateUrl: 'views/reclamos.html',
    controller: 'ReclamosCtrl'
  })

  $urlRouterProvider.otherwise('/bar/landing');
});