const getNavUl = document.querySelector('nav ul')
const getMenu = document.querySelector('#sidebar')
const getInputForm = document.querySelectorAll('#contact main form input')
const getLabelForm = document.querySelectorAll('#contact main form label')
const getSearchField = document.querySelector('.feature .search-container')
const getSearch = document.querySelector('nav .feature #search')
const getSearchInput = document.querySelector('nav .feature div #search-field')
const getShopButton = document.querySelector('nav .feature #shop')
const getShopCart = document.querySelector('nav .feature .shop-container')
const getOverlayModalBox = document.querySelector('.overlay-modal-box')
const getVisibilityButton = document.querySelectorAll('.card-product .button-card a:last-child')
const getDeleteButton = document.querySelectorAll('.shop-container .material-symbols-outlined')



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
    if (!getShopButton.contains(e.target) && !getShopCart.contains(e.target)) {
        getShopCart.classList.remove('scale')
        getShopButton.classList.remove('tea')
    }
    if (!getSearch.contains(e.target) && !getSearchField.contains(e.target)) {
        setTimeout(function () {
            getSearch.classList.remove('hide')
        },450)
        setTimeout(function () {
            getSearchField.classList.remove('search-transform-y')
        },450)
        getSearchInput.classList.remove('search-transform-x')
    }
})
getSearch.addEventListener('click', (e) => {
    getSearch.classList.toggle('hide')
    getSearchField.classList.toggle('search-transform-y')
    setTimeout(function () {
        getSearchInput.classList.toggle('search-transform-x')
    },450)
    getSearchInput.focus()
    e.preventDefault()
})
getShopButton.addEventListener('click', (e) => {
    getShopButton.classList.toggle('tea')
    getShopCart.classList.toggle('scale')
    e.preventDefault()
})
getDeleteButton.forEach((e) => {
    e.addEventListener('click', (e) => {
        e.target.parentElement.style.opacity = 0
        setTimeout(() => {
            e.target.parentElement.style.display = 'none'
        }, 500)
    })
})
// visibility
getVisibilityButton.forEach(function (e) {
    e.addEventListener('click', (e) => {
        getOverlayModalBox.style.display = 'flex'
        e.preventDefault()
    })
})
document.querySelector('.modal-box .close').addEventListener('click', (e) => {
    getOverlayModalBox.style.display = 'none'
    e.preventDefault()
})
window.addEventListener('click', (e) => {
    if (e.target === getOverlayModalBox) {
        getOverlayModalBox.style.display = 'none'
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
