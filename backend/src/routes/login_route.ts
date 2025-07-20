import { Router } from 'express';
import { capturarDados } from '../controllers/login_controller';

const router = Router();

router.post('/login', capturarDados);

export default router;
