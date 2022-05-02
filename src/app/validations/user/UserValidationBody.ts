import Joi from 'joi';

import { NextFunction, Response, Request } from 'express';
import { Middleware } from '@decorators/express';
import { IAccount } from '../../Interfaces/Account/IAccount';
import { habilitado } from '../../utils/enum.util';

class ValidationBodyUser implements Middleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const validation: Joi.ObjectSchema<IAccount> = Joi.object({
        email: Joi.string()
          .trim()
          .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } })
          .required(),
        senha: Joi.string().min(6).trim().required(),
        habilitado: Joi.string()
          .required()
          .trim()
          .valid(...Object.values(habilitado)),
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

export default ValidationBodyUser;
