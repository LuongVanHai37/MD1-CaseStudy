let players = new Player('Hải', 20000000)
showTotalMoneyPlayer();
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

function convertNumberToStr(money) {
    let changeValue;
    if ((money / 1000000) >= 1) {
        changeValue = (money / 1000000) + 'M';
    } else {
        changeValue = (money / 1000) + 'K';
    }
    return changeValue;

}

//nếu người chơi đã chọn cửa và đặt cược thì không cho chọn cửa nữa .
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
// lấy ra số tiền cược của người chơi và đổi về dạng số .Nếu số tiền của người chơi lớn hơn hoặc bằng số tiền đăt thì cho phép đặt . Nếu k thỏa mãn thì đưa ra cảnh báo

let numberInput = 0;
let moneyBetList = document.getElementsByClassName('setValue');
for (let i = 0; i < moneyBetList.length; i++) {
    moneyBetList[i].addEventListener('click', function () {
        if (players.money <= 0) {
            alert('Bạn không đủ số dư')
            return;
        }
        showMoneyBet(this.innerHTML)
    })
}
document.getElementById('setBet').addEventListener('click', function () {
    if (players.money <= 0) {
        alert('Bạn không đủ số dư')
        return;
    }
    players.bet += numberInput;
    players.money -= numberInput;
    numberInput = 0;
    let str = convertNumberToStr(players.bet)
    if (players.bet == 0) {
        return;
    }
    if (players.type == 'TÀI') {
        document.getElementById('totalTalent').innerHTML = str;
        document.getElementById('talent').innerHTML = '';
    } else {
        document.getElementById('totalFaint').innerHTML = str;
        document.getElementById('faint').innerHTML = '';
    }
    showTotalMoneyPlayer()
})
document.getElementById('play').addEventListener('click', lacXucXac)
let count = 0;

//lấy ra random 3 số bất kì tương ứng hiển thị các ảnh bằng số random. Nếu tổng 3 số lớn hơn 10 .kết quả trả về TÀI.Nếu bé hơn 10 kết quả trả về XỈU

function lacXucXac() {
    document.getElementById('result').innerHTML = '';
    let diceValue = [];
    diceValue[0] = Math.floor(Math.random() * 6) + 1;
    diceValue[1] = Math.floor(Math.random() * 6) + 1;
    diceValue[2] = Math.floor(Math.random() * 6) + 1;
    let images = document.getElementsByClassName('dice');
    for (let i = 0; i < images.length; i++) {
        images[i].src = 'image/' + diceValue[i] + '.png';

    }
    if (count < 100) {
        setTimeout(lacXucXac, 25)
        count++
    } else {
        let sum = 0;
        for (let i = 0; i < diceValue.length; i++) {
            sum += diceValue[i];
        }
        if (sum > 10) {
            if (players.type == 'TÀI') {
                players.money += players.bet * 2;
            }
            document.getElementById('result').innerHTML = 'TÀI';
        } else {
            if (players.type == 'XỈU') {
                players.money += players.bet * 2;
            }
            document.getElementById('result').innerHTML = 'XỈU';
        }
        players.bet = 0;
        players.type = '';

        count = 0;

        showTotalMoneyPlayer();
        resetValue();
    }

}

function showTotalMoneyPlayer() {

    let totalMoneyStr = convertNumberToStr(players.money);
    document.getElementById('totalMoneyPlayer').innerHTML = totalMoneyStr;
}

function resetValue() {
    let currentAmount = document.getElementsByClassName('currentAmount')
    for (let i = 0; i < currentAmount.length; i++) {
        currentAmount[i].innerHTML = '';
    }
    let styleType = document.getElementsByClassName('type')
    for (let i = 0; i < styleType.length; i++) {
        styleType[i].style.backgroundColor = 'greenyellow'
    }
}

document.getElementById('all').addEventListener('click', function () {
    if (players.type != 'TÀI' && players.type != 'XỈU') {
        alert('Bạn chưa chọn loại cược')
        return;
    }
    showMoneyBet(convertNumberToStr(players.money))
    numberInput = players.money;

})

function showMoneyBet(a) {
    if (players.type == 'TÀI') {
        document.getElementById('talent').innerHTML = a;
    } else if (players.type == 'XỈU') {
        document.getElementById('faint').innerHTML = a;
    } else {
        return;
    }
    numberInput = checkString(a)
}

document.getElementById('cancel').addEventListener('click', function () {
    players.money += players.bet
    players.bet = 0;
    resetValue();
    showTotalMoneyPlayer()
    document.getElementsByClassName('amountMoney').innerHTML = '';
})












