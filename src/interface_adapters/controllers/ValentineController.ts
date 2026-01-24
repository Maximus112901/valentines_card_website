import { CreateMessageUseCase } from '../../application_business_rules/use_cases/CreateMessageUseCase';
import { ValentineMessage } from '../../enterprise_business_rules/entities/ValentineMessage';

export class ValentineController {
  private createMessageUseCase: CreateMessageUseCase;

  constructor(createMessageUseCase: CreateMessageUseCase) {
    this.createMessageUseCase = createMessageUseCase;
  }

  createMessage(content: string): ValentineMessage {
    try {
      return this.createMessageUseCase.execute(content);
    } catch (error) {
      console.error('Failed to create message:', error);
      throw error;
    }
  }
}
