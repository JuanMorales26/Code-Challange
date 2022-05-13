const PartnerController = require('../../lib/controllers/PartnerController')

describe("Unit test module for PartnerController",() =>{
    test("1)Unit test for Static getPartners", () =>{
        const res = PartnerController.getPartners();
          expect(res[0].id).toBe('6264d5d89f1df827eb84bb23');
          expect(res[0].name).toBe('Warren');
          expect(res[0].email).toBe('Todd@visualpartnership.xyz');
          expect(res[0].credits).toBe(508);
          expect(res[0].enrollments[0]).toBe('Visual Thinking Intermedio');
          expect(res[0].enrollments[1]).toBe('Visual Thinking Avanzado');
          expect(res[0].previousCourses).toBe(1);
          expect(res[0].haveCertification).toBe(true);
    });
    test("2)Unit test for Static getPartners_emailsByCertificate ", () =>{
        const res = PartnerController.getPartners_emailsByCertificate();
          expect(res[0]).toBe('Todd@visualpartnership.xyz');
          expect(res[1]).toBe('Sexton@visualpartnership.xyz');
          expect(res[2]).toBe('Sharlene@visualpartnership.xyz');
          expect(res[3]).toBe('Howell@visualpartnership.xyz');
          expect(res[4]).toBe('Haynes@visualpartnership.xyz');
    });
    test("3)Unit test for Static getPartnersOvercredits", () =>{
        const res = PartnerController.getPartnersOvercredits("500");
        for(var i=0;i<res.lenght;i++){
            expect(res[i].credits).toBeGreaterThan(500);
          }
    });
})  