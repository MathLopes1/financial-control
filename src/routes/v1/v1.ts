import { Router } from 'express';
import { attachControllers } from '@decorators/express';
import UserController from '../../app/controllers/UserController';

class RoutesV1 {
  static routes(): Router {
    const router = Router();

    attachControllers(
      router,
      [
        UserController,
      ],
    );
    return router;
  }
}

export default RoutesV1;
