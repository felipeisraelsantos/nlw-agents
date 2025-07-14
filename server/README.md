# NLW AGENTS

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma aplicação de agentes inteligentes.

## ?? Tecnologias Utilizadas

### Backend

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação tipada
- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM moderno para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **pgvector** - Extensão PostgreSQL para vetores
- **Zod** - Validação de schemas e tipos
- **Docker** - Containerização da aplicação

### Ferramentas de Desenvolvimento

- **Biome** - Linter e formatter
- **Drizzle Kit** - CLI para migrações e seeds
- **Ultracite** - Ferramenta de desenvolvimento

## ?? Estrutura do Projeto

```bash
src/
??? db/
?   ??? connection.ts      # Conexão com banco de dados
?   ??? migrations/        # Migrações do banco
?   ??? schema/           # Schemas das tabelas
?   ??? seed.ts           # Dados iniciais
??? http/
?   ??? routes/           # Rotas da API
??? env.ts               # Configuração de variáveis de ambiente
??? server.ts            # Servidor principal
```

## ??? Padrões de Projeto

- **Clean Architecture** - Separação clara de responsabilidades
- **Repository Pattern** - Abstração do acesso a dados
- **Dependency Injection** - Inversão de controle
- **Type Safety** - Uso extensivo de TypeScript e Zod
- **Environment Configuration** - Validação de variáveis de ambiente

## ?? Setup e Configuração

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- PostgreSQL (via Docker)

### 1. Clone o repositório

```bash
git clone <repository-url>
cd nlw/server
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

### 4. Inicie o banco de dados

```bash
docker-compose up -d
```

### 5. Execute as migrações

```bash
npx drizzle-kit migrate
```

### 6. Popule o banco com dados iniciais (opcional)

```bash
npm run db:seed
```

### 7. Inicie o servidor

```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

## ?? Endpoints da API

- `GET /health` - Health check
- `GET /rooms` - Lista todas as salas

## ?? Docker

O projeto inclui configuração Docker para facilitar o desenvolvimento:

```bash
# Iniciar apenas o banco de dados
docker-compose up -d

# Parar os containers
docker-compose down
```

## ?? Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento com hot reload
- `npm start` - Inicia o servidor em modo produção
- `npm run db:seed` - Executa o seed do banco de dados

## ?? Configurações

### Biome (Linter/Formatter)

Configurado para manter consistência no código com regras de formatação automática.

### Drizzle Kit

Configurado para PostgreSQL com:

- Migrações automáticas
- Schema em snake_case
- Suporte a pgvector

---

Desenvolvido com ?? durante o **NLW Agents** da Rocketseat
