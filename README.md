docker compose build
docker compose up

localhost:8002 - manager

### criar servico no kong

curl -i -X POST --url http://localhost:8001/services/ --data name=test-rest --data url=http://test-rest:3000/test

### criar a rota

curl -i -X POST --url http://localhost:8001/services/test-rest/routes --data name=test-rest --data paths[]=/test

### mais uma rota

curl -i -X POST --url http://localhost:8001/services/test-rest/routes --data name=test-rest --data paths[]=/test2

### testar

curl localhost:8000/test

curl localhost:8000/test2
