/* ASIDE NAVIGATION */
let asideNav = document.querySelector('.aside__nav')

document.querySelector('.header__burger-menu').addEventListener('click', (event)=>{
    /* Для прекращения всплытия */
    event.stopPropagation()
    if(!asideNav.classList.contains('active')) {
        asideNav.classList.add('active')
    }
});
asideNav.addEventListener('click', (event)=>{
    /* Для прекращения всплытия */
    event.stopPropagation()
})
document.addEventListener('click', ()=>{
    if(asideNav.classList.contains('active')) {
        asideNav.classList.remove('active')
    }
})


/* ACCORDION */
let asideTogler = document.querySelectorAll('.aside__main-toggled')
asideTogler.forEach(el => {
    el.addEventListener('click', ()=>{
        if(el.classList.contains('active')) {
            el.classList.remove('active')
            el.style.marginBottom = '0px'
        } else {
            let sublistHeight = el.parentNode.querySelector('.aside__sublist').clientHeight;
            el.style.marginBottom = sublistHeight - 1 + 'px'
            el.classList.add('active')
        }
    })
});


/* COPYRIGHT MOBILE */
let copyBtn = document.querySelector('.copy__c-arrow')
let copyNav = document.querySelector('.copy__nav')
copyBtn.addEventListener('click', ()=>{
    if(copyBtn.classList.contains('active')) {
        copyNav.classList.remove('active')
        copyBtn.classList.remove('active')
    } else {
        copyNav.classList.add('active')
        copyBtn.classList.add('active')
    }
})

