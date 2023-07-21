//import * as Papa from "./papaparse.min.js";
//const sheetID = '1QrpL8zogrVHyLL9tug_wg57DqLb589-G71bEpqdVpfM'; // Replace with the ID of your Google Sheet
const sheetURL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQeZibHLW1SoDp0jv4NgJdSbGE0cNrVaoV_a1dNxO5QauNp23L0cyXfBQzseTYAvW3swmh_M3jLi9uJ/pub?output=csv`;

// fetch(sheetURL)
//   .then(response => response.text())
//   .then(data => {
    
//     console.log(data)
    
//   })
//   .catch(error => console.error('Error fetching data:', error));
const Papa = require('papaparse')

const filePrasing = () => new Promise((resolve)=> {  
  Papa.parse(sheetURL, {   
    download: true,
    header: true,
    newline: '',
    complete: function(results, file) {resolve(results.data);}
  })
})

const getData = async() => {
  const data = await filePrasing();
  console.log('data', data)
  return data
}

getData()