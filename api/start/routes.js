'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.group(() => {
    
        Route.post('/register', 'UserController.register');
        Route.post('/login', 'UserController.login');

    }).prefix('auth');
    
    Route.resource('/products', 'ProductsController');
}).prefix('api/v1');

Route.on('/').render('welcome')
