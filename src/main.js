import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { Dinoipsum } from './weather-service.js';

$(document).ready(function() {
  let dinoipsum = new Dinoipsum();
  $('#getDinoText').click(function() {
    // console.log("hello");

    (async () => {
      const response = await dinoipsum.getDinoName();
      const image = await dinoipsum.getDinoImage();
      console.log("RESPONSE: ", response);
      console.log("IMAGE: ", image);  
      getElements(response, image);
      // getElements(image);
    })();
    function getElements(response, image) {
      // let letters = dinoipsum.getDinoLetterArray(response)
      // let length = dinoipsum.getDinoLength(response);
      console.log("response " + response)
      $('#showDino').text(`${response}`);
      console.log(`image src ` + image)
      $('#showDinoimage').append(`<img src=${image}>`)

      // $('#dinoLength').text(`${length}`);
      // $('#dinoLetters').text(`${letters}`);
    }   
});
});