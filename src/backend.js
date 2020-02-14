// import {location, condition} from './main.js';

export class Doctor {

  async getDoctorName(condition) {
    try {
      const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=WA&skip=0&limit=10&user_key=9c2ef529d0519e124391cca9ce52f975`); //sample API Will Change to Doctors
      let jsonifiedResponse = await response.json();
      console.log(response);
      // console.log(jsonifiedResponse.data[0].profile.first_name);
      console.log(jsonifiedResponse);
      return jsonifiedResponse.data[0].profile.first_name;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
