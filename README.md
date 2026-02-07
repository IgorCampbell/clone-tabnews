# clone-tabnews

Repositório para estudos do curso.dev .

## Comandos Linux

`sudo apt update` para atualizar a lista de pacotes.

## Configuração do ambiente

Para configurar um novo ambiente comece com o comando `nvm install` para que seja configurado o `node.js` na versão desejada.

Para configurar o módulo watch de teste do Jest, executar o comando `npm run test:watch`.

Para executar o servidor web utilizar o comando `npm run dev`.

## Ferramentas

### dig

Digitar `dig` no terminal. Se não reconhecer o comando, então é necessário instalar a ferramenta.

Instalando o dig.
Primeiro é interessante atualizar os pacotes do apt digitando `sudo apt update` no terminal.
Depois executar o comando `sudo apt install dnsutils`.

Após instalado pode usar o comando `dig igorcampbell.com.br A` por exemplo, para ver o "A" record.
Ou `dig igorcampbell.com.br TXT` para ver o TXT.
Ou `dig igorcampbell.com.br TXT +trace` para ver o passo a passo até chegar no servidor final.

### curl

Utilizando o curl para ver a request e response.
`curl -v  http://localhost:3000/api/status`

### Docker compose

Comando para levantar a VM (após o arquivo `compose.yaml` configurado):
`docker compose up`
Para levantar no modo detach:
`docker compose up --detach` ou `docker compose up -d`
Para derrubar o container:
`docker compose down`
Ou para recriar o container após alguma alteração:
`docker compose up -d --force-recreate`
Se precisar definir o caminho do arquivo de configuração:
`docker compose -f=infra/compose.yaml up`

Comando para listar os processos docker inicializados: `docker ps` ou `docker ps --all` (--all ou -a) para listar todos os processos, mesmo os que não se encontram em execução.
O comando `ps` é uma convenção no Linux e significa Process List.

Para visualizar os logs, utilizar o comando com o nome do container como `docker logs clone-tabnews-database-1`.

Instalando o client PSQL: `sudo apt install postgresql-client`

Conectando no Postgre via PSQL `psql --host=localhost --username=postgres --port=5432`

Para sair do PSQL: `\q`
