function reveal() {
  const sections = document.querySelectorAll(".Section");
  for (var i = 0; i < sections.length; i++) {
    const windowHeight = window.innerHeight;
    var elementTop = sections[i].getBoundingClientRect().top;
    var elementHeight = sections[i].getBoundingClientRect().bottom - sections[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - elementHeight*0.60) {
      sections[i].classList.add("Active");
    }
  }
}

export default reveal;