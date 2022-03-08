class Player {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }

    setName(name) {
        if (typeof name == 'string') {
            this.name = name;
        }
    }

    getName() {
        return this.name;
    }

    setMoney(money) {
        if (typeof money == 'number') {
            this.money = money;
        }
    }

    getMoney() {
        return this.money;
    }

    addBet(bet) {
        if (typeof bet == 'number') {
            this.bet += bet;
        }
    }

    getBet() {
        return this.bet;
    }

    setType(type) {
        if (typeof type == 'string') {
            this.type = type;
        }
    }

    getType() {
        return this.type;
    }

    //nạp tiền
    loadMoney(money) {
        if (typeof money == 'number') {
            this.money += money;
        }
    }

    // rút tiền
    withDrawMoney(money) {
        this.money -= money;
    }
}



