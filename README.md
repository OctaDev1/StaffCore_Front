# 💼 Staff Core

Sistema de Gestão de Recursos Humanos desenvolvido para **centralizar, organizar e simplificar a gestão de colaboradores, contratos e processos internos de RH**.

> **Staff Core — Tecnologia que centraliza e impulsiona seu RH.**

---

## 📋 Sobre o Projeto

O **Staff Core** é uma plataforma de gerenciamento de Recursos Humanos desenvolvida para facilitar a organização, o controle e a administração das informações de colaboradores, contratos e processos internos de RH.

A proposta do sistema é substituir processos manuais e informações descentralizadas por uma solução centralizada, proporcionando **mais segurança, agilidade, transparência e controle** para a gestão de Recursos Humanos.

O projeto foi desenvolvido pela equipe **OctaDev**, com foco na construção de uma aplicação moderna, integrada e preparada para a evolução das rotinas de RH.

---

## 🎯 Objetivos

- Centralizar as informações dos colaboradores;
- Organizar dados cadastrais e contratuais;
- Facilitar o controle e a consulta de informações;
- Reduzir processos administrativos manuais;
- Aumentar a segurança das informações;
- Permitir filtros e consultas dinâmicas;
- Disponibilizar uma API REST para integração;
- Criar uma base tecnológica preparada para futuras automações de RH.

---

## 💡 Problema e Solução

### ❌ Cenário tradicional

- Dados de funcionários espalhados;
- Processos administrativos manuais;
- Risco de perda de informações sensíveis;
- Dificuldade para consultar e organizar dados;
- Baixa integração entre processos.

### ✅ Com o Staff Core

- Informações centralizadas;
- Processos administrativos automatizados;
- Segurança e organização dos dados;
- Gestão centralizada de colaboradores;
- Consultas e filtros dinâmicos;
- Integração por API REST.

---

## 🚀 Tecnologias Utilizadas

### Backend

| Tecnologia | Descrição |
|------------|-----------|
| ☕ Java 17 | Linguagem de programação |
| 🌱 Spring Boot | Framework principal do backend |
| 🗄️ Spring Data JPA | Persistência e acesso aos dados |
| 🐬 MySQL | Banco de dados |
| 🔌 API REST | Comunicação e integração com o sistema |

### Frontend

| Tecnologia | Descrição |
|------------|-----------|
| ⚛️ React | Biblioteca para construção da interface |
| 🟦 TypeScript | Tipagem e desenvolvimento do frontend |
| ⚡ Vite | Ferramenta de build e desenvolvimento |
| 🎨 Tailwind CSS | Estilização da aplicação |
| 🟢 Node.js | Ambiente utilizado no desenvolvimento do frontend |

---

## 🏛️ Arquitetura

O Staff Core possui uma arquitetura baseada na separação entre **frontend, backend e banco de dados**.

```text
┌─────────────────────────────┐
│          FRONTEND           │
│ React + TypeScript + Vite   │
│        + Tailwind CSS       │
└──────────────┬──────────────┘
               │
               │ API REST
               ▼
┌─────────────────────────────┐
│          BACKEND            │
│       Java 17 + Spring      │
│          Boot/JPA           │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│        BANCO DE DADOS       │
│            MySQL            │
└─────────────────────────────┘
```

---

## 🔧 Arquitetura Backend

A API do Staff Core foi estruturada para disponibilizar serviços responsáveis pelo gerenciamento dos dados de Recursos Humanos.

Entre as principais operações estão:

- **Cadastrar e consultar colaboradores**
  - Registro centralizado;
  - Validação de dados;
  - Listagem dinâmica;
  - Filtros para consulta.

- **Atualizar e deletar colaboradores**
  - Manutenção dos dados cadastrais;
  - Atualização do status contratual;
  - Remoção segura de registros.

---

## 📊 Banco de Dados

O sistema utiliza o **MySQL** como SGBD.

### 📌 Tabela: `tb_colaborador`

| Atributo | Tipo | Descrição |
|----------|------|-----------|
| `id` | BIGINT | Identificador único gerado automaticamente |
| `matricula` | VARCHAR(10) | Identificação interna do colaborador |
| `nome_completo` | VARCHAR(255) | Nome completo do funcionário |
| `data_nascimento` | DATE | Data de nascimento |
| `cpf` | VARCHAR(11) | Cadastro de Pessoa Física |
| `email` | VARCHAR(100) | Endereço de contato eletrônico |
| `data_admissao` | DATE | Data de início do vínculo empregatício |
| `data_demissao` | DATE | Data de encerramento do vínculo, opcional |
| `tipo_contrato` | VARCHAR(25) | Modalidade do contrato, como CLT, PJ e Estágio |

---

