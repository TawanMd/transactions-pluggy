// Importa as dependências
const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Usaremos axios para as requisições HTTP
require('dotenv').config();

// Cria a aplicação Express
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
const corsOptions = {
  // Permite CORS aberto em desenvolvimento ou restringe à URL do frontend em produção
  origin: process.env.FRONTEND_URL || '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json()); // Permite que o servidor entenda JSON

// Constantes da API Pluggy
const PLUGGY_API_URL = 'https://api.pluggy.ai';
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const LOGIN_USER = process.env.LOGIN_USER;
const LOGIN_PASSWORD = process.env.LOGIN_PASSWORD;
const FRONTEND_URL = process.env.FRONTEND_URL;

// Função para obter o apiKey
async function getApiKey() {
  try {
    const response = await axios.post(`${PLUGGY_API_URL}/auth`, {
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
    });
    return response.data.apiKey;
  } catch (error) {
    console.error('Erro ao obter apiKey:', error.response ? error.response.data : error.message);
    throw new Error('Falha na autenticação com a Pluggy');
  }
}

// Rota para buscar transações
app.post('/api/transactions', async (req, res) => {
  try {
    const { accountId, fromDate, toDate } = req.body;

    if (!accountId || !fromDate || !toDate) {
      return res.status(400).json({ error: 'accountId, fromDate e toDate são obrigatórios.' });
    }

    const apiKey = await getApiKey();
    
    let allTransactions = [];
    let page = 1;
    let totalPages = 1;

    do {
      const response = await axios.get(`${PLUGGY_API_URL}/transactions`, {
        headers: { 'X-API-KEY': apiKey },
        params: { accountId, from: fromDate, to: toDate, page },
      });
      
      allTransactions = allTransactions.concat(response.data.results);
      totalPages = response.data.totalPages;
      page++;
    } while (page <= totalPages);

    res.json(allTransactions);

  } catch (error) {
    console.error('Erro ao buscar transações:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Erro interno ao buscar transações.' });
  }
});


// Rota de login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === LOGIN_USER && password === LOGIN_PASSWORD) {
    res.status(200).json({ message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

// Rota de teste
app.get('/', (req, res) => {
  res.send('Backend da API da Pluggy está no ar!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});