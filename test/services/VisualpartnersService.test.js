const VisualpartnersService = require('../../lib/services/VisualpartnersService');
const Reader = require('../../lib/utils/Reader');

describe("Unit test module for Visual Partners Service ",() =>{
    test("1)Unit test for Static filterByCertificate", () =>{
        const path = "./visualpartners/visualpartners.json";
        const visualpartners = Reader.readJSONFile(path);
        const test = VisualpartnersService.filterByCertificate(visualpartners);
        for(var i=0; i< test.lenght;i++){
            expect(test[i].haveCertification).toBe(true);
        }
    });

    test("2)Unit test for Static getPartnersEmailsByCertificate ", () =>{
        const path = "./visualpartners/visualpartners.json";
        const visualpartners = Reader.readJSONFile(path);
        const test = VisualpartnersService.filterByCertificate(visualpartners);
            expect(test[0].email).toBe("Todd@visualpartnership.xyz");
            expect(test[1].email).toBe("Sexton@visualpartnership.xyz");
            expect(test[2].email).toBe("Sharlene@visualpartnership.xyz");
            expect(test[3].email).toBe("Howell@visualpartnership.xyz");
    });

    test("3)Unit test for Static getPartnersOvercredits", () =>{
        const path = "./visualpartners/visualpartners.json";
        const visualpartners = Reader.readJSONFile(path);
        const test = VisualpartnersService.filterByCertificate(visualpartners, 500);
        for(var i = 0; i < test.lenght; i++){
            expect(test[i].credits).toBeGreaterThan(500);
        }
    });
})  