class Player {
    constructor(name, money) {
        this.name = name;
        this.money = money;
        this.bet = 0 ;
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
    //check điều kiện đặt cược nếu số tiền của người chơi đủ so vs mức cược cho phép đặt , k đủ yêu cầu người chơi nạp tiền vào !

    addBet(bet) {
        if (this.money >= bet) {
            this.bet += bet;
            this.money -= bet;
            return true;
        } else {
            return false;
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



