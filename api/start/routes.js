'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {

    Route.post('/auth/register', 'UserController.register');
    Route.post('/auth/login', 'UserController.login');

    Route.get('/places', 'PlaceController.index');

}).prefix('api/v1');
