const client = require('superagent');
const queryString = require('query-string');
const BASEURL = 'http://api.assrt.net/';
const TOKEN = 'YOUR_TOKEN_HERE';


module.exports = class AssrtApi {

    subSearchService(q = '', cnt = 1, pos = 0, token = TOKEN) {
        let queryObject = {q, cnt, pos, token};
        let query = queryString.stringify(queryObject);
        return client.get(BASEURL + '/v1/sub/search?' + query);
    };

    subDetailService(id = 0, token = TOKEN) {
        let queryObject = {id, token};
        let query = queryString.stringify(queryObject);
        return client.get(BASEURL + '/v1/sub/detail?' + query);
    };


    subSimilarService(id = 0, token = TOKEN) {
        let queryObject = {id, token};
        let query = queryString.stringify(queryObject);
        return client.get(BASEURL + '/v1/sub/detail?' + query);
    };

    userQuotaService(token = TOKEN) {
        let queryObject = {token};
        let query = queryString.stringify(queryObject);
        return client.get(BASEURL + '/v1/user/quota?' + query);
    }
};




