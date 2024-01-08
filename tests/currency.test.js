import chai from "chai";
import chaiHttp from "chai-http";
import Mocha from "mocha";


const baseUrl = "http://localhost:8012"


chai.use(chaiHttp)
describe("Currency test",function(){
    it('Get all currencies', function(done) {
        chai.request(baseUrl)
        .get('/currencies')
        .end(function (err, res) {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.be.an("array");
            const currency = res.body.find(obj=>obj.currencyName=="USD")
            chai.expect(currency).to.be.an("object")
            chai.expect(currency).to.have.property("_id")
            done();
        });
    });
})

