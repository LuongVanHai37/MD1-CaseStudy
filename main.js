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
    let changeValue ;
    if (money / 1000000 >= 1) {
        changeValue = (money/1000000) + 'M';
    } else {
        changeValue = (money/1000000) + 'K';
    }
    return changeValue;

}
