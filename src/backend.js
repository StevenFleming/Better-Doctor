
export class Doctor {

  async getDoctorName(condition, location) {
    try {
      const responseDoctors = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=${location}&skip=0&limit=10&user_key=9c2ef529d0519e124391cca9ce52f975`); //sample API Will Change to Doctors
      let jsonifiedresponseDoctors = await responseDoctors.json();
      let docName = jsonifiedresponseDoctors.data[0].profile.first_name
      return docName;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }

  async getListAmount(condition, location) {
    try {
      const responseList = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=${location}&skip=0&limit=100&user_key=9c2ef529d0519e124391cca9ce52f975`); //sample API Will Change to Doctors
      let jsonifiedResponseList = await responseList.json();
      let listamount = jsonifiedResponseList.data.length;
      console.log(jsonifiedResponseList.data.length);
      return listamount;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }

}
