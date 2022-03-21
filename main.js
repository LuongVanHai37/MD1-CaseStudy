let listMusic = ['image/music.mp3', 'image/music2.mp3', 'image/music3.mp3'];
let music = document.getElementById('music')
document.getElementById('playMusic').onclick = function () {
    music.play()
}
music.onended = function () {
    let x = Math.floor(Math.random() * 3)
    music.src = listMusic[x]
    music.play()
}
let players = new Player('Hải', 20000000)
showTotalMoneyPlayer();
// chuyển chuỗi K và M thành số để tính toán

function convertStrToNumber(money = '') {
    let result = '';

    let str = money.charAt(money.length - 1) // lấy kí tự cuối cùng là K và M trong chuỗi bằng độ dài của chuỗi - 1.
    if (str == 'K') {
        result = money.replace('K', '000')
    } else {
        result = money.replace('M', '000000')
    }
    return parseInt(result);
}

// chuyển số  đã đổi ngược lại thành chuỗi K ,M để in ra màn hình

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
let typesBet = document.getElementsByClassName('type'); // loại cược
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
        this.style.backgroundColor = 'red'; // khi chọn loại cược thì đổi sang màu khác
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
    players.bet += numberInput; // khi nhấn các mức cược thì cộng tiền vào ô tổng tiền
    players.money -= numberInput; // trừ tiền tương ứng của người chơi
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

// hàm hiển thị tổng tiền của người chơi
function showTotalMoneyPlayer() {

    let totalMoneyStr = convertNumberToStr(players.money);
    document.getElementById('totalMoneyPlayer').innerHTML = totalMoneyStr;
}

// hàm reset các giá trị loại cược tiền cược về ban trước khi chọn
function resetValue() {
    let currentAmount = document.getElementsByClassName('currentAmount') // khi hủy thì chuyển các giá trị tiền cược về ''
    for (let i = 0; i < currentAmount.length; i++) {
        currentAmount[i].innerHTML = '';
    }
    let styleType = document.getElementsByClassName('type') // chuyển màu về mặc định khi chưa cược
    for (let i = 0; i < styleType.length; i++) {
        styleType[i].style.backgroundColor = 'greenyellow'
    }
    let cancels = document.getElementsByClassName('betAmount') // số tiền cược hiển thị về ''
    for (let i = 0; i < cancels.length; i++) {
        cancels[i].innerHTML = '';
    }
}

// nếu click vào nút all in thì cộng toàn bộ số tiền hiện có của người chơi vào số tiền cược .chưa chọn loại cược thì đưa ra cảnh báo
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
    numberInput = convertStrToNumber(a)
}

// sự kiện hủy cược
document.getElementById('cancel').addEventListener('click', function () {
    players.money += players.bet
    players.bet = 0;
    players.type = '';
    resetValue();
    showTotalMoneyPlayer()

})












