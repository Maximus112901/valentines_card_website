import type { IMessageService } from './IMessageService';
import { ValentineMessage } from '../../enterprise_business_rules/entities/ValentineMessage';

export class InMemoryMessageService implements IMessageService {
  private messages: ValentineMessage[] = [];

  store(message: ValentineMessage): ValentineMessage {
    this.messages.push(message);
    return message;
  }

  getAll(): ValentineMessage[] {
    return this.messages;
  }
}
