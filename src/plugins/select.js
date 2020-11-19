// imports
import $ from 'jquery';
import 'select2';

// function definition
const initSelect2 = () => {
  $('.select2').select2({ width: '100%' });
}

//export public functions
export { initSelect2 }
