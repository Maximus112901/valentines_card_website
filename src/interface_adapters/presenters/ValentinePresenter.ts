import { ValentineMessage } from '../../enterprise_business_rules/entities/ValentineMessage';

export interface PresentedMessage {
  content: string;
  createdAt: string;
}

export class ValentinePresenter {
  present(message: ValentineMessage): PresentedMessage {
    return {
      content: message.content,
      createdAt: message.createdAt.toLocaleString(),
    };
  }
}
