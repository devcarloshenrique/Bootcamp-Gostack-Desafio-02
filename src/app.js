import express from 'express';
import routes from './routes';

import './database/index';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Toda á aplicação podera retornar res.json({}); nas routes.js
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
