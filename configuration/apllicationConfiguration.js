const dotenv = require('dotenv');

if(process.env.NODE_ENV === 'development'){
    MyEnviorment = dotenv.config({path:`${__dirname}/../applicationConfiguration-dev.env`});
}