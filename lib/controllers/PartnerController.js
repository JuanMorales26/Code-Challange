const VisualpartnersService = require('../services/VisualpartnersService')

const Reader = require('../utils/Reader')
 
class PartnerController{
    static getPartners(){
        const path = "./visualpartners/visualpartners.json";
        const visualpartners = Reader.readJSONFile(path);
        return visualpartners;
    }

    static getPartners_emailsByCertificate(){
        const path = "./visualpartners/visualpartners.json";
        const visualpartners = Reader.readJSONFile(path);
        const partnersWithCertificate = VisualpartnersService.filterByCertificate(visualpartners);
        const emailpartnersWithCertificate = VisualpartnersService.getPartnersEmailsByCertificate(partnersWithCertificate);
        return emailpartnersWithCertificate;
    }

    static getPartnersOvercredits(credits){
        const path = "./visualpartners/visualpartners.json";
        const visualpartners = Reader.readJSONFile(path);
        const partnersOvercredits = VisualpartnersService.getPartnersOvercredits(visualpartners, credits);
        return partnersOvercredits;
    }
}

module.exports = PartnerController