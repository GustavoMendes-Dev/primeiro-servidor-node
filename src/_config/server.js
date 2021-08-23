const Koa = require('koa')
const Router = require('koa-router')
const applyRoutes = require('./routes')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router() //Roteador

module.exports = () => {
    console.log('[Koa] Criando um servidor')

    applyRoutes(router)

    app.use(bodyParser()).use(router.routes()).use(router.allowedMethods())
    
    app.listen(8080) //Porta

}