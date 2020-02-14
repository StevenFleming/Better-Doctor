export class Doctor {
  
  async getDoctorName() {
    try {
      const response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&words=1&paragraphs=1`); //sample API Will Change to Doctors
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
