// Tasks Delete Button
const deleteBtn = document.querySelectorAll(".latest-tasks .delete");
const articles = document.querySelectorAll(".latest-tasks .delete");

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", (ele) => {
    ele.currentTarget.closest("article").classList.toggle("done");
  });
});

// Add Active Class To The NavLink That Is Clicked
const navLinks = document.querySelectorAll("aside nav a");
const currentPath = window.location.pathname;

navLinks.forEach((link) => {
  // Compare the href attribute with the current path
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
