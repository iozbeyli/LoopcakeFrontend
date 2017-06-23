import request from 'superagent';

export function post(api,postData,respFunc){
    request
        .post(api)
        .send(postData)
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .end(function(err, res){
            respFunc(err,res);
        });
};


export function get(api,getData,respFunc){
    request
        .get(api)
        .query(getData)
        .end(function(err, res){
            respFunc(err,res);
    });
};
