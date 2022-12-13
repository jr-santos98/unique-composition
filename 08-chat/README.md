# Chat

Esse projeto trata-se de um conjunto de Cliente/Servidor com a finalidade
de treinar e aperfeiçoar o conhecimento sobre Redes de Computadores.
Foi utilizado como base para disciplina MC833, UNICAMP, 2022-2; depois aprimorado e aperçoado.

Para gerar os executaveis utilize o comando:

`make`

Para limpar:

`make clean`

## Servidor:

uso: `./servidor <Port>`

> O servidor utiliza o endereço localhost como padrão.

## Cliente:

uso: `./cliente <IPaddress> <Port>`

## Funcionalidade

O programa pretende funcionar como um mensageiro.
O cliente manda mensagem para outro cliente utilizando o servidor como mensageiro.
Uma das ideias iniciais de desenvolvimento, é utilizar um buffer, para quando o cliente
estiver offiline.

## Exemplo

Execução do cliente, dado a entrada in.txt:

`./cliente 127.0.0.1 3000`

## Justificativa

Esse projeto busca aperfeiçoar conhecimentos obtidos durante a graduação.
Colocar em prática conceitos de SO e redes, utilizando a linguagem C como base.
