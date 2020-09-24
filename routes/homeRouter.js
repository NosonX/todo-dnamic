import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('pages/home', {
    appName: 'TODO application from router',
  });
});

export default router;
