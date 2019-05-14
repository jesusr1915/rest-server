const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const APP = express();
const PORT = process.env.PORT || 4400

//CORS
APP.use(cors());
APP.options('*', cors());

// parse application/json
APP.use(bodyParser.json())

//Simple get 
APP.get('/', (request, response) => {

    res = {
        platform: 'NodeJS',
        message: 'Hola mundo',
        status: 'ok'
    }

    response.send(res)
})

APP.listen(PORT, () => console.log(`Server run on port ${PORT}`))