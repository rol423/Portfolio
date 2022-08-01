function pg_start() {
    alert(1);
    let i;
    for (i = 0; (anch = d.getElementsByTagName("a")[i]); i++) {
        if (anch_h.indexOf("#") !== -1)  {
            anch.onclick =	function() {
                var elem_id =	this.getAttribute("href").split("#c")[1];
                if (d.getElementById("c" + elem_id)) {
                    scr_to_lnk(d.getElementById("c" + elem_id));
                }
                return false;
         };
        }
    }
}


const d =	document;
const w =	window;


var DOMContentLoaded =	function() {
	d.removeEventListener("DOMContentLoaded", DOMContentLoaded);
	w.removeEventListener("load", pg_start);
	pg_start();
};
d.addEventListener("DOMContentLoaded", DOMContentLoaded);
w.addEventListener("load", pg_start);