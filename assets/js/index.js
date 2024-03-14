// document.addEventListener("click", function (e) {
//   const target = e.target;
//   if (target.matches('[data-nxt-toggle="collapse"]')) {
//     let attr = target.getAttribute("data-nxt-target");
//     document.querySelector(attr).classList.toggle("hide");
//   }
// });

// document.addEventListener("click", function (e) {
//   const target = e.target;
//   if (target.matches('[data-nxt-toggle="collapse"]')) {
//     let collapseItem = target.parentElement;
//     let collapsible = collapseItem.parentElement;
//     let items = collapsible.querySelectorAll(".collapse-item");

//     items.forEach((el) => el.classList.remove("active"));
//     collapseItem.classList.toggle("active");
//   }
// });



document.addEventListener("click", function (e) {
  const target = e.target;
  if (target.matches('[data-nxt-toggle="tab"]')) {
    const active =  target;
    const parent = target.parentElement.parentElement
    const btns = parent.querySelectorAll(".tab-item")
    const panes = parent.querySelectorAll(".tab-pane")

    panes.forEach(el => el.classList.remove("active"));
    btns.forEach(el => el.classList.remove("active"));

    active.classList.add("active")
    const attr = active.getAttribute("data-nxt-target")
    document.querySelector(attr).classList.add("active")
  }
});
