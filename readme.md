## Passos para rodar o backend
    Considerações Iniciais:
        - Foi utilizado o NodeJs na versão 16.7.0 e o npm na versão 7.21.0.
        - PostgreSQL na versão 12.2.

    1 - Renomeie o arquivo .env.example para .env.
    2 - Crie o banco de dados no postgres e informe-o no arquivo .env no campo DATABASE.
    3 - Informe a senha do seu postgres no arquivo .env no campo PASSWORD.
    4 - Informe o secret de geração do token de autenticação no arquivo .env no campo SECRET.
    5 - Dentro da pasta backend, instale as dependências rodando o comando <npm i>.
    6 - Para prevenção de erros futuros, instale o knex globalmente na sua máquina com o comando <npm i knex -g>.
    7 - Para criação das tabelas no banco de dados execute o comando <npm run migrate:latest>.
    8 - Para execução das seeds execute o comando <npm run seeds>.
    9 - Para a iniciar o servidor apenas execute <npm start>.

    Credenciais do usuário padrão:
        email: teste@teste.com
        senha: 123

## Rotas
    Considerações Iniciais:
        - As informações necessárias são enviadas através do body.
        - O Token de autenticação é do tipo Bearer e deve ser informado no campo authorization juntamente com o token no header. Ex: Bearer <token>.
        - Os parâmetros via rota estão entre <> e devem ser informados, assim como os campos no body.

    Login:
        - Método: POST
        - Informações necessárias: email, password
        - Necessita de autenticação: não
        - rota: /login

    Signup:
        - Método: POST
        - Informações necessárias: email, name, password e confirmPassword
        - Necessita de autenticação: sim
        rota: /signup

    Get All Modules:
        - Método: GET
        - Necessita de autenticação: não
        - rota: /modules

    Create Module:
        - Método: POST
        - Informações necessárias: name
        - Necessita de autenticação: sim
        - rota: /modules

    Edit Module:
        - Método: PUT
        - Informações necessárias: id, name
        - Necessita de autenticação: sim
        - rota: /modules

    Delete Module:
        - Método: DELETE
        - Informações necessárias: id
        - Necessita de autenticação: sim
        - rota: /modules/<id>

    Get Classes by Modules:
        - Método: GET
        - Informações necessárias: module_id
        - Necessita de autenticação: não
        - rota: /classes/<module_id>

    Create Class:
        - Método: POST
        - Informações necessárias: name, module_id, url_video, date
        - Necessita de autenticação: sim
        - rota: /classes

    Edit Class:
        - Método: PUT
        - Informações necessárias: id, name, module_id, url_video, date
        - Necessita de autenticação: sim
        - rota: /classes

    Delete Class:
        - Método: DELETE
        - Informações necessárias: id
        - Necessita de autenticação: sim
        - rota: /classes/<id>