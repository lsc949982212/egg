'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index(app) {
        const {ctx} = this;
        ctx.body = 'hi, egg';
        console.log(app)
    }
}

module.exports = HomeController;
