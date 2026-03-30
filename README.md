# ✦ Pegasus Ultra-Flow v2.0

> Plataforma web de laudos ultrassonográficos com **ditado por voz**, **OCR de pedidos** e **Gemini AI** integrado nativamente.

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---------|-----------|
| 🎙 **Ditado por Voz** | Fale os achados em português — reconhecimento contínuo via Web Speech API |
| 📸 **OCR do Pedido** | Fotografe o pedido e o Gemini Vision extrai nome, idade e tipo de exame automaticamente |
| 🤖 **Gemini AI Nativo** | Gera o laudo técnico completo (Achados + Conclusão) a partir do ditado |
| ⚡ **111 Snippets** | Categorias: Abdome, Rins, Ginecologia, Tireoide, Vascular, Músculo-esquelético e mais |
| 🌗 **Modo Escuro/Claro** | Alternância instantânea com preferência salva |
| 📱 **Mobile-First** | Navegação inferior com 3 abas, botão de voz dimensionado para o polegar |
| 💾 **Histórico Local** | Laudos salvos no localStorage, acessíveis a qualquer momento |
| 🖨 **Impressão** | Laudo formatado com cabeçalho profissional pronto para imprimir |

---

## 🚀 Instalação e Uso

### Pré-requisito
- [Node.js 18+](https://nodejs.org/) instalado

### Executar localmente

```bash
# 1. Entre na pasta do projeto
cd pegasus-web-app

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
npm start

# 4. Acesse no navegador
# http://localhost:3000
```

### Executar sem Node.js (modo estático)

Abra o arquivo `index.html` diretamente no Chrome/Edge:
```bash
# Mac
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

> ⚠️ O reconhecimento de voz requer **Chrome** ou **Edge**. Outros navegadores não suportam a Web Speech API.

---

## 🔑 Configurar a Chave Gemini

1. Acesse [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Crie uma chave gratuita
3. Na plataforma, clique em **⚙** (canto superior direito)
4. Cole sua chave e salve

A chave é armazenada localmente no navegador — nunca é enviada para nenhum servidor externo além da API do Google.

---

## 🌐 Deploy Permanente

### Vercel (mais fácil — gratuito)

```bash
npm install -g vercel
cd pegasus-web-app
vercel
```

### Railway

1. Acesse [railway.app](https://railway.app)
2. Conecte o repositório GitHub
3. Deploy automático com `npm start`

### Servidor próprio com PM2

```bash
npm install -g pm2
npm install
pm2 start server.js --name "pegasus"
pm2 save && pm2 startup
```

---

## 📂 Estrutura do Projeto

```
pegasus-web-app/
├── index.html          ← Toda a aplicação (UI + lógica + snippets)
├── server.js           ← Servidor Express para servir o app
├── package.json        ← Dependências e scripts
├── .env                ← Variáveis de ambiente (PORT)
├── README.md           ← Esta documentação
└── DEPLOYMENT.md       ← Guia detalhado de deploy
```

---

## 🎨 Personalização

### Adicionar snippets

No `index.html`, localize `const SNIPPETS = {` e adicione entradas no formato:

```javascript
'Minha Categoria': [
  { t: 'Nome do Snippet', v: 'Texto técnico completo do snippet...' },
]
```

### Alterar tema de cores

No `index.html`, edite as variáveis CSS em `:root` e `[data-theme="dark"]` / `[data-theme="light"]`.

---

## 🔒 Segurança

- Laudos salvos **apenas no localStorage** do navegador
- Chave Gemini armazenada localmente, nunca exposta em servidor
- Recomendado usar **HTTPS** em produção
- Restrinja sua chave Gemini por domínio no [Google Cloud Console](https://console.cloud.google.com)

---

## 📱 Compatibilidade

| Navegador | Voz | OCR | Geral |
|-----------|-----|-----|-------|
| Chrome (Desktop/Android) | ✅ | ✅ | ✅ |
| Edge (Desktop) | ✅ | ✅ | ✅ |
| Safari (Mac/iOS) | ⚠️ Limitado | ✅ | ✅ |
| Firefox | ❌ | ✅ | ✅ |

---

## 📄 Licença

MIT — livre para uso, modificação e distribuição.

---

**Versão:** 2.0.0 · **Atualizado:** 30/03/2026 · **Status:** Produção
