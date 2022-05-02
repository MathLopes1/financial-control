import { getRepository } from 'typeorm';

import Conflict from '../../Errors/errorsHttp/Conflict';
import BadRequest from '../../Errors/errorsHttp/BadRequest';

import validateCpf from './isValidCpf.util';
import isOver18 from './isMajority.util';

import AccountModel from '../../entities/AccountModel';

class IsConflict {
  static async conflictEmail(email: string): Promise<void> {
    const repoAccount = getRepository(AccountModel);

    const getEmail = await repoAccount.find({ email });
    if (getEmail.length > 0) {
      throw new Conflict('email already exists');
    }
  }

  static async conflictCpf(cpf: string): Promise<void> {
    const repoAccount = getRepository(AccountModel);

    const getCpf = await repoAccount.find({ cpf });
    if (getCpf.length > 0) {
      throw new Conflict('cpf already exists');
    }
  }

  static async validCpf(cpf: string): Promise<void> {
    if (validateCpf(cpf) === false) {
      throw new BadRequest(`cpf '${cpf}' is invalid`);
    }
  }

  static async isMajority(birthday: string): Promise<void> {
    const GET_DATE = birthday;
    const DATE = GET_DATE.substring(5, 10);
    if (isOver18(new Date(DATE)) === false) {
      throw new BadRequest('You must be 18 years old to create an account');
    }
  }
}

export default IsConflict;
