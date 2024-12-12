// Tasks Delete Button
const deleteBtn = document.querySelectorAll(".latest-tasks .delete");
const articles = document.querySelectorAll(".latest-tasks .delete");

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", (ele) => {
    ele.currentTarget.closest("article").classList.toggle("done");
  });
});

// Add Active Class To The NavLink That Matches the Current Path
const navLinks = document.querySelectorAll("aside nav a");
const currentPath = window.location.pathname; // Current path of the page

navLinks.forEach((link) => {
  // Extract the path from the href attribute
  const linkPath = new URL(link.href, window.location.origin).pathname;

  // Normalize paths by ignoring leading/trailing slashes
  const normalizedLinkPath = linkPath.replace(/^\/|\/$/g, "");
  const normalizedCurrentPath = currentPath.replace(/^\/|\/$/g, "");

  // Check if the current path ends with the link path
  if (normalizedCurrentPath.endsWith(normalizedLinkPath)) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
