document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('navbar');
    const bar = document.getElementById('bar');
    console.log('heheh');
    if (bar) {
        console.log('heheh');
        bar.addEventListener('click', () => {
            console.log('heheh');
            nav.classList.toggle('active');
            console.log('heheh');
            console.log(nav);
        })
    }


    const close = document.getElementById('close')
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
});