# banco-api-tests

Automação de testes de API REST para o projeto **banco-api**, validando seus principais endpoints. Ideal para testes de integração e validação funcional utilizando ferramentas modernas em JavaScript.

---

## 🧪 Objetivo

Garantir a qualidade da API **banco-api** por meio de testes automatizados que simulam requisições reais e validam as respostas esperadas.

---

## 🛠 Stack Tecnológica

- **Node.js** – plataforma JavaScript
- **Mocha** – framework de testes
- **Chai** – biblioteca de assertivas
- **Supertest** – requisições HTTP nas rotas da API
- **dotenv** – carregamento de variáveis de ambiente via `.env`
- **mochawesome** – geração de relatório visual em HTML dos resultados dos testes

---

## 📁 Estrutura do Projeto

```
banco-api-tests/
├── test/                         # arquivos de teste (login, contas, transferências etc.)
│   ├── login.test.js
│   └── transferencias.test.js
├── mochawesome-report/          # relatório HTML gerado automaticamente
├── .env                         # variáveis de ambiente (não versionado)
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Configuração `.env`

Crie um arquivo `.env` na raiz com:

```env
BASE_URL=http://localhost:3000
```

Substitua `http://localhost:3000` pela URL onde sua API **banco-api** estiver rodando.

---

## ▶️ Como Executar os Testes

1. Instale dependências:
   ```bash
   npm install
   ```

2. Execute os testes:
   ```bash
   npm test
   ```

3. O Mochawesome gera o relatório automaticamente em `mochawesome-report/mochawesome.html`.

### 🔎 Atalho com relatório
No `package.json`, inclua:
```json
"scripts": {
  "test:report": "npm test && open mochawesome-report/mochawesome.html"
}
```
No Windows, troque `open` por `start`.

---

## 📚 Documentações Oficiais

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/visionmedia/supertest)
- [dotenv](https://github.com/motdotla/dotenv)
- [mochawesome](https://github.com/adamgruber/mochawesome)

---

## 🧩 Dicas de uso

- Organize os arquivos em `test/` conforme os recursos da API (usuário, conta, transações).
- Renomeie `mochawesome-report/` para outro nome se quiser personalizar.
- Adapte os assertions (Chai) aos formatos de resposta da sua API.

---

## 🙋‍♀️ Contribuição (opcional)

Se desejar permitir contribuições:
- Use um arquivo `CONTRIBUTING.md`
- Escolha uma licença (ex: MIT)
- Instruções de fork e pull request

---

> Feito por **Yuri0022** para testes da API **banco-api**.
