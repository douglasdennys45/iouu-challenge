# DESAFIO IOUU

##### Como rodar o projeto?

> Requisitos

* Docker

> Iniciar testes

* Rode os comandos: `docker exec -it calculator_app /bin/sh` e após `npm run test:ci`
* Na pasta simulator rode o comando `go test -cover -coverprofile=tdd.out ./... && go tool cover -html=tdd.out -o index.html`
* Rode os comandos: `docker exec -it tracker_error_app /bin/sh` e após `npm run test:ci`

> Iniciar projeto

* `docker-compose up -d` (OBS.: para rodar o projeto você necessita estar na pasta raiz após o git clone)

##### Documentação dos serviços

> [**Link para o swagger de tracker error**](http://localhost:8081/api-docs)
> [**Link para o swagger de simulator**](http://localhost:8080/api-docs)
> [**Link para o swagger de calculator**](http://localhost:8082/swagger/index.html)


##### Responsabilidade de cada microserviço

> tracker-error: Serviço responsável por mapear todos os erros que acontecer em alguns dos microserviços
> simulator: Serviço resposável por realizar a busca, pagamento, financiamento e refinanciamento
> calculator: Serviço responsável pelo calculo do financiamento do usuário solicitante