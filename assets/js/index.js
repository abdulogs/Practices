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
  const body = document.querySelector("body");
  const html = document.querySelector("html");
  if (target.matches('[data-nxt-toggle="tab"]')) {
    const active = target;
    const parent = target.parentElement.parentElement;
    const btns = parent.querySelectorAll(".tab-item");
    const panes = parent.querySelectorAll(".tab-pane");

    panes.forEach((el) => el.classList.remove("active"));
    btns.forEach((el) => el.classList.remove("active"));

    active.classList.add("active");
    const attr = active.getAttribute("data-nxt-target");
    document.querySelector(attr).classList.add("active");
  } 
  
  else if (target.matches("[data-nxt-toggle='modal']")) {
    const attr = target.getAttribute("data-nxt-target");
    const selector = document.querySelector(attr);
    selector.classList.toggle("active");
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
  } else if (target.matches(".modal-dialog")) {
    const modal = target.closest(".active");
    modal.classList.remove("active");
    html.style.overflow = "auto";
    body.style.overflow = "auto";
  }
  
  else if (target.matches("[data-nxt-toggle='offcanvas']")) {
    const attr = target.getAttribute("data-nxt-target");
    const selector = document.querySelector(attr);
    selector.classList.toggle("active");
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
  } else if (target.matches(".offcanvas")) {
    target.classList.remove("active");
    body.style.overflow = "auto";
  }
});
