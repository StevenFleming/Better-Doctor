import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { Doctor } from './backend.js';

$(document).ready(function() {
  let doc = new Doctor();
  $('#getDinoText').click(function() {

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