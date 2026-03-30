# 🚀 Guia de Deployment Permanente - Pegasus Ultra-Flow

## Status Atual

✅ **Servidor rodando localmente em:** `http://localhost:3000`  
✅ **Acesso público em:** `https://3000-ivxqmv0ahu9xmjuwcsw7s-e26aa2f4.us2.manus.computer`

---

## 🎯 Opções de Deployment Permanente

### Opção 1: Vercel (Recomendado - Mais Fácil)

**Vantagens:**
- ✅ Gratuito para projetos pessoais
- ✅ Deploy automático via Git
- ✅ HTTPS incluído
- ✅ Domínio personalizado gratuito
- ✅ Suporte a Node.js nativo

**Passos:**

1. **Crie uma conta em Vercel:**
   - Acesse: https://vercel.com/signup
   - Clique em "Sign up with GitHub" (recomendado)

2. **Prepare seu repositório GitHub:**
   ```bash
   cd /home/ubuntu/pegasus-web-app
   git init
   git add .
   git commit -m "Initial commit: Pegasus Ultra-Flow"
   git remote add origin https://github.com/seu-usuario/pegasus-ultra-flow.git
   git push -u origin main
   ```

3. **Deploy na Vercel:**
   - Acesse https://vercel.com/new
   - Clique em "Import Git Repository"
   - Selecione seu repositório
   - Clique em "Deploy"

4. **Seu site estará em:**
   - `https://pegasus-ultra-flow.vercel.app` (automático)
   - Ou seu domínio personalizado

---

### Opção 2: Railway (Recomendado - Mais Controle)

**Vantagens:**
- ✅ Gratuito com limite generoso
- ✅ Banco de dados incluído
- ✅ Variáveis de ambiente fáceis
- ✅ Logs em tempo real
- ✅ Suporte a Node.js

**Passos:**

1. **Crie uma conta em Railway:**
   - Acesse: https://railway.app
   - Clique em "Start Project"

2. **Deploy via GitHub:**
   - Clique em "Deploy from GitHub"
   - Conecte sua conta GitHub
   - Selecione o repositório
   - Railway fará deploy automático

3. **Configure variáveis de ambiente:**
   - Vá para "Variables"
   - Adicione: `GEMINI_API_KEY=sua-chave-aqui`
   - Adicione: `PORT=3000`

4. **Seu site estará em:**
   - `https://seu-projeto-railway.up.railway.app`

---

### Opção 3: Netlify (Alternativa)

**Vantagens:**
- ✅ Gratuito
- ✅ Deploy automático
- ✅ Suporte a funções serverless
- ✅ HTTPS incluído

**Passos:**

1. Acesse: https://netlify.com
2. Clique em "New site from Git"
3. Conecte seu GitHub
4. Configure:
   - Build command: `npm install`
   - Publish directory: `.`
5. Deploy!

---

### Opção 4: Heroku (Pago, mas confiável)

**Vantagens:**
- ✅ Muito confiável
- ✅ Suporte excelente
- ✅ Fácil de usar
- ⚠️ Pago (a partir de $7/mês)

**Passos:**

1. Instale Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
2. Faça login: `heroku login`
3. Crie app: `heroku create pegasus-ultra-flow`
4. Deploy: `git push heroku main`
5. Seu site estará em: `https://pegasus-ultra-flow.herokuapp.com`

---

### Opção 5: Seu Próprio Servidor (VPS)

**Vantagens:**
- ✅ Controle total
- ✅ Sem limitações
- ⚠️ Você gerencia tudo

**Recomendações de VPS:**
- DigitalOcean ($5/mês)
- Linode ($5/mês)
- AWS (free tier)
- Google Cloud (free tier)
- Azure (free tier)

**Instalação em VPS:**

```bash
# 1. SSH para seu servidor
ssh root@seu-servidor.com

# 2. Atualize o sistema
apt update && apt upgrade -y

# 3. Instale Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# 4. Clone o repositório
git clone https://github.com/seu-usuario/pegasus-ultra-flow.git
cd pegasus-ultra-flow

# 5. Instale dependências
npm install

# 6. Instale PM2 (gerenciador de processos)
npm install -g pm2

# 7. Inicie a aplicação
pm2 start server.js --name "pegasus"
pm2 startup
pm2 save

# 8. Configure Nginx como proxy reverso
apt install -y nginx

# 9. Crie arquivo de configuração Nginx
cat > /etc/nginx/sites-available/pegasus << EOF
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# 10. Ative a configuração
ln -s /etc/nginx/sites-available/pegasus /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

# 11. Configure SSL com Certbot (HTTPS gratuito)
apt install -y certbot python3-certbot-nginx
certbot --nginx -d seu-dominio.com
```

---

## 📋 Checklist de Deployment

Antes de fazer deploy permanente, verifique:

- [ ] Arquivo `.env` configurado com sua chave Gemini
- [ ] Repositório Git criado e sincronizado
- [ ] Arquivo `package.json` presente
- [ ] Arquivo `server.js` presente
- [ ] Arquivo `index.html` presente
- [ ] `npm install` executado localmente
- [ ] `npm start` funciona localmente
- [ ] Servidor responde em `http://localhost:3000`

---

## 🔐 Variáveis de Ambiente

Antes de fazer deploy, configure:

```env
PORT=3000
GEMINI_API_KEY=sua-chave-aqui
NODE_ENV=production
```

**Onde configurar:**
- **Vercel:** Settings → Environment Variables
- **Railway:** Variables
- **Netlify:** Site settings → Build & deploy → Environment
- **Heroku:** Settings → Config Vars
- **VPS:** Arquivo `.env`

---

## ✅ Teste Seu Deployment

Após fazer deploy, teste:

1. **Acesse o site:**
   - Abra a URL do seu site no navegador

2. **Teste a interface:**
   - Preencha um formulário
   - Clique em "Salvar Laudo"
   - Verifique se salvou

3. **Teste Gemini:**
   - Digite algo no campo de prompt
   - Clique em "✨ Gerar com IA"
   - Verifique se gera laudo

4. **Teste Snippets:**
   - Clique em um snippet
   - Verifique se insere no campo

---

## 🆘 Troubleshooting

### Erro: "Cannot find module"
```bash
npm install
npm start
```

### Erro: "Port already in use"
```bash
# Mude a porta no .env
PORT=3001
```

### Gemini não responde
- Verifique a chave API
- Verifique conexão com internet
- Verifique se tem créditos no Google Cloud

### Site não carrega
- Verifique se servidor está rodando
- Verifique logs: `pm2 logs pegasus`
- Verifique firewall

---

## 📞 Suporte

Para problemas:
1. Verifique os logs
2. Consulte a documentação da plataforma
3. Abra uma issue no GitHub

---

## 🎉 Pronto!

Seu Pegasus Ultra-Flow está pronto para o mundo! 🚀✨

**Próximos passos:**
1. Escolha uma opção de deployment
2. Siga os passos
3. Compartilhe seu site com seus colegas
4. Comece a criar laudos inteligentes!

---

**Última atualização:** 30/03/2026  
**Versão:** 1.0.0
