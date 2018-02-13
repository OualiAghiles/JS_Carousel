function showSlide(ActiveSlide) { ActiveSlide.classList.add('active') }
function hideSlide(ActiveSlide) { ActiveSlide.classList.remove('active') }
// function slideLoop(that) {
  // e.preventDefault()
  // var next = that.classList.contains('next')
  // if (next) {
  //   if (indexSlide == slides.length - 1) {
  //     hideSlide(ActiveSlide)
  //     indexSlide = 0
  //   } else {
  //     hideSlide(ActiveSlide)
  //     indexSlide++
  //     console.log(indexSlide);
  //   }
  //   ActiveSlide = slides[indexSlide]
  //   showSlide(ActiveSlide)
  // } else {
  //   if (indexSlide == 0) {
  //     indexSlide = slides.length - 1
  //     hideSlide(ActiveSlide)
  //   } else {
  //     indexSlide--
  //     hideSlide(ActiveSlide)
  //   }
  //   ActiveSlide = slides[indexSlide]
  //   showSlide(ActiveSlide)
  // }
// }
function carousel() {
  var slides = document.querySelectorAll('.slide')
  var click = document.querySelectorAll('.controls a')
  for (var index = 0; index < click.length; index++) {
    var lien = click[index];
    var indexSlide = 0
    var ActiveSlide = slides[indexSlide]
    ActiveSlide.classList.add('active')
    lien.addEventListener('click', function (e) {
      e.preventDefault()
      var next = this.classList.contains('next')
      if (next) {
        if (indexSlide == slides.length - 1) {
          hideSlide(ActiveSlide)
          indexSlide = 0
        } else {
          hideSlide(ActiveSlide)
          indexSlide++
          console.log(indexSlide);
        }
        ActiveSlide = slides[indexSlide]
        showSlide(ActiveSlide)
      } else {
        if (indexSlide == 0) {
          indexSlide = slides.length - 1
          hideSlide(ActiveSlide)
        } else {
          indexSlide--
          hideSlide(ActiveSlide)
        }
        ActiveSlide = slides[indexSlide]
        showSlide(ActiveSlide)
      }
    })
  }
}
carousel()