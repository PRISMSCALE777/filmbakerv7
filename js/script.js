var template_id = "template_172yii7";
var serviceID = "service_6hsgyyl";

[...document.querySelectorAll(".form-2")].forEach(function (item) {
	item.addEventListener("submit", function (event) {
		event.preventDefault();

		// these IDs from the previous steps
		// generate a five digit number for the contact_number variable

		emailjs.sendForm(serviceID, template_id, this).then(
			function () {
				console.log("SUCCESS!");
				alert("Thank You! We'll share the quote across.");
			},
			function (error) {
				console.log("FAILED...", error);
				alert("Please enter a valid email");
			}
		);
	});
});

// window.onload = function () {
// 	document.getElementById("footer-form").addEventListener("submit", function (event) {
// 		event.preventDefault();

// 		// these IDs from the previous steps
// 		// generate a five digit number for the contact_number variable

// 		emailjs.sendForm(serviceID, template_id, this).then(
// 			function () {
// 				console.log("SUCCESS!");
// 				alert("Thank You! We'll get in touch.");
// 			},
// 			function (error) {
// 				console.log("FAILED...", error);
// 			}
// 		);
// 	});
// };

// window.document.getElementById("email-access").innerHTML = "hi@gmail.com";

var x = document.getElementsByClassName("email-change");
var y = document.getElementsByClassName("number-change");

// CHANGE EMAIL ID (content) for all class name of email-change
for (let i = 0; i < x.length; i++) {
	x[i].innerHTML = "enquiries@filmbaker.com";
}

for (let i = 0; i < y.length; i++) {
	y[i].innerHTML = "+91-9611145064";
}

// ---------------------------------------------------------
// SET HREF ATTRIBUTE
function updateLink(name, link) {
	for (let i = 0; i < name.length; i++) {
		name[i].setAttribute("href", link);
		name[i].setAttribute("style", "{cursor: pointer}");
	}
}

// NAV LINKS
var linkUpdateIndex = document.getElementsByClassName("link-index");
var linkUpdateAbout = document.getElementsByClassName("link-about");
var linkUpdateServices = document.getElementsByClassName("link-services");
var linkUpdatePortfolio = document.getElementsByClassName("link-portfolio");
var linkUpdateProcess = document.getElementsByClassName("link-process");
var linkUpdateFeatures = document.getElementsByClassName("link-features");

// AUTH LINKS
var linkUpdateSignUp = document.getElementsByClassName("link-sign_up");
var linkUpdateLogin = document.getElementsByClassName("link-login");

// CONTACT FORM LINK
var linkUpdateContactForm = document.getElementsByClassName("link-contact_form");

// HOME MUMBAI
var linkUpdateMumbai = document.getElementsByClassName("link-mumbai");

// PORTFOLIO LINKS
var linkUpdatePortfolioExplainer = document.getElementsByClassName("link-portfolio_explainer");
var linkUpdatePortfolioTestimonial = document.getElementsByClassName("link-portfolio_testimonial");
var linkUpdatePortfolioTypography = document.getElementsByClassName("link-portfolio_typography");
var linkUpdatePortfolioAnimation = document.getElementsByClassName("link-portfolio_animation");
var linkUpdatePortfolioEvents = document.getElementsByClassName("link-portfolio_events");
var linkUpdatePortfolioCorporate = document.getElementsByClassName("link-portfolio_corporate");
var linkUpdatePortfolioMotion = document.getElementsByClassName("link-portfolio_motion");
var linkUpdatePortfolioDigital = document.getElementsByClassName("link-portfolio_digital");

// for (let i = 0; i < linkUpdateIndex.length; i++) {
// 	linkUpdateIndex[i].setAttribute("href", "index.html");
// }

updateLink(linkUpdateIndex, "index.html");
updateLink(linkUpdateAbout, "about.html");
updateLink(linkUpdateServices, "services.html");
updateLink(linkUpdatePortfolio, "portfolio.html");
updateLink(linkUpdateProcess, "process.html");
updateLink(linkUpdateFeatures, "features.html");

// AUTH LINKS
updateLink(linkUpdateSignUp, "sign-up.html");
updateLink(linkUpdateLogin, "log-in.html");

// CONTACT FORM LINK
updateLink(linkUpdateContactForm, "contact-form.html");

//HOME MUMBAI
updateLink(linkUpdateMumbai, "home-mumbai.html");

// PORTFOLIO LINKS
updateLink(linkUpdatePortfolioExplainer, "portfolio-explainer-videos.html");
updateLink(linkUpdatePortfolioTestimonial, "portfolio-testimonial.html");
updateLink(linkUpdatePortfolioTypography, "portfolio-typography.html");
updateLink(linkUpdatePortfolioAnimation, "portfolio-animation.html");
updateLink(linkUpdatePortfolioEvents, "portfolio-events.html");
updateLink(linkUpdatePortfolioCorporate, "portfolio-corporate-videos.html");
updateLink(linkUpdatePortfolioMotion, "portfolio-motion-graphics.html");
updateLink(linkUpdatePortfolioDigital, "portfolio-digital-films.html");

// https://6a3d8e1e-7c5b-499e-86e9-6a82ac529130.webhook.cid.azure-automation.net/webhooks?token=KhXZQVag7w%2fOeLgN8FxtgGY7H0U%2fUWTrDx7hppRitdE%3d
