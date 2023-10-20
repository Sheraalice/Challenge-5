const express = require('express');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yaml');
const app = express();
const port = 3000

const file = fs.readFileSync('./swagger.yaml', 'utf8');
const swaggerDocument = yaml.parse(file);

app.use(express.json())
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', require('./routes'))
app.use((err, req, res, next) => {
    return res.status(400).json({
        status: false,
        message: err.message,
        data:null
    });
});

app.use((req, res) => {
    return res.status(400).json({
        status: false,
        message: 'Page not found',
        data: null
    });
});

module.exports = app