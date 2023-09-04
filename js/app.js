
// переключение видимости дополнительного текста
document.querySelector('.rules').onclick = function () {
    document.querySelector('.containerText').classList.toggle('active');
}


// маска для ввода телефона
let selector = document.getElementById("Phone");
let im = new Inputmask("+7 (999) 999-9999");
im.mask(selector);



// проверка заполненности полей формы
function validate_form() {
    valid = true
    let chatinput = document.getElementById("inputName").value;
    let phoneinput = document.getElementById("Phone").value;
    let check = document.getElementById("checkbox");
    let radio1input = document.getElementById("radio1");
    let radio2input = document.getElementById("radio2");
    
    if (check.checked == false) {
        document.querySelector('.textCheckbox').classList.add('voidInputRadio');
        valid = false;
        return valid

    } else {
        document.querySelector('.textCheckbox').classList.remove('voidInputRadio');
    }
    if (chatinput == "" || chatinput == "Имя" || chatinput == null) {
        document.querySelector('.inputName').classList.add('voidInput');
        valid = false;
    } else {
        document.querySelector('.inputName').classList.remove('voidInput');

    }
    if (phoneinput == "" || phoneinput == null) {
        document.querySelector('.inputPhone').classList.add('voidInput');
        valid = false;
    } else {
        document.querySelector('.inputPhone').classList.remove('voidInput');

    }
    if (radio1input.checked == false && radio2input.checked == false) {
        const cols = document.querySelectorAll('.textLabel');
        cols.forEach(elem => {
            elem.classList.add('voidInputRadio');
        })
        valid = false;
    } else {
        const cols = document.querySelectorAll('.textLabel');
        cols.forEach(elem => {
            elem.classList.remove('voidInputRadio');
        })

    }
    return valid;
}



// отправка на почту
$('.inputSubmit').click(function (e) {
    if (validate_form()) {
        e.preventDefault();
        let name = document.getElementById("inputName").value;
        let phone = document.getElementById("Phone").value;
        let radio = document.querySelector('input[name="radio"]:checked').value;
        
        $.ajax({
            type: "POST",
            url: 'email.php',
            data: { name: name, phone: phone, radio: radio },
            success: function () {
                document.querySelector('.inputSubmit').classList.add('inputSubmitSuccess');
                document.getElementById("submit").value = 'Успешно'
            }
        });
    }
});

