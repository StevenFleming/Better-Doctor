
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
      let lastName = "Last Name: " + jsonifiedResponseList.data[0].profile.last_name;
      console.log(lastName);
      let website = "Website: " + jsonifiedResponseList.data[0].practices[0].website;
      console.log(website);
      let acceptingPatients = "Is this Doctor accepting new patients: " + jsonifiedResponseList.data[0].practices[0].accepts_new_patients;
      console.log(acceptingPatients);
      let phoneNumber = "Phone Number: " + jsonifiedResponseList.data[0].practices[0].phones[0].number;
      console.log(phoneNumber);
      let address = "Address: " + jsonifiedResponseList.data[0].practices[0].visit_address.street + " " + jsonifiedResponseList.data[0].practices[0].visit_address.city + " " +  jsonifiedResponseList.data[0].practices[0].visit_address.state + " " + jsonifiedResponseList.data[0].practices[0].visit_address.zip;
      console.log(address);
      return listamount;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }

}
