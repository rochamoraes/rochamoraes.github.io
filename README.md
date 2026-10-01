# rochamoraes.digital

Site pessoal de **César Augusto da Rocha Moraes**, Senior QA Engineer atuando com Automação, APIs, SQL e Engenharia de Software Backend.

🔗 **https://rochamoraes.digital**

[![Deploy to GitHub Pages](https://github.com/rochamoraes/rochamoraes.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/rochamoraes/rochamoraes.github.io/actions/workflows/deploy.yml)

## Tecnologias

- [React](https://react.dev) 18
- [Vite](https://vitejs.dev) 5
- GitHub Pages + GitHub Actions

## Rodando localmente

Requer [Node.js](https://nodejs.org) 20 ou superior.

```bash
npm install
npm run dev
```

O site abre em http://localhost:5173.

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Serve localmente o conteúdo de `dist/` |
| `npm run lint` | Verifica o código com ESLint |

## Deploy

Cada push na branch `main` dispara o workflow [`deploy.yml`](.github/workflows/deploy.yml), que gera o build e publica no GitHub Pages. O domínio personalizado é definido em [`public/CNAME`](public/CNAME).

## Licença

[MIT](LICENSE)
