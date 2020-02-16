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
      const responseFirstName = await doc.getDoctorName(condition,location);
      const responseLastName = await doc.getLastName(condition,location);
      const responseWebSite = await doc.getWebsite(condition,location);
      const responseAddress = await doc.getAddress(condition,location);
      const responsePhoneNumber = await doc.getPhoneNumber(condition,location);

      getElements(responseFirstName, responseLastName, responseWebSite, responseAddress, responsePhoneNumber );
    })();
    function getElements(responseFirstName, responseLastName, responseWebSite, responseAddress, responsePhoneNumber) {
      $('#showDoctor').append(`<thead><th> Name </th><th>Address</th><th>WebSite</th><th>PhoneNumber</th></thead></tbody>
      <tr>
          <td>${responseFirstName} ${responseLastName}</td>
          <td>${responseAddress}</td>
          <td>${responseWebSite}</td>
          <td>${responsePhoneNumber}</td>
      </tr>
      </tbody>
  </table>`
      );

    }  
  }); 
});
