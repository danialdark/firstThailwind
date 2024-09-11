var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});




function addProduct(element) {
    const count = element.nextElementSibling.innerText
    element.nextElementSibling.innerText = +count + 1
}



function minusProduct(element) {
    const count = element.previousElementSibling.innerText
    if (count > 1) {

        element.previousElementSibling.innerText = +count - 1
    }
}


// mobile

var themeToggleDarkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
var themeToggleLightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');
var themeText = document.getElementById('theme-text');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIconMobile.classList.remove('hidden');
    themeText.innerText = "تم روشن"
} else {
    themeToggleDarkIconMobile.classList.remove('hidden');
    themeText.innerText = "تم تاریک"

}

var themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');

themeToggleBtnMobile.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIconMobile.classList.toggle('hidden');
    themeToggleLightIconMobile.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            themeText.innerText = "تم روشن"

        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            themeText.innerText = "تم تاریک"

        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            themeText.innerText = "تم روشن"
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            themeText.innerText = "تم تاریک"
        }
    }

});







var sidebar = document.getElementById("sidebar")

function closeSideBar() {
    sidebar.classList.remove("right-0")
    sidebar.classList.add("right-[-100%]")
    document.getElementById("overlayBar").classList.add("hidden")
}


function openSideBar() {
    sidebar.classList.add("right-0")
    sidebar.classList.remove("right-[-100%]")
    document.getElementById("overlayBar").classList.remove("hidden")
}

