const expectedOutput = new XMLHttpRequest();
expectedOutput.open("GET", "https://restcountries.com/v3.1/all") 
expectedOutput.send();
expectedOutput.responseType = "json"; //Data format
// console.log(countries.length);

expectedOutput.onload = () => {
     const countries = expectedOutput.response //Data

    for (const i in countries) {
      console.log(countries[i].name.common,countries[i].flags);
      }
}