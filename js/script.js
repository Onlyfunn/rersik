const variants = document.querySelectorAll('.body__variant');
for (let variant of variants) {
    if (variant.childNodes[1].checked == true) {
        variant.classList.add('_active');
    }
    variant.addEventListener('click', function (e) {
        var children = variant.parentNode.children;
        for (var child of children) {
            child.classList.remove('_active');
            variant.childNodes[1].checked = false;
        }
        if (variant.childNodes[1].checked == true) {
            variant.childNodes[1].checked = false;
        } else {
            variant.childNodes[1].checked = true;
            variant.classList.add('_active');
        }
    })
}
let right = [4, 1, 3, 4, 1];
const result = document.querySelector('.result');
const button = document.querySelector('.button')
const parents = document.querySelectorAll('.body__radiobuttons');
button.addEventListener('click', function (event) {
    let answers = [];
    for (let i = 0; i < parents.length; i++) {
        for (let child of parents[i].children) {
            if (child.childNodes[1].checked) {
                answers.push(child.childNodes[1].value);
            }
        }
    }
    if (answers.length == right.length) {
        let count = 0;
        for (let i = 0; i < parents.length; i++) {
            if (right[i] == answers[i]) {
                count++;
            }
        }

        let percent = Math.floor((count / parents.length) * 100);
        result.innerHTML = `Вы ответили правильно на ${percent}%`;
        for (let i = 0; i < right.length; i++) {
            parents[i].children[right[i] - 1].classList.add('_green');

        }
    } else {
        result.innerHTML = `Вы ответили не на все впоросы!`;
    }
    event.preventDefault();
})