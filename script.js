let images1 = document.querySelectorAll(".images1");
let images2 = document.querySelectorAll(".image2");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let moves = document.querySelector(".moves");

//  Automatic Slideshow
var slideIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("image2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 200);
}
window.onload = carousel();

// To display image which clicked on

function pick() {
  images1.forEach((image) => {
    image.addEventListener("click", () => {
      // makes play again button visible
      document.querySelector(".button").style.visibility = "visible";
      document.querySelector(".button").style.opacity = "revert";

      // To disply image clicked on box1
      box1.innerHTML = `<div class=box11><img src= ${image.src} class="big-img"></div>`;

      //  To pic some random image on box2 using random method
      var randomNum = Math.floor(Math.random() * images2.length);
      document.querySelector(
        ".box2"
      ).innerHTML = `<img src= ${images2[randomNum].src} class="big-img">`;

      // if conditions to check image in box1 === to image in box2
      if (image.src === images2[randomNum].src) {
        // then show the play again button and tie
        document.querySelector(".pop").style.visibility = "visible";
        document.querySelector(".pop").style.opacity = "revert";
      }
      //   to check picked image is rock
      else if (image.src == images1[0].src) {
        //   then check random image is paper by comparing random image vs paper image
        if (images2[randomNum].src == images1[1].src) {
          document.querySelector(".pop").innerHTML = "YOU LOOSE";
          document.querySelector(".pop").style.visibility = "visible";
          document.querySelector(".pop").style.opacity = "revert";
        }

        // if random image is scissors
        else {
          document.querySelector(".pop").innerHTML = "YOU WON";
          document.querySelector(".pop").style.visibility = "visible";
          document.querySelector(".pop").style.opacity = "revert";
        }
      }

      // 2nd condition if picked image is paper
      else if (image.src == images1[1].src) {
        if (images2[randomNum].src == images1[2].src) {
          document.querySelector(".pop").innerHTML = "YOU LOOSE";
          document.querySelector(".pop").style.visibility = "visible";
          document.querySelector(".pop").style.opacity = "revert";
        } else {
          document.querySelector(".pop").innerHTML = "YOU WON";
          document.querySelector(".pop").style.visibility = "visible";
          document.querySelector(".pop").style.opacity = "revert";
        }

      } 
    //   3rd condition to check picked image is scissors
      else if (image.src == images1[2].src) {
        if (images2[randomNum].src == images1[0].src) {
          document.querySelector(".pop").innerHTML = "YOU LOOSE";
          document.querySelector(".pop").style.visibility = "visible";
          document.querySelector(".pop").style.opacity = "revert";
        } else {
          document.querySelector(".pop").innerHTML = "YOU WON";
          document.querySelector(".pop").style.visibility = "visible";
          document.querySelector(".pop").style.opacity = "revert";
        }
      }
    });
  });
}

pick();
