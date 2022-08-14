AOS.init({ disable: 'mobile' });

var typed = new Typed('#typed', {
    strings: ['Penjaszlese', 'Penjaselese'],
    backSpeed: 55,
    typeSpeed: 55,
    backDelay: 25
});



var headHeight = $('.header-container').height();
var dropLinkHeight = $('.dropdown-links').height();
var dropHeight = ((dropLinkHeight + 35) * 3);

$('.dropdown-container').css({
    'height': dropHeight + 'px',
    'top': '-' + dropHeight + 'px'
});

function mobileNavbar(x) {
    if (navbarOpen) {
        x.classList.remove('fa-times');
        x.classList.add('fa-bars');
        $('.dropdown-container').css({
            'top': '-' + dropHeight + 'px'
        });
         navbarOpen = false;
    } else {
        x.classList.remove('fa-bars');
        x.classList.add('fa-times');
        $('.dropdown-container').css({
            'top': '40px'
        });
        navbarOpen = true;
    }
}

function linkClick() {
    document.getElementById('menu-icon').classList.remove('fa-times');
    document.getElementById('menu-icon').classList.add('fa-bars');
    $('.dropdown-container').css({
        'top': '-' + dropHeight + 'px'
    }); 
}

function refreshPage() {
    location.replace('index.html');
}

function githubRedir() {
    window.open('https://github.com/Penjaselese/');
}

function instagramRedir() {
    window.open('https://instagram.com/a.izza_r/');
}

function tiktokRedir() {
    window.open('https://www.tiktok.com/@penjasTeam/');
}

function discordRedir() {
    window.open('');
}