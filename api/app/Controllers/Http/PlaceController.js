'use strict';

const PlaceRepository = use('App/Repositories/PlaceRepository');

class PlaceController {

  async index({ request, response })
  {
      return response.json({
          'success': true,
          'places': await PlaceRepository.all()
      });
  }

}

module.exports = PlaceController;
