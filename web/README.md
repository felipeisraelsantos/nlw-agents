# NLW AGENTS

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma aplica��o web moderna com React e TypeScript.

## ?? Tecnologias Utilizadas

### Core

- **React 19** - Biblioteca para constru��o de interfaces
- **TypeScript** - Superset do JavaScript com tipagem est�tica
- **Vite** - Build tool e dev server ultra-r�pido

### Styling & UI

- **Tailwind CSS 4** - Framework CSS utility-first
- **Radix UI** - Componentes acess�veis e customiz�veis
- **Lucide React** - �cones modernos
- **Class Variance Authority** - Sistema de variantes para componentes

### State Management & Data Fetching

- **TanStack React Query** - Gerenciamento de estado server-side e cache

### Routing

- **React Router DOM** - Roteamento client-side

### Development Tools

- **Biome** - Linter e formatter (substituindo ESLint + Prettier)
- **Ultracite** - Configura��o de linting otimizada

## ?? Estrutura do Projeto

```
src/
??? components/
?   ??? ui/           # Componentes base reutiliz�veis
??? pages/            # P�ginas da aplica��o
??? lib/              # Utilit�rios e configura��es
??? app.tsx           # Componente principal
??? main.tsx          # Ponto de entrada
```

## ??? Padr�es de Projeto

- **Componentes Funcionais** com hooks do React
- **TypeScript** para tipagem est�tica
- **Tailwind CSS** para estiliza��o
- **Path Aliases** (`@/`) para imports limpos
- **Componentes UI** baseados em Radix UI
- **Linting** com Biome para consist�ncia de c�digo

## ? Setup e Configura��o

### Pr�-requisitos

- Node.js (vers�o 18 ou superior)
- npm ou yarn

### Instala��o

1. Clone o reposit�rio:

```bash
git clone <url-do-repositorio>
cd nlw-agents
```

2. Instale as depend�ncias:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

### Scripts Dispon�veis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produ��o
- `npm run preview` - Preview do build de produ��o

## ?? Funcionalidades

- Cria��o de salas
- Navega��o entre p�ginas
- Interface responsiva
- Componentes reutiliz�veis

---

Desenvolvido com ?? durante o NLW da Rocketseat
