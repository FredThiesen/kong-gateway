#!/bin/bash

# Executa o comando 'kong migrations bootstrap'
echo "Iniciando migrações do Kong..."
kong migrations bootstrap

# Inicia o Kong
echo "Iniciando o serviço do Kong..."
kong start