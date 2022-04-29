import { Router } from 'express';
import { attachControllers } from '@decorators/express';
import UserController from '../../app/controllers/UserController';
import GainController from '../../app/controllers/GainController';
import SpendController from '../../app/controllers/SpendController';

class RoutesV1 {
  static routes(): Router {
    const router = Router();

    attachControllers(
      router,
      [
        UserController,
        GainController,
        SpendController,
      ],
    );
    return router;
  }
}

export default RoutesV1;
