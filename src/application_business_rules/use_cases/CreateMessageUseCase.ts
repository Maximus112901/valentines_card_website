import { ValentineMessage } from '../../enterprise_business_rules/entities/ValentineMessage';
import type { IMessageRepository } from '../../interface_adapters/gateways/IMessageRepository';

export class CreateMessageUseCase {
  private messageRepository: IMessageRepository;

  constructor(messageRepository: IMessageRepository) {
    this.messageRepository = messageRepository;
  }

  execute(content: string): ValentineMessage {
    const message = new ValentineMessage(content);
    return this.messageRepository.save(message);
  }
}
