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
      const responsedoctors = await doc.getDoctorName(condition,location);
      const responselist = await doc.getListAmount(condition,location);
      console.log("RESPONSE: ", responsedoctors);
      getElements(responsedoctors, responselist);
    })();
    function getElements(responsedoctors, responselist) {
      console.log("response " + responsedoctors)
      $('#showDoctor').text(`${responsedoctors}`);
      $('#showDoctorList').text(`Number of Doctors in your area based on input${responselist}`);

    }  
  }); 
});
