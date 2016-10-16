export class Message{
    content: string;
    username: string;
    messageId: string;
    userId: string;

    constructor(content: string, messageId?: string, username?: string, userId?: string){
        this.content = content;
        this.userId = userId;
        this.messageId = messageId;
        this.username = username;
    }

}