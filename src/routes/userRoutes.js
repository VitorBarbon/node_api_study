import { Router } from 'express';
import userController from '../controllers/userController';

const router = new Router();
router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
  index -> lista todos os usuarios -> GET
  store/create -> cria um usuario -> POST
  delete -> exclui um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/
