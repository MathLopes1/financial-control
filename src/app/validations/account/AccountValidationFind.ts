import JoiDate from '@joi/date';
import JOI, { ObjectSchema } from 'joi';

import { NextFunction, Response, Request } from 'express';
import { Middleware } from '@decorators/express';
import { IAccount } from '../../Interfaces/Account/IAccount';

const Joi = JOI.extend(JoiDate) as typeof JOI;

class ValidationFindAccount implements Middleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const validation: ObjectSchema<IAccount> = Joi.object({
        nome: Joi.string().min(10).max(40).trim(),
        cpf: Joi.string()
          .min(11)
          .max(11)
          .trim(),
        usuario_id: Joi.string()
          .min(36)
          .max(36)
          .trim()
          .pattern(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i),
        ganhos_id: Joi.string()
          .min(36)
          .max(36)
          .trim()
          .pattern(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i),
        gastos_id: Joi.string()
          .min(36)
          .max(36)
          .trim()
          .pattern(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i),
      });
      const { error } = await validation.validate(req.body, { abortEarly: true });
      if (error) throw error;

      return next();
    } catch (error) {
      return res.status(400).json({
        details: error.details.map((detail) => ({
          name: detail.path[0],
          description: detail.message,
        })),
      });
    }
  }
}

export default ValidationFindAccount;
