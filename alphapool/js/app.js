function showNavigation() {
    var nav_items = document.getElementsByClassName('header__nav__link');
    var header_container =  document.getElementById('header__container');
    var menu_button = document.getElementById('menu__button');

    for (var i = 0; i < nav_items.length; ++i) {
        if(nav_items[i].className === "header__nav__link"){
            nav_items[i].className += " responsive";
        }else{
            nav_items[i].className = "header__nav__link";
        }
    }


    if(header_container.className === "header__container"){
        header_container.className += " responsive2";
        menu_button.className = "fa fa-close fa-lg";
    }else{
        header_container.className = "header__container";
        menu_button.className = "fa fa-bars fa-lg";
    }



}