const getNavUl = document.querySelector('nav ul')
const getMenu = document.querySelector('#sidebar')
const getInputForm = document.querySelectorAll('#contact main form input')
const getLabelForm = document.querySelectorAll('#contact main form label')

getMenu.addEventListener('click', (e) => {
    getMenu.classList.toggle('tea')
    getNavUl.classList.toggle('slide')
    e.preventDefault()
})
document.addEventListener('click', function (e) {
    if (!getMenu.contains(e.target) && !getNavUl.contains(e.target)) {
        getNavUl.classList.remove('slide')
        getMenu.classList.remove('tea')
    }
})
for (let i = 0; i < getInputForm.length; i++) {
    getInputForm[i].addEventListener('focus',function (e) {
        getInputForm[i].classList.add('tea')
        getLabelForm[i].classList.add('tea')
    })
    getInputForm[i].addEventListener('blur',function (e) {
        getInputForm[i].classList.remove('tea')
        getLabelForm[i].classList.remove('tea')
    })
}