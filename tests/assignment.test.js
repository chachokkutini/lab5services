import chai from "chai";
import chaiHttp from "chai-http";
import Mocha from "mocha";


const baseUrl = "http://localhost:8010"


chai.use(chaiHttp)
describe("Assignment test",function(){
    it('Assignment', function(done) {
        chai.request(baseUrl)
        .post('/assignment')
        .end(function (err, res) {
            chai.expect(res).to.have.status(300);
            done();
        });
    });
})

