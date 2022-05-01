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
        data_nascimento: Joi.date().format('DD/MM/YYYY'),
        email: Joi.string()
          .trim()
          .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }),
        senha: Joi.string().min(6).trim(),
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
