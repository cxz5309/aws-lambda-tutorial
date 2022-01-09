exports.handler = async (event, context, callback) => {
    try{
        const operation  = event.httpMethod;
        console.log('mylog', event)
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
