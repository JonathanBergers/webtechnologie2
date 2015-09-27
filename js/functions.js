function toggle_menu(id) {
    "use strict";
    var e = document.getElementById(id);
    if (e.style.visibility === 'visible') {
        e.style.visibility = 'hidden';
        e.style.height = '0px';
    } else {
        e.style.visibility = 'visible';
        e.style.height = 'auto';
    }

}