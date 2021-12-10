## Passos para rodar o backend
    Considerações Iniciais:
        - Foi utilizado o NodeJs na versão 16.7.0 e o npm na versão 7.21.0
        - PostgreSQL na versão 12.2

    1 - Renomeie o arquivo .env.example para .env
    2 - Crie o banco de dados no postgres e informe-o no arquivo .env no campo DATABASE
    3 - Informe a senha do seu postgres no arquivo .env no campo PASSWORD
    4 - Informe o secret de geração do token de autenticação no arquivo .env no campo SECRET
    5 - Dentro da pasta backend, instale as dependências rodando o comando npm i
    6 - Para prevenção de erros futuros, instale o knex globalmente na sua máquina.
    7 - Para criação das tabelas no banco de dados execute o comando npm run migrate:latest
    8 - Para execução das seeds execute o comando npm run seeds
    9 - Para a iniciar o servidor apenas execute npm start

    Credenciais do usuário padrão
        email: teste@teste.com
        senha: 123