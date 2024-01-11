function reveal() {
  const sections = document.querySelectorAll(".Section");
  for (var i = 0; i < sections.length; i++) {
    const windowHeight = window.innerHeight;
    // console.log(windowHeight, sections[i].getBoundingClientRect().top);
    var elementTop = sections[i].getBoundingClientRect().top;
    var elementHeight = sections[i].getBoundingClientRect().bottom - sections[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - elementHeight*0.50) {
      sections[i].classList.add("Active");
    } else {
      sections[i].classList.remove("Active");
    }
  }
}

export default reveal;