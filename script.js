const deleteBtn = document.querySelectorAll(".latest-tasks .delete");
const articles = document.querySelectorAll(".latest-tasks .delete");

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", (ele) => {
    ele.currentTarget.closest("article").classList.toggle("done");
  });
});
