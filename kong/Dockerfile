# Use a imagem oficial do Kong como base
FROM kong:latest

# Copie o script de inicialização para o contêiner
COPY setup.sh /usr/local/bin/setup.sh

# Defina permissões de execução para o script
# RUN chmod +x /usr/local/bin/setup.sh

# Execute o script de inicialização quando o contêiner for iniciado
CMD ["setup.sh"]