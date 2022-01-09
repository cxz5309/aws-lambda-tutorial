const crypto = require('crypto');

exports.handler = async (event, context, callback) => {
    try{
        const operation = event.httpMethod;

        const input = JSON.parse(event.body)['ARN-INPUT'];
        const {service, region, account, resource} = input;

        console.log('service', service);
        console.log('region', region);
        console.log('account', account);
        console.log('resource', resource);

        switch (operation) {
            case 'GET':
                callback(null, {
                    'statusCode':200,
                    'headers':{},
                    'body':JSON.stringify({'message':'get api'})
                });
                 break;
            case 'POST':
                callback(null, {
                    'statusCode':200,
                    'headers':{},
                    'body':JSON.stringify({'message':'post api'})
                });
                break;
        }
    }catch(err){
         callback(null, {
                'statusCode':500,
                'headers':{},
                'body':JSON.stringify({'message':err.message})
            });
    }
};
