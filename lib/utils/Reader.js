const fs = require("fs");

class Reader{
    static readJSONFile(path){
        const rawdata = fs.readFileSync(path);
        const visualpartners = JSON.parse(rawdata);
        return visualpartners;
    }
}

module.exports = Reader