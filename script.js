const hamburgerMenu = document.querySelector('.hamburger-menu')
const closeIcon = document.querySelector('.close-icon')
const headerNav = document.querySelector('.header-nav')

function displayElement(...elements){
    elements.forEach(({element, displayValue})=>{
        element.style.display=displayValue
    })
}

function handleResize(){
    if (window.innerWidth<769) {
        displayElement({element: headerNav, displayValue: 'none'}, {element: hamburgerMenu, displayValue: 'block'},
            {element: closeIcon, displayValue: 'none'}
        )
    } else {
        displayElement({element: headerNav, displayValue: 'block'}, {element: hamburgerMenu, displayValue: 'none'},
            {element: closeIcon, displayValue: 'none'}
        )
    }
}
handleResize()

window.addEventListener('resize', handleResize)

let doAnimation = true

hamburgerMenu.addEventListener('click', ()=>{
    if (doAnimation) {
        doAnimation=false
        displayElement({element: headerNav, displayValue: 'block'}, {element: hamburgerMenu, displayValue: 'none'},
            {element: closeIcon, displayValue: 'block'}
        )
        closeIcon.classList.add('animate')
    }
    setTimeout(()=>{
        doAnimation=true
    }, 550)
})

closeIcon.addEventListener('click', ()=>{
    if (doAnimation) {
        doAnimation=false
        displayElement({element: headerNav, displayValue: 'none'}, {element: hamburgerMenu, displayValue: 'block'},
            {element: closeIcon, displayValue: 'none'}
        )
        closeIcon.classList.remove('animate')
    }
    setTimeout(()=>{
        doAnimation=true
    },550)
})