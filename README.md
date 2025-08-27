# Aplicação de Consulta de Transações

Esta é uma aplicação web full-stack que serve como uma interface segura para consultar transações financeiras através da API da [Pluggy](https://pluggy.ai/). O projeto demonstra uma arquitetura moderna com frontend desacoplado e um backend Node.js, focada em segurança e boas práticas de desenvolvimento.

 <!-- Você pode substituir por uma captura de tela da sua aplicação -->

## ✨ Funcionalidades

-   **Arquitetura Segura:** O frontend (interface do usuário) é totalmente separado do backend. As chaves da API e outras credenciais são gerenciadas de forma segura no servidor, nunca sendo expostas no navegador.
-   **Autenticação de Acesso:** Uma tela de login protege a aplicação, garantindo que apenas usuários autorizados possam acessar a funcionalidade de consulta.
-   **Consulta Dinâmica:** Permite a busca de transações por `Account ID` dentro de um período de datas específico.
-   **Interface Responsiva:** Interface de usuário limpa e funcional, construída com HTML, CSS e JavaScript puros.

## 🛠️ Tecnologias Utilizadas

-   **Frontend:**
    -   HTML5
    -   CSS3
    -   JavaScript (Vanilla)
    -   Fetch API para comunicação com o backend.

-   **Backend:**
    -   **Node.js:** Ambiente de execução JavaScript.
    -   **Express.js:** Framework para a construção da API REST.
    -   **Axios:** Cliente HTTP para comunicação com a API da Pluggy.
    -   **dotenv:** Para gerenciamento de variáveis de ambiente em desenvolvimento.
    -   **CORS:** Para garantir a comunicação segura entre o frontend e o backend.

## ☁️ Deploy

Este projeto está pronto para ser implantado em plataformas modernas de hospedagem.

-   **Backend:** O servidor Node.js pode ser implantado em serviços como [Render](https://render.com), [Heroku](https://www.heroku.com/) ou qualquer outra plataforma que suporte aplicações Node.js. Lembre-se de configurar as variáveis de ambiente na plataforma de hospedagem.
-   **Frontend:** Sendo um site estático, o frontend pode ser implantado gratuitamente em serviços como [Vercel](https://vercel.com), [Netlify](https://www.netlify.com/) ou [GitHub Pages](https://pages.github.com/).

Após o deploy, lembre-se de configurar a URL de produção do backend no código do frontend e a URL do frontend nas configurações de CORS do backend para garantir a comunicação segura.

---

Feito com  por [TawanMd](https://github.com/TawanMd)