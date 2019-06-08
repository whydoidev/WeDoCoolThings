/*jshint esversion: 6 */

// we need to listen for scroll events on the page
// when the scroll bar reaches a certain distance
// we want to change the background colour of the body

// step1. deceide which tags we want to use and save them as contsants at the top of the page
const bodyTag = document.querySelector("body");

// step 2 decide which user events ie, click, scroll etc, we want to trigger our code on. here we want to listen out for scroll events on our page
document.addEventListener("scroll", function() {
  console.log("Page has been scrolled");

  //Step 3. find out and store how far from the top of the page the scroll bar is
  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop);

  // if the distance from top is greater than 1000px, do something

  if (distanceFromTop > 680) {
    // console.log("passed 980px");
    // bodyTag.style.backgroundColor = "purple";
    bodyTag.classList.add("about-active");
  } else {
    bodyTag.classList.remove("about-active");
    // console.log("less than 980px");
    // bodyTag.style.backgroundColor = "#f5f5f5";
  }

  if (distanceFromTop > 4200) {
    bodyTag.classList.add("stationary-active");

  } else {
    bodyTag.classList.remove("stationary-active");
  }

});

//Lightbox
//when we clock on an image we want to show the lightbox
//inside the lightbox should be the mage we clicked on
//when we click on the lightbox we want it to disappear

//step 1 : decide which tags in HTML we want to use and save them in constants
//save all of our images into a constant
const images = document.querySelectorAll("section img");
// save the light box from our html inside a constant
const lightbox = document.querySelector(".lightbox");
// save the lightbox image from our html file inside a constant
const lightboxImage = document.querySelector(".lightbox img");
//lets look at what saves in images

images.forEach(image => {
  // Step 2. add a click event listener to all of our images

  image.addEventListener("click", function() {
    console.log("image clicked");
    // step 3:show the lightbox
    lightbox.classList.add("fadeIn");
    // step 4 show the right image
    // save the image source attribute from the image we click on
    let imageSrc = this.getAttribute("src");
    console.log(imageSrc);
    // set the lightbox image souce attribute to the one we save
    // this means "get this"
    lightboxImage.setAttribute("src", imageSrc);

  });
});

// step 4 when we click on the lightbox remove the fadein class
lightbox.addEventListener("click", function() {
  lightbox.classList.remove("fadeIn");
});

$('textarea').autoResize();
// add event listener only works on singluar objects
// bodyTag.style.backgroundColor = "purple";
// const h1Tag = document.querySelector("h1");

// document.addEventListener("scroll", function() {
//   // bodyTag.innerHTML = "H1 has been clicked!";
//   bodyTag.style.fontSize = "90px";
//   bodyTag.style.backgroundColor = "#F6D2B2";
// });
