# 🛡️ TibiaRank

O TibiaRank é uma aplicação web para exibir e ranquear personagens dos meus amigos no Tibia.

Este projeto é um **monorepo** que contém:
* Um **backend** em **Spring Boot** que atua como um proxy, buscando dados da API TibiaData.
* Um **frontend** em **Angular** com Server-Side Rendering (SSR) para exibir os dados em uma interface com temática medieval.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

## ⚙️ Como Executar

Para rodar este projeto, você precisará de **dois terminais** abertos simultaneamente.

### Pré-requisitos

* **Java JDK 17+** (para o backend)
* **Node.js v22+** (para o frontend, recomendado usar o NVM)
* **Maven** (O Spring Boot utiliza o Wrapper do Maven, `mvnw`, então não é necessária instalação global)

---

### 1. Backend (Servidor Spring Boot)

O backend é responsável por se conectar à API externa do Tibia.

1.  Abra o primeiro terminal e navegue até a pasta `backend`:
    ```bash
    cd backend
    ```

2.  Execute o servidor Spring Boot usando o Maven Wrapper:
    ```bash
    # No Windows (CMD ou PowerShell)
    .\mvnw spring-boot:run
    
    # No Linux ou macOS
    ./mvnw spring-boot:run
    ```
    > 🏁 O backend estará rodando em `http://localhost:8080`.

---

### 2. Frontend (Cliente Angular)

O frontend é a interface com o usuário que consome os dados do *nosso* backend.

1.  Abra um **segundo** terminal e navegue até a pasta `frontend`:
    ```bash
    cd frontend
    ```

2.  Se você usa NVM, ative a versão correta do Node.js:
    ```bash
    nvm use 22
    ```

3.  Instale as dependências do projeto (só é necessário na primeira vez):
    ```bash
    npm install
    ```

4.  Inicie o servidor de desenvolvimento do Angular:
    ```bash
    npm start
    ```
    > 🏁 O frontend estará rodando com SSR em `http://localhost:4200`.
