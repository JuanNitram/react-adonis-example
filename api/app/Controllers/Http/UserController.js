'use strict'

const UserRepository = use('App/Repositories/UserRepository');

class UserController {

    register({ request })
    {
        UserRepository.store(request.all());
    }

    login({ request })
    {
        console.log('login');
    }
}

module.exports = UserController
