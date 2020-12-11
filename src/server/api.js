// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');
const { Client } = require('pg');
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3002;
const DIST_DIR = './dist';

app.use(express.static(DIST_DIR));

app.use(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true });
});

app.get('/api/accounts', (req, res) => {
    console.log(req);
    console.log(res);
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    client.connect();

    client.query(
        'SELECT * from salesforceherokuconnect.account LIMIT 10;',
        (err, data) => {
            if (err) console.log(err);

            let accounts = data.rows.map((account) => {
                return {
                    Id: account.sfid,
                    Name: account.name,
                    Industry: account.industry,
                    Phone: ''
                };
            });
            //console.log(JSON.stringify(data));
            res.json(accounts);
            client.end();
        }
    );
});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
);
