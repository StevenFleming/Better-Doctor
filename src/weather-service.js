export class Dinoipsum {


  getDinoLength(response){
    this.response = response
    this.response[0];
    let DinoName = this.response[0];
    let StringDinoName = DinoName.toString();
    let arrayDinoLetters = StringDinoName.split("");
    return arrayDinoLetters.length;
  }
  createblankArray(){

  }

  getDinoLetterArray(response){
    this.response = response
    this.response[0];
    let DinoName = this.response[0];
    let StringDinoName = DinoName.toString();
    let arrayDinoLetters = StringDinoName.split("");
    return arrayDinoLetters;
  }
  
  async getDinoName() {
    try {
      const response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&words=1&paragraphs=1`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }

  async getDinoImage() {
    try {
      const response = await fetch(`http://api.giphy.com/v1/gifs/IgFhbm6Nc1wGapSInG?api_key=V4ljfgrLIuS9B8JF93F0AtQoTnSeQvkx&limit=5v`);
      console.log(response)
      let jsonifiedResponse = await response.json();
      console.log(jsonifiedResponse)
      let gif = jsonifiedResponse.data.images.downsized_large.url
      return gif
      } catch(error) {
        console.error("There was an error handling your request: " + error.message);
      }
    }
}
