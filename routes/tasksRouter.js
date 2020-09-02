import { Router } from 'express';

const router = Router();

router
  .get('/', (req, res) => {
    res.render('pages/tasks');
  })
  .get('/create', (req, res) => {
    res.render('pages/createTask')
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    res.render('pages/task', { id });
  });

export default router;