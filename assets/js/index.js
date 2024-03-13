// document.addEventListener("click", function (e) {
//   const target = e.target;
//   if (target.matches('[data-nxt-toggle="collapse"]')) {
//     let attr = target.getAttribute("data-nxt-target");
//     document.querySelector(attr).classList.toggle("hide");
//   }
// });

document.addEventListener("click", function (e) {
  const target = e.target;
  if (target.matches('[data-nxt-toggle="collapse"]')) {
    let collapseItem = target.parentElement;
    let collapsible = collapseItem.parentElement;
    let items = collapsible.querySelectorAll(".collapse-item");

    items.forEach((el) => el.classList.remove("active"));
    collapseItem.classList.toggle("active");
  }
});
