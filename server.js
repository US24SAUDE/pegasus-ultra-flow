const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Servir o arquivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API para salvar laudos (opcional - para integração com banco de dados)
app.post('/api/laudos', (req, res) => {
    const laudo = req.body;
    // Aqui você pode salvar no banco de dados
    console.log('Laudo recebido:', laudo);
    res.json({ success: true, message: 'Laudo salvo com sucesso' });
});

// API para recuperar laudos
app.get('/api/laudos', (req, res) => {
    // Aqui você pode recuperar do banco de dados
    res.json({ laudos: [] });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════╗
    ║   🚀 Pegasus Ultra-Flow                ║
    ║   Servidor rodando em:                 ║
    ║   http://localhost:${PORT}                 ║
    ║                                        ║
    ║   Abra no navegador para começar       ║
    ╚════════════════════════════════════════╝
    `);
});
