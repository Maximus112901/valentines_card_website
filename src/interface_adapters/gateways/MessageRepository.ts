import { IMessageRepository } from './IMessageRepository';
import { ValentineMessage } from '../../enterprise_business_rules/entities/ValentineMessage';
import { IMessageService } from '../../frameworks_and_drivers/services/IMessageService';

export class MessageRepository implements IMessageRepository {
  private service: IMessageService;

  constructor(service: IMessageService) {
    this.service = service;
  }

  save(message: ValentineMessage): ValentineMessage {
    return this.service.store(message);
  }
}
