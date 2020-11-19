import { fetchMovies, callFetch } from './movies'
import { initSortable } from './plugins/sortable'
import { initMarkdown } from './plugins/markdown'
import { initSelect2 } from './plugins/select'

const form = document.querySelector("#movies-form");

initSortable();
initMarkdown();
initSelect2();

form.addEventListener("submit", callFetch);

