# MOJS: Modern Open Journal System

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)](https://nestjs.com/)

> **Note**: MOJS (Modern Open Journal System) is a ground-up modernization of the Open Journal Systems (OJS) platform, built with modern web technologies for better performance, developer experience, and maintainability.

MOJS is a next-generation scholarly publishing platform that combines the best practices of modern web development to deliver a fast, scalable, and maintainable solution for academic publishing. Built with TypeScript across the entire stack, MOJS offers a seamless development experience and robust type safety.

## 🚀 Built with Titan Pomade Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | Next.js 14 (App Router) | React framework with server components |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Backend** | NestJS | Scalable Node.js server framework |
| **Database** | PostgreSQL 16 | Robust relational database |
| **ORM** | Prisma | Type-safe database client |
| **Search** | MeiliSearch | Lightning-fast search experience |
| **Container** | Docker | Consistent development and deployment |
| **Language** | TypeScript | Type safety across the stack |

## ✨ Features

- **Modern Architecture**: Built with scalability and maintainability in mind
- **Type Safety**: End-to-end TypeScript support
- **Blazing Fast**: Optimized performance with server components and edge functions
- **Developer Experience**: Excellent tooling and developer ergonomics
- **Modular Design**: Easy to extend and customize
- **Responsive UI**: Works seamlessly across all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or later
- PostgreSQL 16+
- Docker and Docker Compose
- pnpm 8.x (recommended)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/mojs.git
   cd mojs
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Update the environment variables in .env
   ```

4. **Start development servers**
   ```bash
   # Start all services with Docker
   docker-compose up -d
   
   # Run database migrations
   pnpm db:migrate
   
   # Start development servers
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Project Structure

```
.
├── apps/
│   ├── web/           # Next.js frontend application
│   └── api/           # NestJS backend API
├── packages/
│   ├── ui/            # Shared UI components
│   ├── config/        # Shared configuration
│   ├── database/      # Database schema and migrations
│   └── types/         # Shared TypeScript types
├── docker/            # Docker configuration
└── docs/              # Documentation
```

## 🔧 Development

### Common Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development servers |
| `pnpm build` | Build for production |
| `pnpm test` | Run tests |
| `pnpm lint` | Lint code |
| `pnpm db:migrate` | Run database migrations |
| `pnpm db:studio` | Open Prisma Studio |

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built upon the legacy of [Open Journal Systems](https://pkp.sfu.ca/software/ojs/)
- Inspired by modern web development best practices

## 🛠 System Requirements

### Development

- Node.js 20.x or later
- PostgreSQL 16+
- Docker and Docker Compose
- pnpm 8.x (recommended)
- Git

### Production

- Node.js 20.x (LTS)
- PostgreSQL 16+ (or compatible database service)
- Docker and Docker Compose (recommended)
- 2+ CPU cores
- 4GB+ RAM (8GB recommended)
- 20GB+ free disk space

## 🌟 Why MOJS with Titan Pomade?

### Benefits

- **Modern Stack**: Built with the latest web technologies
- **Type Safety**: End-to-end TypeScript support
- **Performance**: Optimized for speed and scalability
- **Developer Experience**: Excellent tooling and documentation
- **Modular**: Easy to extend and maintain

### Comparison with Legacy OJS

| Feature | Legacy OJS | Titan Pomade |
|---------|------------|--------------|
| **Frontend** | jQuery + Vue 2 | Next.js + React 18 |
| **Backend** | PHP + Smarty | NestJS + TypeScript |
| **Database** | MySQL/PostgreSQL | PostgreSQL + Prisma |
| **Search** | Solr | MeiliSearch |
| **Build Tool** | Custom | Vite |
| **Containerization** | None | Docker |

## 🚧 Project Status

MOJS is currently under active development. We're working hard to bring you a modern, performant, and maintainable scholarly publishing platform.

### Current Phase: Planning & Initial Setup

Next Steps:
- [x] Define product vision (MOJS)
- [x] Select tech stack (Titan Pomade)
- [x] Set up project structure
- [ ] Implement core user authentication
- [ ] Migrate journal management features
- [ ] Implement submission workflow

## 🤝 Contributing

We welcome contributions from the community! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to get started.

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built upon the legacy of [Open Journal Systems](https://pkp.sfu.ca/software/ojs/)
- Inspired by modern web development best practices

## 📬 Contact

For inquiries about MOJS or the Titan Pomade stack, please open an issue in our [GitHub repository](https://github.com/your-org/mojs).

---

*MOJS is built with the Titan Pomade stack, bringing together the best of today's web technologies to create a faster, more maintainable, and more enjoyable scholarly publishing experience. Titan Pomade represents our modern tech stack: TypeScript, Tailwind CSS, Next.js, NestJS, PostgreSQL, Prisma, MeiliSearch, and Docker.*
