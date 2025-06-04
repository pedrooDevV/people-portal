# 🏥 Portal do Paciente

O **Portal do Paciente** é uma aplicação web completa que facilita o gerenciamento de consultas, exames e prescrições médicas. A plataforma oferece uma interface simples e intuitiva para que pacientes possam agendar, cancelar ou remarcar consultas, visualizar histórico médico e acessar resultados de exames.

## ✅ Funcionalidades

* 📅 **Agendar Consulta:** permite ao paciente marcar uma nova consulta.
* ❌ **Cancelar Consulta:** possibilita o cancelamento de consultas agendadas.
* 🔄 **Remarcar Consulta:** permite alterar a data ou horário de uma consulta.
* 👁️‍🗨️ **Visualizar Consultas:** exibe um histórico completo das consultas realizadas e futuras.
* 📝 **Resultados de Exames:** acesso aos resultados de exames laboratoriais e de imagem.
* 💊 **Prescrições:** consulta às prescrições médicas ativas e históricas.

## 🛠️ Tecnologias Utilizadas

* **Frontend:**

  * HTML5
  * CSS3
  * JavaScript

* **Backend:**

  * Java (Spring Boot)

* **Banco de Dados:**

  * Oracle Database com PL/SQL

## 🚀 Como Executar o Projeto

### ✅ Backend

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/portal-do-paciente.git
   ```
2. Acesse a pasta do backend:

   ```bash
   cd portal-do-paciente/backend
   ```
3. Configure o `application.properties` com as credenciais do banco de dados Oracle.
4. Execute o projeto com Maven ou sua IDE de preferência:

   ```bash
   mvn spring-boot:run
   ```

### ✅ Frontend

1. Acesse a pasta do frontend:

   ```bash
   cd portal-do-paciente/frontend
   ```
2. Abra o arquivo `index.html` em seu navegador.

> O frontend se comunica com o backend via API RESTful.

## 🗂️ Estrutura do Projeto

```
portal-do-paciente/
├── backend/       # Código fonte do backend em Java
├── frontend/      # Arquivos HTML, CSS e JS
├── database/      # Scripts PL/SQL para criação das tabelas
└── README.md
```

## 🎯 Principais Endpoints da API

* `GET /consultas` — Listar consultas
* `POST /consultas` — Agendar consulta
* `PUT /consultas/{id}` — Remarcar consulta
* `DELETE /consultas/{id}` — Cancelar consulta
* `GET /exames` — Listar exames
* `GET /prescricoes` — Listar prescrições

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## 👨‍💻 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para sugerir melhorias.

## 📞 Contato

Desenvolvido por **Gabriel Eduardo Ritter, Gustavo Renan Petry, João Lucas Rebello Aldrovandi de Souza, Lorenzo Zoboli, Matheus Ivanowski Muller, Pedro Henrique de Borba e Pedro Henrique Leite da Costa**.
Entre em contato: [seu.email@exemplo.com](mailto:seu.email@exemplo.com)

