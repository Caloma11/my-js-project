// All the imports
import { fetchMovies, callFetch } from './movies'
import { initSortable } from './plugins/sortable'
import { initMarkdown } from './plugins/markdown'
import { initSelect2 } from './plugins/select'

// Calling the import functions
initSortable();
initMarkdown();
initSelect2();

// AJAX calls go here if any
// ------ here -----

// Adding listeners and grabbing dom elements
const form = document.querySelector("#movies-form");
form.addEventListener("submit", callFetch);

