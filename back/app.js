const express = require('express');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const routes = require('./src/routes');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Café Gourmet API</title>
    </head>
    <body>
      <h1>☕ Café Gourmet API</h1>
      <p><a href="/api">API</a></p>
      <p><a href="/api-docs">Documentação (Swagger)</a></p>
    </body>
    </html>
  `);
});

app.get('/api', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Café Gourmet API v1.1.0',
    endpoints: {
      cardapio: '/api/cardapio',
      pedidos: '/api/pedidos',
      admin: '/api/admin/login',
      dashboard: '/api/dashboard',
    },
    docs: '/api-docs',
  });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', routes);

app.use('/uploads', express.static(path.join(__dirname, 'src', 'uploads')));

module.exports = app;