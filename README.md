# 🤖 NLW Agents — Q&A por Voz com IA

O **NLW Agents** é uma aplicação Full-Stack concebida para criar salas de perguntas e respostas inteligentes baseadas em áudio. A aplicação permite gravar ou enviar ficheiros de áudio em salas temáticas, transcrever o conteúdo, gerar embeddings vetoriais e processar respostas contextuais utilizando a API do **Google Gemini**.

---

## 🚀 Tecnologias Utilizadas

### **Backend (Node.js & TypeScript)**
* **Runtime / Framework:** Node.js com [Fastify](https://fastify.dev/)
* **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
* **Banco de Dados:** PostgreSQL com a extensão `pgvector` (para busca vetorial/embeddings)
* **Inteligência Artificial:** API do Google Gemini (`@google/genai`)
* **Validação de Dados:** Zod / Env config
* **Ferramental:** Biome (Linter e Formatador)

### **Frontend (React)**
* **Framework / Bundler:** React 19 com [Vite](https://vitejs.dev/)
* **Estilização:** Tailwind CSS & Shadcn UI
* **Roteamento & Estado:** React Router DOM & TanStack Query (React Query)
* **Formulários:** React Hook Form com resolução via Zod

---

## 🛠️ Arquitetura e Funcionalidades

* **Gestão de Salas:** Criação e listagem de salas temáticas para interação.
* **Processamento de Áudio:** Upload de ficheiros de áudio e divisão em chunks para transcrição.
* **Integração com LLM:** Geração de respostas inteligentes e extração de insights a partir das perguntas e transcrições armazenadas.
* **Base Vetorial (`pgvector`):** Suporte para busca semântica de dados através do PostgreSQL.

---

## 📂 Estrutura do Projeto

```text
nlw-agents/
├── server/               # API REST (Fastify, Drizzle ORM, Postgres, Gemini)
│   ├── docker/           # Setup do banco de dados PostgreSQL com pgvector
│   ├── src/
│   │   ├── db/           # Schema, migrações e conexão do Drizzle
│   │   ├── http/         # Rotas e controladores da API
│   │   └── services/     # Integração com a API do Google Gemini
└── web/                  # Interface do utilizador (React, Vite, Tailwind)
    └── src/
        ├── components/   # Componentes visuais reutilizáveis (Shadcn UI)
        ├── http/         # Hooks e clientes de integração com o Backend
        └── pages/        # Páginas da aplicação
