import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Carlos Henrique',
    email: 'devcarlos2@gmail.com',
    password_hash: '400289222',
  });
  return res.json(user);
});

export default routes;
