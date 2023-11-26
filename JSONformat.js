//QUESTION 2: JSON format Resume Details
let personDetails = {
    "fName": "jaya priya",
    "lastName": "vinoth",
    "Gender": "female",
    "Age": "28",
    "DOB": "10-JULY-1995",
    "Experience": "fresher",
    "Education": { "UG": "B.E", "PG": "M.E" },
    "Address": "trichy",
    "ContactNo": ["+91 123345678","+971 505678901"],
    "MailId": "tyui@gmail.com",
    "Hobbies":["reading books", "google surfing" , "cooking"],
    "Skills":["HTML","CSS","JAVASCRIPT"] 
    
}
//QUESTION 1: JSON ITERATION
// >>>>>>>>>>>>>>>>>>>>>>>>>
//FOR IN LOOP
// for (var i in personDetails) {
//     console.log(i, personDetails[i]);

// }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // FOR LOOP
 
    for( var j=0; j<=personDetails.Skills.length;j++){
           console.log(personDetails.Skills[j])

    }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//FOR OF LOOP
 
// for (var i of personDetails.Hobbies) {
//         console.log(i);
    
//      }
//>>>>>>>>>>>>>>>>>>>>

//FOR EACH LOOP
//  personDetails.ContactNo.forEach(conNum);
//   function conNum( value, index){
//      console.log("index is:" + index + "&" + " value is:" + value);
//   }
