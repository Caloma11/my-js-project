// imports
import Sortable from "sortablejs";

// function definition
const initSortable = () => {
  const list = document.querySelector('#results');
  Sortable.create(list, {
  ghostClass: "ghost",
  animation: 650
});
};

//export public functions
export { initSortable };