## 📈 Estrutura de Dados

A tabela `tb_colaborador` representa a principal entidade de dados do sistema.

Seu mapeamento contempla informações cadastrais e contratuais necessárias para o gerenciamento dos colaboradores, permitindo a centralização dessas informações em uma única plataforma.

---

## 🎨 Design da Aplicação

A identidade visual do Staff Core foi criada para transmitir:

- 🔐 **Confiança**
- 💡 **Inovação**
- 🎯 **Foco**
- 📈 **Produtividade**
- 👤 **Experiência**

### 🎨 Paleta de cores

#### Cores da marca

| Cor | Código |
|-----|--------|
| Ciano Turquesa | `#2DD4BF` |
| Azul Oceano | `#0284C7` |
| Azul Ciano | `#38BDF8` |
| Azul Escuro | `#0F2B48` |

#### Cores da interface

| Elemento | Código |
|----------|--------|
| Fundo | `#04080E` |
| Superfície | `#091727` |
| Texto Secundário | `#94A3B8` |
| Texto Principal | `#FFFEFF` |

---

## 📌 Funcionalidades

### 👥 Gestão de Colaboradores

- Cadastro de colaboradores;
- Consulta de colaboradores;
- Atualização de dados;
- Exclusão de registros;
- Atualização de status contratual;
- Filtros e busca dinâmica.

### 📑 Gestão de Contratos

- Centralização das informações contratuais;
- Controle do tipo de contrato;
- Registro de admissão;
- Registro de desligamento.

### 🔎 Consultas

- Busca inteligente;
- Filtros dinâmicos;
- Listagem centralizada;
- Relatórios e informações instantâneas.

### 🔌 Integração

- API REST;
- Integração com banco de dados MySQL;
- Estrutura preparada para integrações externas.

---

## 🖥️ Demonstração Prática

A plataforma permite acompanhar em tempo real a centralização das rotinas de RH.

Entre os recursos demonstrados estão:

- Gestão centralizada de cadastros e contratos;
- Filtros dinâmicos;
- Busca inteligente;
- Relatórios instantâneos;
- Integração por API REST;
- Conexão com banco de dados MySQL.

### 🌐 Plataforma

`app.staffcore.com.br/colaboradores`

---

## 🔮 Implementações Futuras

O Staff Core possui uma visão de evolução baseada em quatro módulos estratégicos.

### 1. 📅 Gestão de Jornada & Ausências

- Ponto e banco de horas;
- Controle de marcação diária;
- Registro de horas extras;
- Controle de folgas acumuladas;
- Controle de férias e licenças;
- Fluxo de solicitação e aprovação de férias.

### 2. 🏢 Estrutura & Benefícios

- Organograma dinâmico;
- Associação entre colaboradores e gestores;
- Gestão de benefícios;
- Gerenciamento de VR;
- Gerenciamento de VT;
- Plano de saúde vinculado ao contrato.

### 3. 📊 Governança & Analytics

- Auditoria e logs;
- Rastreabilidade das alterações;
- Histórico de inclusão, alteração e remoção de dados;
- Relatórios em PDF;
- Relatórios em Excel;
- Exportação de dados analíticos.

### 4. 🤖 Automação & Comunicação

- Notificações por e-mail;
- Boas-vindas para novos colaboradores;
- Lembretes de documentos vencidos;
- Alertas de férias;
- Alertas de aniversários;
- Webhooks;
- Integrações com sistemas externos.

---

## 📂 Estrutura do Projeto

```text
Staff Core
│
├── Backend
│   ├── Java 17
│   ├── Spring Boot
│   ├── Spring Data JPA
│   └── API REST
│
├── Frontend
│   ├── React
│   ├── TypeScript
│   ├── Vite
│   └── Tailwind CSS
│
└── Banco de Dados
    └── MySQL
```

---

## 👥 Equipe

O **Staff Core** foi desenvolvido pela equipe **OctaDev**, formada por estudantes do Bootcamp Java Full Stack da Generation Brasil.

### Desenvolvedores

- Felipe Oliveira Lopes
- Gabriel José Alegre
- Giovanna Karolline Menezes Ribeiro
- Guilherme Oliveira
- João Vitor Diniz Alves
- Juliana Macedo
- Maryane Praxedes Alves da Silva
- Thiago José Nascimento Versiani

---

## 🏆 Sobre a OctaDev

A equipe **OctaDev** desenvolveu o Staff Core com foco em tecnologia, organização, inovação e construção de uma solução capaz de centralizar e impulsionar processos de Recursos Humanos.

---

## 📄 Licença

Este projeto possui finalidade **acadêmica e de aprendizado**, desenvolvido no contexto do Bootcamp Java Full Stack da Generation Brasil.
