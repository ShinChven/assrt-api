const AssrtApi = require('../src/AssrtService');

let api = new AssrtApi();

function printResult(request){
       request.then(result => console.log(result.text));
}

printResult(api.subSearchService('interstellar'));
printResult(api.subDetailService(602333));
printResult(api.subSimilarService(602333));
printResult(api.userQuotaService());


