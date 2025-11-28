# 🚀 Minha Arquitetura Backend: Node.js, Express, PostgreSQL, Prisma & Docker

## Demo do projeto: https://todo-app-backend-n79m.onrender.com/

## 🎯 Objetivo e Metodologia do Projeto

Desenvolvi este projeto abrangente para demonstrar minha capacidade de criar infraestruturas backend de nível empresarial, partindo de conceitos fundamentais até a implementação de uma arquitetura robusta e conteinerizada.

O objetivo central foi me transformar em um desenvolvedor 'Absolute Pro', construindo um portfólio de projetos no GitHub com o calibre necessário para validação profissional. Meu único pré-requisito técnico inicial foi um conhecimento razoável de **JavaScript**.

A metodologia foi dividida em projetos de complexidade crescente:

1.  **Fundamentos e Servidor Básico:** Construção de um servidor rudimentar usando **Node.js** (como runtime) e **Express** (como framework web minimalista) para demonstrar a escuta de requisições de rede e a criação de *endpoints*.
2.  **Arquitetura e Segurança (SQLite, JWT, bcrypt):** Desenvolvimento de uma aplicação *To-Do* completa, focada em arquitetura limpa, utilizando **SQLite** (um banco de dados SQL leve), e implementando autenticação segura.
3.  **Evolução para Nível Empresarial (PostgreSQL, Prisma, Docker):** Migração e modernização da base de código para atender aos padrões de grandes organizações.

---

## 🛠️ Tecnologias e Habilidades Demonstradas

A arquitetura final do projeto (Capítulo 4) utiliza uma pilha tecnológica moderna e desacoplada, onde demonstro proficiência nas seguintes ferramentas:

### Camada de Aplicação (Servidor)

| Tecnologia | Habilidade Demonstrada | Fontes |
| :--- | :--- | :--- |
| **Node.js** | Utilização do runtime para executar JavaScript no lado do servidor e desenvolvimento de aplicações web assíncronas. | |
| **Express** | Configuração de um servidor eficiente, definição de rotas (*endpoints* GET, POST, PUT, DELETE) e integração de *middleware*. | |
| **Arquitetura Modular** | Organização do código em módulos (**routes**, **middleware**) e uso do **Express Router** para compartimentalizar a lógica do *endpoint*, garantindo um código limpo e de fácil manutenção. | |

### Banco de Dados e ORM

| Tecnologia | Habilidade Demonstrada | Fontes |
| :--- | :--- | :--- |
| **PostgreSQL** | Utilização de um banco de dados SQL robusto e conceituado, adequado para aplicações de produção. | |
| **Prisma (ORM)** | Implementação do **Object Relational Mapper** para atuar como intermediário entre a aplicação JavaScript e o PostgreSQL. Isso me permitiu manipular dados e o esquema do banco de dados usando sintaxe JavaScript, eliminando a necessidade de escrever *queries* SQL manualmente. | |
| **Migrations** | Utilização do Prisma para gerenciar o histórico de modificações do esquema do banco de dados, garantindo que todas as instâncias da base de dados estejam sempre atualizadas e consistentes (controle de versão do DB). | |
| **SQL** | Conhecimento fundamental de comandos SQL (Select, Insert, Update, Delete), especialmente no uso do **SQLite** e na compreensão da lógica de tabelas e chaves primárias/estrangeiras (*foreign keys*). | |

### Segurança e Autenticação

| Tecnologia | Habilidade Demonstrada | Fontes |
| :--- | :--- | :--- |
| **JWT** | Criação e assinatura de **JSON Web Tokens** para gerenciar sessões de usuário e autorizar requisições protegidas, definindo um tempo de expiração de 24 horas. | |
| **bcrypt.js** | Hashing irreversível de senhas (*one-way encryption*). Utilizei a função de comparação síncrona para validar senhas de login contra o hash armazenado, garantindo que nenhuma senha seja armazenada em texto simples. | |
| **Middleware de Autenticação** | Desenvolvi um *middleware* que intercepta todas as requisições protegidas, verifica o token JWT, e anexa o ID do usuário verificado ao objeto da requisição (`req.user ID`) antes de prosseguir para o *endpoint*. | |

### Infraestrutura e Contêineres

| Tecnologia | Habilidade Demonstrada | Fontes |
| :--- | :--- | :--- |
| **Docker** | Containerização da aplicação para criar ambientes virtuais isolados e consistentes. Isso permitiu rodar o servidor Node.js e o PostgreSQL como entidades separadas. | |
| **Docker Compose** | Definição de múltiplos serviços (App e Database) em um arquivo `docker-compose.yaml`. Isso me permitiu orquestrar a inicialização, a persistência de dados (volumes) e a comunicação entre os contêineres (mapeamento de portas e URLs internas). | |
| **Variáveis de Ambiente (.env)** | Utilização do sistema de variáveis de ambiente para armazenar chaves secretas (`JWT_SECRET`) e URLs de banco de dados, protegendo informações sensíveis e facilitando a configuração entre diferentes ambientes (desenvolvimento vs. produção). | |

---

## ⚙️ Estrutura de Projeto (Chapter 4)

A arquitetura final reflete um padrão de desenvolvimento moderno com ênfase no desacoplamento entre serviços:

*   **Raiz do Projeto:** Contém os arquivos de infraestrutura (`Dockerfile` e `docker-compose.yaml`), o manifesto de dependências (`package.json`) e o arquivo de esquema do banco de dados (`prisma/schema.prisma`).
*   **`src/` (Source Code):** Contém a lógica de backend da aplicação:
    *   **`server.js`:** Ponto de entrada do servidor Express. Responsável por importar middlewares globais, servir arquivos estáticos (`public/`) e anexar roteadores modulares.
    *   **`prisma-client.js`:** Arquivo dedicado à inicialização do cliente Prisma, usado para todas as interações de banco de dados no projeto.
    *   **`routes/`:** Subdivide a lógica de *endpoints* em arquivos específicos (`auth-routes.js`, `todo-routes.js`), facilitando a gestão do código.
    *   **`middleware/`:** Dedicado à lógica de autenticação e validação, garantindo que a segurança não se misture à lógica de negócios principal.
*   **`public/`:** Armazena os ativos estáticos (*assets*) do frontend (HTML, CSS, scripts) que são servidos pelo backend.
