import { Router } from 'express';
import { attachControllers } from '@decorators/express';
import UserController from '../../app/controllers/UserController';
import GainController from '../../app/controllers/GainController';

class RoutesV1 {
  static routes(): Router {
    const router = Router();

    attachControllers(
      router,
      [
        UserController,
        GainController,
      ],
    );
    return router;
  }
}

export default RoutesV1;
