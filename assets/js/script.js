let navLinks = document.querySelectorAll('a.inner-link');

navLinks.forEach((item) => {
    item.addEventListener('click', function(){
        console.log(item)
        document.querySelector('nav ul li a.active').classList.remove('active')
        document.querySelector(`nav ul li a[href='${item.getAttribute('href')}']`).classList.add('active')
        document.querySelector('main > section.active').classList.remove('active')
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active')
    })
    
})

document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function(){
    document.querySelector('#sidebar').classList.toggle('open')
})