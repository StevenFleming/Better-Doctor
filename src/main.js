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
    let location= ($("#location").val());
    (async () => {
      const responsedoctors = await doc.getDoctorName(condition,location);
      const responseLastName = await doc.getLastName(condition,location);
      const responseWebSite = await doc.getWebsite(condition,location);
      const responseList = await doc.getListAmount(condition,location);
      const responseaddress = await doc.getAddress(condition,location);

      getElements(responsedoctors, responseList, responseLastName, responseWebSite, responseaddress);
    })();
    function getElements(responsedoctors, responseList, responseLastName, responseWebSite, responseaddress) {
      $('#showDoctor').text(`${responsedoctors} ${responseLastName} ${responseWebSite} ${responseaddress}`);
      $('#showDoctorList').text(`Number of Doctors in your area based on input ${responseList}`);

    }  
  }); 
});
