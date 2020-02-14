// import {location, condition} from './main.js';

export class Doctor {

  async getDoctorName(condition, location) {
    try {
      const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=${location}&skip=0&limit=10&user_key=${process.env.API_KEY}``); //sample API Will Change to Doctors
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse.data[0].profile.first_name
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
