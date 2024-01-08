import chai from "chai";
import chaiHttp from "chai-http";
import Mocha from "mocha";


const baseUrl = "http://localhost:8011"


chai.use(chaiHttp)
describe("Client test",function(){
    it('Get all clients', function(done) {
        chai.request(baseUrl)
        .get('/clients')
        .end(function (err, res) {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.be.an("array");
            const client = res.body.find(obj=>obj.clientName=="Misha")
            chai.expect(client).to.be.an("object")
            chai.expect(client).to.have.property("_id")
            done();
        });
    });
})

