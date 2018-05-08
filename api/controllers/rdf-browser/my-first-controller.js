/**
 * MyFirstControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    friendlyName: 'Test',


    description: 'Test area',
  
  
    inputs: {
    },


  exits: {

    success: {
      responseType : 'view',
      viewTemplatePath: 'my-first-view'
    }

  },


  fn: async function(inputs, exits) {
    var test = await sails.helpers.connectToSparql.with({endpoint : 'http://dbpedia.org/sparql', port : 8080});

    return exits.success();
  }
};

