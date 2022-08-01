function pg_start() {

    let i, anch_h;
    for (i = 0; (anch = d.getElementsByTagName("a")[i]); i++) {
        anch_h =	(anch.getAttribute("href")) ?	anch.getAttribute("href") :	"";
        if (anch_h.indexOf("#") !== -1)  {
            anch.onclick =	function() {
                var elem_id =	this.getAttribute("href").split("#")[1];
                if (d.getElementById(elem_id)) {
                    scr_to_lnk(d.getElementById(elem_id));
                    return false;
                }
            };
        }
    }
}


function absLeft(el) {
	return (el.offsetParent) ?	el.offsetLeft + absLeft(el.offsetParent) :	el.offsetLeft;
}
function absTop(el) {
	return (el.offsetParent) ?	el.offsetTop + absTop(el.offsetParent) :	el.offsetTop;
}
function scrt() {
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function add_cls(elem, cls) {
	if (typeof elem.className === "undefined") {
		elem.className =	" " + cls;
	} else if (chk_cls(elem, cls) === -1) {
		elem.className+=	" " + cls;
	}
}
function rmv_cls(elem, cls) {
	if (typeof elem.className !== "undefined") {
		if (elem.className === cls)	{
			elem.className =	"";
		} else {
			elem.className =	elem.className.replace(new RegExp(" " + cls, "g"), "");
		}
	}
}
function chk_cls(elem, cls) {
	return (typeof elem.className !== "undefined") ?	elem.className.indexOf(cls) :	-1;	
}


function scr_to_lnk(elem) {
	let anch, i;
	let switched =	null;
	scrollstep(-scrt() + absTop(elem));
	for (i = 0; (anch = d.getElementsByTagName("a")[i]); i++) {
		if ((elem.id) && (elem.id.indexOf("section") !== -1) && (anch.href.indexOf(elem.id) !== -1)) {
			add_cls(anch, "act");
			switched =	anch;
		}
	}
	if (switched !== null) {
		for (i = 0; (anch = d.getElementsByTagName("a")[i]); i++) {
			if (anch !== switched) {
				rmv_cls(anch, "act");
			}
		}
	}
}

let scrstp_timeout;
let scrstp_dist =   0;
function scrollstep(dist) {
	let n =	Math.floor(dist / 20 * (1 - Math.abs(scrstp_dist / dist - 0.5)));
	//console.log((scrstp_dist + n) + " " + dist);
	if (Math.abs(scrstp_dist + n) < Math.abs(dist)) {
        //console.log("a " + n);
		scrstp_dist+=	n;
		w.scrollBy(0, n);
		scrstp_timeout =	setTimeout("scrollstep(" + dist + ")", 100 / 4);
	} else {
		if (scrt() > 0) {
			w.scrollBy(0, dist - scrstp_dist);
		}
		scrstp_dist =	0;
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