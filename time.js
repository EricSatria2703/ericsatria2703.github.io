var nextrace = new Date("Jan 12, 2023 20:00:00").getTime();
var x = setInterval(function() {
    var sekarang = new Date().getTime();
    var lama = nextrace - sekarang;

    var hari = Math.floor(lama/(1000*60*60*24));
    var jam = Math.floor(lama % (1000*60*60*24)/(1000*60*60));
    var menit = Math.floor(lama % (1000*60*60)/(1000*60));
    var detik = Math.floor(lama % (1000*60)/1000);

    document.getElementById("dyhrs").innerHTML = hari + " Hari " + " | " + jam + " Jam" + " | " + menit + " Menit " + " | "+ detik + " Detik";

    if(lama<0) {
        clearInterval(x);
        document.getElementById("dyhrs").innerHTML = "0 Hari " + "0 Jam " + "0 Menit " + "0 Detik " 
        document.getElementById("status").innerHTML = "Now Racing!!!";
    }

    
}, 1000);