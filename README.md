<p align="center">
  <a href="https://github.com/Leon4rdoMonteiro">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/VHS_diagonal.svg/1200px-VHS_diagonal.svg.png" width=300 height=300 alt="Logo">
  </a>
</p>

<h1 align="center"> <b>📼 MOVIE RENTAL API </b></h1>

Autor: [Leonardo Monteiro](https://github.com/Leon4rdoMonteiro)

### 🚀 API construída para teste na PHI - Node.js Backend Developer.

   + 🌠 Foram utilizadas as tecnologias:
        - Node.js, Express, JWT, SQL (MySQL), sem ORM's.
      
   + 🛠 Ferramentas/Frameworks:
        - Docker, Insomnia
    
   + 🔏 Segurança: 
        - bcrypt: Gerador de hashs de senhas padrão.
        - helmet: Configura cabeçalhos HTTP e protege contra vários ataques como XSS e Sniffing. 
        
 ## 🖊 Configurações:

  - Criar arquivo de váriaveis de ambiente: ```.env``` com base no arquivo: ```.env.example```

```js
NODE_ENV=
PORT=
```
 
  - Criar um SECRET para geração dos tokens e um SALT para hash de senhas e armazenar nas variáveis de ambiente.
  
```js
SECRET=
SALT=
```
 
 + Alterar variáveis de ambiente para conectar-se com o container MySQL
  
```js
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

     Obs: Criar base de dados utilizando o script SQL localizado na pasta /src/database/db. (MySQL Workbench)


 ## 🏁 Instalação:
  
   - 1.Instalar todas as dependências:
   
     ```bash
     $ npm install
     ```

   - 2.Criando e executando container do MySQL:

     ```bash
     $ docker-compose up -d
     ```

   - 3.Executar API, porta padrão 8000:

     ```bash
     $ npm run start
     ```

   - 4.Existe um arquivo de importação de workspace criado para utilizar como cliente HTTP (Insomnia)
     - Localizado na pasta /insomnia no código fonte

   - 5.Link da especificação:
        - https://app.swaggerhub.com/apis-docs/Leon4rdoMonteiro/movie-rental.api/1.0
   