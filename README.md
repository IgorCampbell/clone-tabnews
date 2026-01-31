# clone-tabnews

Repositório para estudos do curso.dev .

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
