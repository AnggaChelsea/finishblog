//navbar
$(".menu-toggle").click(function () {
  $(".site-nav").toggleClass("site-nav--open", 500);
  $(this).toggleClass("open");
});

//looping image
const image = [{
    link: "./postPage.html",
    name: "web Design Makrket",
  },
  {
    link: "./postPage.html",
    name: "web Design company profile",
  },
  {
    link: "./postPage.html",
    name: "web Design e-commerce",
  },
  {
    link: "./postPage.html",
    name: "web Design Angga",
  },
  {
    link: "./postPage.html",
    name: "web Design Angga Startup",
  },
];
$(document).ready(function () {
  for (let i = 0; i < image.length; i++) {
    const loopImage = `
    <figure class="port-item">
    <img src="./img/webDesign4.jpg" alt="portfolio item" />
    <figcaption class="port-desc">
      <p>${image[i].name}</p>
      <a href="${image[i].link}" class="button button-accent button-small">view</a>
    </figcaption>
  </figure>
    `;
    $(".portfolio").append(loopImage);
  }
});
//comment time
// days and time
let time = new Date();

let days = time.getDay();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

let getAll = ` ${days}:${hours}:${minutes}:${seconds}`;

//jquery comment on footer

$("#form").on("submit", function (event) {
  event.preventDefault();
  const input = $(this).children("#comment").val();
  $("#isi-comment").append(`<span class="isi-comment">
  ${getAll} : ${input} <a href="aboutMe.html"><i class="fa fa-paper-plane"></i></a></span><br/>`);
  $(this).children("#comment").val();
});

//comment in AboutPage

$("#form-comment").on("submit", function (event) {
  event.preventDefault();
  const inputComment = $(this).children("#need").val();
  const classInput = `
  <br /">
  <div class="isiComment">
  <span class="isi"><i class="fa fa-user-circle"></i> ${inputToComment}</span>
  </div
  `;
  $(this).after(classInput);
  $(this).children("#need").val();
});

//according Review Our Question

//show ketika versi mobile
let tabAccordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < tabAccordion.length; i++) {
  tabAccordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//ReadMore
function myReadMore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("btnReadMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//cick add like
let Like = 0;

function addLike() {
  Like += 1;
  document.getElementById("like").innerHTML = Like;
}

//notifications

$(document).ready(function () {
  $(".close").on("click", function (event) {
    const selectForDelete = $(this).parent();
    selectForDelete.slideUp(200, function () {
      selectForDelete.remove();

      if ($(".choose").children().length === 0) {
        $(".choose").hide();
      }
    });
  });
});

