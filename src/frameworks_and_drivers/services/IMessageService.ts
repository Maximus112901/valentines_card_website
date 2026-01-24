import { ValentineMessage } from '../../enterprise_business_rules/entities/ValentineMessage';

export interface IMessageService {
  store(message: ValentineMessage): ValentineMessage;
  getAll(): ValentineMessage[];
}
