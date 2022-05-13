const PartnerController = require("./controllers/PartnerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Code Challange welcome!"});
});

app.listen(port, () => {
    console.log(`Code Challange in localhost:${port}`);
});

app.get("/v1/visualpartners", (request, response) => {
    const visualpartners = PartnerController.getPartners();
    response.json(visualpartners);
});

app.get("/v1/visualpartners/certificate/email", (request, response) => {
    const emailpartnersWithcertificate = PartnerController.getPartners_emailsByCertificate()
    response.json(emailpartnersWithcertificate);
});

app.get("/v1/visualpartners/amount/:credits", (request, response) => {
    const credits = request.params.credits;
    const partnersOvercredits = PartnerController.getPartnersOvercredits(credits)
    response.json({Credits: request.params.credits, PartnersOver_Credits: partnersOvercredits});
});

app.get("/v1/visualpartners/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const partnersnamesInMission = PartnerController.getPartnersUsernamesByMission(mission)
    response.json({mission: request.params.mission, names: partnersnamesInMission});
});

app.get("/v1/fizzbuzz/:number", (request, response) => {
    const number = request.params.number;
    const tricks = PartnerController.FizzbuzzserviceNumber(number);
    response.json({score: request.params.mission, trick: tricks});
});

app.get("/v1/visualpartners/stack/:stack", (request, response) => {
    const stack = request.params.stack;
    const partners_with_that_stack = PartnerController.partnersbystack(stack);
    response.json({stack: request.params.stack, visualpartners: partners_with_that_stack});
});

module.exports = app