# NLW AGENTS

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma aplica��o de agentes inteligentes.

## ?? Tecnologias Utilizadas

### Backend

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programa��o tipada
- **Fastify** - Framework web r�pido e eficiente
- **Drizzle ORM** - ORM moderno para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **pgvector** - Extens�o PostgreSQL para vetores
- **Zod** - Valida��o de schemas e tipos
- **Docker** - Containeriza��o da aplica��o

### Ferramentas de Desenvolvimento

- **Biome** - Linter e formatter
- **Drizzle Kit** - CLI para migra��es e seeds
- **Ultracite** - Ferramenta de desenvolvimento

## ?? Estrutura do Projeto

```bash
src/
??? db/
?   ??? connection.ts      # Conex�o com banco de dados
?   ??? migrations/        # Migra��es do banco
?   ??? schema/           # Schemas das tabelas
?   ??? seed.ts           # Dados iniciais
??? http/
?   ??? routes/           # Rotas da API
??? env.ts               # Configura��o de vari�veis de ambiente
??? server.ts            # Servidor principal
```

## ??? Padr�es de Projeto

- **Clean Architecture** - Separa��o clara de responsabilidades
- **Repository Pattern** - Abstra��o do acesso a dados
- **Dependency Injection** - Invers�o de controle
- **Type Safety** - Uso extensivo de TypeScript e Zod
- **Environment Configuration** - Valida��o de vari�veis de ambiente

## ?? Setup e Configura��o

### Pr�-requisitos

- Node.js 18+
- Docker e Docker Compose
- PostgreSQL (via Docker)

### 1. Clone o reposit�rio

```bash
git clone <repository-url>
cd nlw/server
```

### 2. Instale as depend�ncias

```bash
npm install
```

### 3. Configure as vari�veis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

### 4. Inicie o banco de dados

```bash
docker-compose up -d
```

### 5. Execute as migra��es

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

# Produ��o
npm start
```

## ?? Endpoints da API

- `GET /health` - Health check
- `GET /rooms` - Lista todas as salas

## ?? Docker

O projeto inclui configura��o Docker para facilitar o desenvolvimento:

```bash
# Iniciar apenas o banco de dados
docker-compose up -d

# Parar os containers
docker-compose down
```

## ?? Scripts Dispon�veis

- `npm run dev` - Inicia o servidor em modo desenvolvimento com hot reload
- `npm start` - Inicia o servidor em modo produ��o
- `npm run db:seed` - Executa o seed do banco de dados

## ?? Configura��es

### Biome (Linter/Formatter)

Configurado para manter consist�ncia no c�digo com regras de formata��o autom�tica.

### Drizzle Kit

Configurado para PostgreSQL com:

- Migra��es autom�ticas
- Schema em snake_case
- Suporte a pgvector

---

Desenvolvido com ?? durante o **NLW Agents** da Rocketseat
