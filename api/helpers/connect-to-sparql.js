module.exports = {


    friendlyName: 'sparql Client',
  
  
    description: 'Connect to a parql client',
  
  
    extendedDescription:
  `Try connecting to dbpedia endpoint : http://dbpedia.org/sparql`,
  
  
    inputs: {
  
      endpoint: {
        description: 'Sparql endpoint to connect to. Maybe a DNS or an IP.',
        extendedDescription:
    `Try connecting to dbpedia endpoint : http://dbpedia.org/sparql`,
        example: 'http://dbpedia.org/sparql',
        type: 'string',
        required: true
      },
  
      port: {
        description: 'Port to connect',
        extendedDescription: {},
        type: 'number',
        required: false
      },
    },
  
  
    exits: {
  
      success: {
        outputFriendlyName: 'Sparql connection report',
        outputDescription: 'A dictionary of information about what goes wrong.',
        outputType: {
          results: 'boolean'
        }
      }
  
    },
  
  
    fn: async function(inputs, exits) {
        const {Client} = require('virtuoso-sparql-client');
        const DbPediaClient = new Client('http://dbpedia.org/sparql');
        DbPediaClient.query('DESCRIBE <http://dbpedia.org/resource/Sardinia>')
            .then((results) => {
    // All done!
                return exits.success({
                    results: results
                    });
            })
            .catch((err) => {
                throw err;
            });

    }
}