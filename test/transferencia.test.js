const request = require('supertest')
const { expect } = require('chai')
const { obterToken } = require('../helpers/autenticacao')
require('dotenv').config()
const postTransferencias = require('../fixtures/postTransferencias.json')


describe('Transferências', () => {
    let token

    beforeEach(async () => {
        token = await obterToken("julio.lima", "123456")
    })

    describe('POST/Tranferencias', () => {
        
        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou maior que R$ 10,00', async () => {
            const bodyTrasnferencias = {...postTransferencias}
            
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTrasnferencias)

            expect(resposta.status).to.equal(201);

        }) 
        it('Deve retornar falha com 422 quando o valor da transferencia for menor que R$ 10,00', async () =>{
            const bodyTrasnferencias = {...postTransferencias}
            bodyTrasnferencias.valor = 9

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTrasnferencias)

            expect(resposta.status).to.equal(422);
        })  
    })

    describe('GET/Tranferencias/{ID}', () => {
        it('Deve retornar sucesso com 200 e dados iguais ao registro de trensferencia contido no banco de dados', async ()=> {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/23')
                .set('Authorization', `Bearer ${token}`)

            console.log(resposta.body)
            console.log(resposta.status)
            expect(resposta.status).to.equal(200)
            expect(resposta.body.id).to.equal(23)
            expect(resposta.body.id).to.be.a('number')
            expect(resposta.body.conta_origem_id).to.equal(1)
            expect(resposta.body.conta_destino_id).to.equal(2)
            expect(resposta.body.valor).to.equal(11.00)
        })
    })

    describe('GET/tranferencias', () => {
        it('Deve retornar 10 elementos na paginação quando informar limite de 10 registros', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limite=10')
                .set('Authorization', `Bearer ${token}`)
            
            expect(resposta.status).to.equal(200)
            expect(resposta.body.limit).to.equal(10)
            expect(resposta.body.transferencias).to.have.lengthOf(10) 
        })
    })
})