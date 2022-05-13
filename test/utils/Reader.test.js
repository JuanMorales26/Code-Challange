const Reader = require('../../lib/utils/Reader')
 
describe("Unit test module for Reader",() =>{
    test("1)Unit test for Static readJsonFile", () =>{
        const path = "./visualpartners/visualpartners.json";
        const test1 = Reader.readJSONFile(path);
        expect(test1[0].id).toBe("6264d5d89f1df827eb84bb23");
        expect(test1[0].name).toBe("Warren");
        expect(test1[0].email).toBe("Todd@visualpartnership.xyz");
        expect(test1[0].credits).toBe(508);
        expect(test1[0].enrollments[0]).toBe("Visual Thinking Intermedio");
        expect(test1[0].enrollments[1]).toBe("Visual Thinking Avanzado");
        expect(test1[0].previousCourses).toBe(1); 
        expect(test1[0].haveCertification).toBe(true); 
    });
})  