import { ValentineMessage } from '../../enterprise_business_rules/entities/ValentineMessage';

export interface IMessageRepository {
  save(message: ValentineMessage): ValentineMessage;
}
