export class Quest {
    constructor(monster, isToKill, quantity, reward) {
        this.monster = monster; 
        this.isToKill = isToKill;
        this.quantity = quantity;
        this.progress = 0;
        this.reward = reward;
    }
}
