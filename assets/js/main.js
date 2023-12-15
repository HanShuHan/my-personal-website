
// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on('click', function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {
        window.location.hash = hash;
      });
    }
  });
});

// protfolio filters
$(window).on("load", function () {

  var path = window.location.pathname;
  var page = path.split("/").pop().split(".").shift();

  if (page == "index") {
    window.location = "#about"
  } else {
    window.location = "#" + page
  }

  // Searching Event
  var search = document.getElementById("search");
  var courses = document.getElementsByClassName("class-title")
  var courses_by_lvl = document.getElementsByClassName("class-level")
  // Add event
  search.addEventListener("keyup", () => {
    for (i = 0; i < courses.length; i++) {
      var courseName = courses[i].innerHTML;
      var courseLevel = courses_by_lvl[i].innerHTML;

      if (courseName.toUpperCase().indexOf(search.value.toUpperCase()) > -1
        || courseLevel.toUpperCase().indexOf(search.value.toUpperCase()) > -1) {
        courses[i].parentElement.parentElement.parentElement
          .style.display = ""
      } else {
        courses[i].parentElement.parentElement.parentElement
          .style.display = "none"
      }
    } // end for
  }) // end search Event

  //
  var up = document.getElementById("level-up")
  var down = document.getElementById("level-down")

  var classes = document.getElementsByClassName("all")
  const arr = []

  for (const clas of classes) {
    arr.push(clas)
  }

  // Add level upward sorting
  up.addEventListener("click", () => {

    arr.sort((a, b) => {
      const pattern = /level-\d+/
      const lv1 = a.className.match(pattern)[0].substring(6)
      const lv2 = b.className.match(pattern)[0].substring(6)

      if (lv1 > lv2) {
        return 1
      }
      if (lv1 < lv2) {
        return -1
      }
      return 0
    })
    // 
    var myClasses = document.getElementById("classes")

    for (let cls of arr) {
      myClasses.append(cls)
    }
  })
  // Add level downward sorting
  down.addEventListener("click", () => {

    arr.sort((a, b) => {
      const pattern = /level-\d+/
      const lv1 = a.className.match(pattern)[0].substring(6)
      const lv2 = b.className.match(pattern)[0].substring(6)

      if (lv2 > lv1) {
        return 1
      }
      if (lv1 > lv2) {
        return -1
      }
      return 0
    })
    // 
    var myClasses = document.getElementById("classes")

    for (let cls of arr) {
      myClasses.append(cls)
    }
  })

});
