class VisualpartnersService{
    static filterByCertificate(visualpartners){
        const partnersWithCertificate= visualpartners.filter((partner) => partner.haveCertification == true);
        return partnersWithCertificate;
    }

    static getPartnersEmailsByCertificate(visualpartners){
        const partnersEmail = visualpartners.map((partner) => partner.email);
        return partnersEmail;
    }

    static getPartnersOvercredits(visualpartners, credits){
        const partnersOvercredits= visualpartners.filter((partner) => partner.credits > credits);
        return partnersOvercredits;
    }    
}

module.exports = VisualpartnersService