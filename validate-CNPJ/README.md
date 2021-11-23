# Validator of CNPJ

O pacote foi desenvolvido com o objetivo de realizar a validação de CNPJ.

## Requisitos

É requisitado a instalação do(s) seguinte(s) componente(s):

- Python 3.

## Como executar

Utilizar o terminar ou qualquer interpretador de python 3.
Exemplo do comando para o terminal do Ubuntu:

´python3 validate-CNPJ.py´.

> Atualizar o comando de acordo com o interpretador ou sistema operacional utilizado.

## Funcionamento - Entradas suportadas

O verificador espera receber um CNPJ, ou seja, um conjunto de 14 digitos.
Esses 14 digitos podem ser fornecidos em 2 formatos:

- "00.000.000/0000-00";
- "00000000000000".

## Saída esperada

Se o CNPJ for válido, será retornado a mensagem: "CNPJ is valid!".

Caso não seja válido, será retornado: "CNPJ is invalid!".

> Caso o CNPJ fornecido não possua 14 digitos,
ou não esteja dentro dos formados suportados,
será retornado a mensagem: "The format provided is invalid.".
