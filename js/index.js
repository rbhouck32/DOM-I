const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//updates nav items a
let navItems = document.querySelectorAll("header nav a");
let navParent = document.querySelector("header nav");
let newNavItem = document.createElement("a");
let anotherNewNavItem = document.createElement("a");
anotherNewNavItem.textContent = "Another One";
newNavItem.textContent = "More Info";
navParent.appendChild(newNavItem);
navParent.prepend(anotherNewNavItem);

let aRef = 1;
navItems.forEach(function(nav) {
  nav.textContent = siteContent["nav"]["nav-item-" + aRef];
  aRef++;
  nav.style.color = "green";
});

// adding breaks to the h1
const mainHeader = document.getElementsByTagName("h1")[0];
mainHeader.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");

// function to change H1 text
let changeText = function() {
  if (mainHeader.innerHTML == "This Changes h1") {
    mainHeader.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");
  } else {
    mainHeader.innerHTML = "This Changes h1";
  }
};
// get started button
const getStartedButton = document.querySelector(".cta-text button");
getStartedButton.textContent = siteContent.cta.button;
getStartedButton.setAttribute("onclick", "changeText()");

// CALL TO ACTION IMAGE
const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

// First h4 top content features
const topContentFeatures = document.querySelectorAll(".top-content h4")[0];
topContentFeatures.textContent = siteContent["main-content"]["features-h4"];

// Second h4 top content about
const topContentAbout = document.querySelectorAll(".top-content h4")[1];
topContentAbout.textContent = siteContent["main-content"]["about-h4"];

// features PARAGRAPH
const featuresParagraph = document.querySelectorAll(".top-content p")[0];
featuresParagraph.textContent = siteContent["main-content"]["features-content"];

// ABOUT PARAGRAPH
const aboutParagraph = document.querySelectorAll(".top-content p")[1];
aboutParagraph.textContent = siteContent["main-content"]["about-content"];

// MIDDLE IMAGE
const middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
// first h4 bottom content services
const botContentServices = document.querySelectorAll(".bottom-content h4")[0];
botContentServices.textContent = siteContent["main-content"]["services-h4"];
// second h4 bottom content product
const botContentProduct = document.querySelectorAll(".bottom-content h4")[1];
botContentProduct.textContent = siteContent["main-content"]["product-h4"];
// Third h4 bottom content VISION
const botContentVision = document.querySelectorAll(".bottom-content h4")[2];
botContentVision.textContent = siteContent["main-content"]["vision-h4"];
// SERVICES paragraph
const servicesParagraph = document.querySelectorAll(".bottom-content p")[0];
servicesParagraph.textContent = siteContent["main-content"]["services-content"];
// PRODUCT paragraph
const productParagraph = document.querySelectorAll(".bottom-content p")[1];
productParagraph.textContent = siteContent["main-content"]["product-content"];
// VISION paragraph
const visionParagraph = document.querySelectorAll(".bottom-content p")[2];
visionParagraph.textContent = siteContent["main-content"]["vision-content"];

// contact h4
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];
// contact address
const addressParagraph = document.querySelectorAll(".contact p")[0];
addressParagraph.textContent = siteContent.contact.address;
// contact PHONE
const phoneParagraph = document.querySelectorAll(".contact p")[1];
phoneParagraph.textContent = siteContent.contact.phone;
// contact email
const emailParagraph = document.querySelectorAll(".contact p")[2];
emailParagraph.textContent = siteContent.contact.email;
// footer paragraph
const footerCopyright = document.querySelector("footer p");
footerCopyright.textContent = siteContent.footer.copyright;
