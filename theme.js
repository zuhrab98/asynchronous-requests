const toggle =  document.getElementById('toggle')
const button =  document.getElementById('button')


toggle.addEventListener('click', () => {
    button.classList.toggle('active')
    toggle.classList.toggle('light')

    isStorage()
})

const isStorage = () => {
    if (!button.classList.contains('active')) {
        localStorage.removeItem('theme')
    } else {
        localStorage.setItem('theme', 'is-dark')
    }
}


if (localStorage.getItem('theme')) {
    button.classList.add('active')
    toggle.classList.add('light')
}