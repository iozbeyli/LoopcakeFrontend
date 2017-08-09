import request from 'superagent';

export function post(api,postData,respFunc, token){
    console.log("postData",postData);
    request
        .post(api)
        .send(postData)
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end(function(err, res){
            respFunc(err,res);
        });
};


export function get(api,getData,respFunc,token){
    request
        .get(api)
        .set('Authorization', `Bearer ${token}`)
        .query(getData)
        .end(function(err, res){
            respFunc(err,res);
    });
};
