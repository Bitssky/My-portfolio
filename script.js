document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for reaching out, Zubair will get back to you soon!");
    this.reset();
  });
  