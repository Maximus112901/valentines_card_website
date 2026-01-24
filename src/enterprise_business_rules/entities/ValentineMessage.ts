export class ValentineMessage {
  content: string;
  createdAt: Date;

  constructor(content: string) {
    if (!content || content.trim() === '') {
      throw new Error('Message content cannot be empty');
    }
    this.content = content;
    this.createdAt = new Date();
  }
}
