const expectedOutput = new XMLHttpRequest();
expectedOutput.open("Get", "https://restcountries.com/v3.1/all");
expectedOutput.send();
expectedOutput.responseType = "json";

expectedOutput.onload = ()=> {
    const countries = expectedOutput.response;
    for (const i in countries) {
            console.log("Country name :" ,countries[i].name.common);
            console.log("Region :",countries[i].region);
            console.log("Subregion :",countries[i].subregion);
            console.log("Population :",countries[i].population);   
    } 
}