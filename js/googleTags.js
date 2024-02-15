var gtag = "GTM-K8NX89N";
var gtagAttr = document.getElementById("gtag_id");

(function (w, d, s, l, i) {
	w[l] = w[l] || [];
	w[l].push({"gtm.start": new Date().getTime(), event: "gtm.js"});
	var f = d.getElementsByTagName(s)[0],
		j = d.createElement(s),
		dl = l != "dataLayer" ? "&l=" + l : "";
	j.async = true;
	j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
	f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", gtag);

if (gtag && gtagAttr) {
	gtagAttr.setAttribute("src", `https://www.googletagmanager.com/ns.html?id=${gtag}`);
}