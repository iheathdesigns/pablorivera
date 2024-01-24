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

const shuffleInstance = new Shuffle(document.querySelector('#work .work-items'), {
    itemSelector: '.item'
})

const filterButtons = document.querySelectorAll('#work .filters button')

filterButtons.forEach((item) => {
    item.addEventListener('click', workFilter)
})

function workFilter() {
    const clickedButton = event.currentTarget;
    const clickedButtonGroup = clickedButton.getAttribute('data-group');
    const activeButton = document.querySelector('#work .filters button.active');

    activeButton.classList.remove('active');
    clickedButton.classList.add('active');

    shuffleInstance.filter(clickedButtonGroup)
}

var workModal = new bootstrap.Modal(document.getElementById('workModal'))

const workElements = document.querySelectorAll("#work .work-items .wrap");

workElements.forEach((item) => {
    item.addEventListener('click', function(){
        workModal.show();
    })
})

var workModalElement = document.getElementById('workModal')
workModalElement.addEventListener('show.bs.modal', function (event) {
    document.getElementById('work').classList.add('blur');
    document.getElementById('sidebar').classList.add('blur');
})

workModalElement.addEventListener('hide.bs.modal', function (event) {
    document.getElementById('work').classList.remove('blur');
    document.getElementById('sidebar').classList.remove('blur');
})