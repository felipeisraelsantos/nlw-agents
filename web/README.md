# NLW AGENTS

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma aplicação web moderna com React e TypeScript.

## ?? Tecnologias Utilizadas

### Core

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultra-rápido

### Styling & UI

- **Tailwind CSS 4** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones modernos
- **Class Variance Authority** - Sistema de variantes para componentes

### State Management & Data Fetching

- **TanStack React Query** - Gerenciamento de estado server-side e cache

### Routing

- **React Router DOM** - Roteamento client-side

### Development Tools

- **Biome** - Linter e formatter (substituindo ESLint + Prettier)
- **Ultracite** - Configuração de linting otimizada

## ?? Estrutura do Projeto

```
src/
??? components/
?   ??? ui/           # Componentes base reutilizáveis
??? pages/            # Páginas da aplicação
??? lib/              # Utilitários e configurações
??? app.tsx           # Componente principal
??? main.tsx          # Ponto de entrada
```

## ??? Padrões de Projeto

- **Componentes Funcionais** com hooks do React
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização
- **Path Aliases** (`@/`) para imports limpos
- **Componentes UI** baseados em Radix UI
- **Linting** com Biome para consistência de código

## ? Setup e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd nlw-agents
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção

## ?? Funcionalidades

- Criação de salas
- Navegação entre páginas
- Interface responsiva
- Componentes reutilizáveis

---

Desenvolvido com ?? durante o NLW da Rocketseat
