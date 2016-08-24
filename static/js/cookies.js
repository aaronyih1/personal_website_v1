    var visit=getCookie("COOKIE1");
    console.log(getCookie("COOKIE1"));
    if (!visit.length){
        // firstTransition();
    }
     else{
        window.location.replace("index.html");

    //     alert("wtf");
    //     secondTransition();
        
     }
    var expire=new Date();
    expire=new Date(expire.getTime()+7776000000);
    document.cookie="COOKIE1=here; expires="+expire;

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
