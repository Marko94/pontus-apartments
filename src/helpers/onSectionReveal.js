function reveal() {
  const sections = document.querySelectorAll(".Section");
  for (var i = 0; i < sections.length; i++) {
    const windowHeight = window.innerHeight;
    var elementTop = sections[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      sections[i].classList.add("Active");
    }
  }
}

export default reveal;