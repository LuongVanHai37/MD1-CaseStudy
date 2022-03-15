// khởi tạo 1 class người chơi bao gồm Tên và Số tiền
class Player {
    constructor(name, money) {
        this.name = name;
        this.money = money;
        this.bet = 0 ;
        this.type = '';
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
    //check điều kiện đặt cược nếu số tiền của người chơi đủ so vs mức cược  thì cho phép đặt , k đủ yêu thì cầu người chơi nạp tiền vào !
    // addBet(bet) {
    //     if (this.money >= bet) {
    //         this.bet += bet;
    //         this.money -= bet;
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

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
}



