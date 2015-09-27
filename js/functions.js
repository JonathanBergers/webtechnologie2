//     ____.                                       .__        __   
//    |    |____ ___  _______    ______ ___________|__|______/  |_ 
//    |    \__  \\  \/ /\__  \  /  ___// ___\_  __ \  \____ \   __\
///\__|    |/ __ \\   /  / __ \_\___ \\  \___|  | \/  |  |_> >  |  
//\________(____  /\_/  (____  /____  >\___  >__|  |__|   __/|__|  
//              \/           \/     \/     \/         |__|        
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