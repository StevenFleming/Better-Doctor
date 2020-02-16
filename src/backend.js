
export class Doctor {

  async getDoctorName(condition, location) {
    try {
      const rawFirstName = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=${location}&skip=0&limit=10&user_key=${process.env.API_KEY}`); //sample API Will Change to Doctors
      let jsonifiedresponseFirstName = await rawFirstName.json();
      let firstName = jsonifiedresponseFirstName.data[0].profile.first_name
      return firstName;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  } 
  async getLastName(condition, location) {
    try {
      const lastNameraw = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=${location}&skip=0&limit=100&user_key=${process.env.API_KEY}`); //sample API Will Change to Doctors
      let jsonifiedResponseList = await lastNameraw.json();
      let lastName = await " " + jsonifiedResponseList.data[0].profile.last_name;
      return lastName;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
  async getWebsite(condition, location) {
    try {
      const webSiteRaw = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=${location}&skip=0&limit=100&user_key=${process.env.API_KEY}`); //sample API Will Change to Doctors
      let jsonifiedResponseWebsiteRaw = await webSiteRaw.json();
      let webSite = await "Website: " + jsonifiedResponseWebsiteRaw.data[0].practices[0].website;
      if (webSite == "Website: undefined"){
        let webSite = "Website not found "
        return webSite
        }
        else {
         return webSite;
        }
      } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }

  async getAddress(condition, location) {
    try {
      const addressRaw = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=${location}&skip=0&limit=100&user_key=${process.env.API_KEY}`); //sample API Will Change to Doctors
      let jsonifiedResponseAddressRaw= await addressRaw.json();
      let address = await jsonifiedResponseAddressRaw.data[0].practices[0].visit_address.street + " " + jsonifiedResponseAddressRaw.data[0].practices[0].visit_address.city + " " +  jsonifiedResponseAddressRaw.data[0].practices[0].visit_address.state + " " + jsonifiedResponseAddressRaw.data[0].practices[0].visit_address.zip;
      return address;
      } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }

  async getPhoneNumber(condition, location) {
    try {
      const phoneNumberRaw = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=${location}&skip=0&limit=100&user_key=${process.env.API_KEY}`); //sample API Will Change to Doctors
      let jsonifiedResponsePhoneNumberRaw = await phoneNumberRaw.json();
      let phoneNumber = await jsonifiedResponsePhoneNumberRaw.data[0].practices[0].phones[0].number;
      return phoneNumber;
      } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
  async getAcceptingPatients(condition, location) {
    try {
      const statusRaw = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=${location}&skip=0&limit=100&user_key=${process.env.API_KEY}`); //sample API Will Change to Doctors
      let jsonifiedResponseStatusRaw = await statusRaw.json();
      let status = await jsonifiedResponseStatusRaw.data[0].practices[0].accepts_new_patients;
      return status;
      } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}