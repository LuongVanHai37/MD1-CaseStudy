let players = new Player('Hải', 2000000)
let money = document.getElementsByClassName('setValue');
for (let i = 0; i < money.length; i++) {
    money[i].addEventListener('click', function () {
        let number = checkString(money[i].innerHTML);
    })
}

// chuyển chuỗi thành số

function checkString(money = '') {
    let result = '';

    let str = money.charAt(money.length - 1)
    if (str == 'K') {
        result = money.replace('K', '000')
    } else {
        result = money.replace('M', '000000')
    }
    return parseInt(result);
}

// chuyển số thành chuỗi

function checkNumber(money) {
    let changeValue;
    if ((money / 1000000) >= 1) {
        changeValue = (money / 1000000) + 'M';
    } else {
        changeValue = (money / 1000) + 'K';
    }
    return changeValue;

}

let typesBet = document.getElementsByClassName('type');
for (let i = 0; i < typesBet.length; i++) {
    typesBet[i].addEventListener('click', function () {
        let totalTalent = document.getElementById('totalTalent').innerHTML;
        let totalFaint = document.getElementById('totalFaint').innerHTML;
        if (typesBet[i].innerHTML == 'TÀI') {
            if (totalFaint != '') {
                return alert('Bạn đã đặt cược')
            }
        } else {
            if (totalTalent != '') {
                return alert('Bạn đã đặt cược')
            }
        }

        players.type = this.innerHTML
        for (let j = 0; j < typesBet.length; j++) {
            typesBet[j].style.backgroundColor = 'greenyellow';
        }
        this.style.backgroundColor = 'blue';
    })
}
// lấy ra số tiền cược của người chơi và đổi về dạng số

let numberInput = 0;
let moneyBetList = document.getElementsByClassName('setValue');
for (let i = 0; i < moneyBetList.length; i++) {
    moneyBetList[i].addEventListener('click', function () {
        numberInput = checkString(this.innerHTML)
        if (players.type == 'TÀI') {
            document.getElementById('talent').innerHTML = this.innerHTML;
        } else {
            document.getElementById('faint').innerHTML = this.innerHTML;
        }
    })
}
document.getElementById('setBet').addEventListener('click', function () {
    players.bet += numberInput;
    numberInput = 0;
    let str = checkNumber(players.bet)
    if (players.type == 'TÀI') {
        document.getElementById('totalTalent').innerHTML = str;
        document.getElementById('talent').innerHTML = '';
    } else {
        document.getElementById('totalFaint').innerHTML = str;
        document.getElementById('faint').innerHTML = '';
    }

})









