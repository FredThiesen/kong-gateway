`docker compose build`
`docker compose up`

- localhost:8002 - manager

### criar servico no kong

`curl -i -X POST --url http://localhost:8001/services/ --data name=test-rest --data url=http://test-rest:3000/`

### criar a rota (o nome do path é você que escolhe, e vai ser usado pra acessar o serviço)

`curl -i -X POST --url http://localhost:8001/services/test-rest/routes --data name=test-rota1 --data paths[]=/testeupstream`

### testar

`curl localhost:8000/testeupstream/test`

`curl localhost:8000/testeupstream/test-two`
