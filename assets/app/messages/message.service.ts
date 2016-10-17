import {Message} from "./Message";
export class MessageService{
    messages: Message[] = [];

    addMessage(message: Message){
        this.messages.push(message);
        console.log('Rock and Roll');
    }

    getMessages(){
        return this.messages;
    }

    editMessage(message: Message){
        this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Dummy Author'); 
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }

}