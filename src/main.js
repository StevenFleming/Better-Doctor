import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { Doctor } from './backend.js';

$(document).ready(function() {
  let doc = new Doctor();

  $('#getDoctor').click(function() {
    event.preventDefault();
    let condition =($("#condition").val());
    let location= ($("#name").val());
    (async () => {
      const response = await doc.getDoctorName(condition,location);
      console.log("RESPONSE: ", response);
      getElements(response);
    })();
    function getElements(response) {
      console.log("response " + response)
      $('#showDoctor').text(`${response}`);
    }   
  });

  // $('#getCondition').click(function() {
  //   let condition =($("#condition").val());
  //   console.log(condition);
  // });

  // $('#getName').click(function() {
  //   let location= ($("#name").val());
  //   console.log(location);
  // });
});
