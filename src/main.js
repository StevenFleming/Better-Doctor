import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { Doctor } from './backend.js';
// export let condition = ($("#condition").val());
// export let specificDoctor= ($("#specificDoctor").val());
$(document).ready(function() {
  let doc = new Doctor();
  $('#getDinoText').click(function() {
  let condition = ($("#condition").val());
  let specificDoctor= ($("#specificDoctor").val());
  console.log(condition);
  console.log(specificDoctor);

    (async () => {
      const response = await doc.getDoctorName();
      console.log("RESPONSE: ", response);
      getElements(response);
    })();
    function getElements(response) {
      console.log("response " + response)
      $('#showDoctor').text(`${response}`);
    }   
});
});
// $("#form1").submit(function(event){
//   let condition = ($("#condition").val());
//   let inputstr = ($("#specificDoctor").val());
//   console.log(condition);
//   console.log(inputstr);
// });