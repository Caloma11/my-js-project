import Sortable from "sortablejs";

const initSortable = () => {
  const list = document.querySelector('#results');
  Sortable.create(list, {
  ghostClass: "ghost",
  animation: 650
});
};

export { initSortable };
