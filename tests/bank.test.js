import chai from "chai";
import chaiHttp from "chai-http";
import Mocha from "mocha";


const baseUrl = "http://localhost:8010"


chai.use(chaiHttp)
describe("Bank test",function(){
    it('Get all banks', function(done) {
        chai.request(baseUrl)
        .get('/banks')
        .end(function (err, res) {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.be.an("array");
            const bank = res.body.find(obj=>obj.bankName=="Priorbank")
            chai.expect(bank).to.be.an("object")
            chai.expect(bank).to.have.property("_id")
            done();
        });
    });
})

