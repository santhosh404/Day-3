/*
 *Task 1: How to Compare Two JSON have the same properties without order ?
    *const obj1 = {name: "Person1", age: 5};
    *const obj2 = {age: 5, name: "Person1"};
*/ 

const obj1 = { name: "Person1", age: 5 };
const obj2 = { age: 5, name: "Person1" };


// If two object doesn't have same length, then obviously it is not same
if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    console.log(`Objects ${JSON.stringify(obj1)} and ${JSON.stringify(obj2)} are Not Equal`);
}

else {
    const arr = [];
    for(let ob1 in obj1) {
        for(let ob2 in obj2) {
            //If two key are equal then we need to check the value
            if(ob1 === ob2) {
                //If two values are equal, then push true into the array
                if(obj1[ob1] === obj2[ob2]) {
                    arr.push(true);
                    break;
                }
                //If two values are not equal, then push false into the array
                else{ 
                    arr.push(false);
                    break;
                }
            }
            
        }
    }
    
    //If there is single false value in the array, then objects are not equal
    if(arr.includes(false) || arr.length < Object.keys(obj1).length) {
      console.log(`Objects ${JSON.stringify(obj1)} and ${JSON.stringify(obj2)} are Not Equal`);
    }
    else {
      console.log(`Objects ${JSON.stringify(obj1)} and ${JSON.stringify(obj2)} are Equal`);  
    }
}

/*
    *Test Case 1: Passed
        Input: 
            const obj1 = { name: "Person1", age: 5 };
            const obj2 = { age: 5, name: "Person1" };
        Output: true

    *Test Case 2: Passed
        Input: 
            const obj1 = { name: "Person1", age: 5, email: "santhosh@gmail.com" };
            const obj2 = { age: 5, name: "Person1" };
        Output: false

    *Test Case 3: Passed
        Input: 
            const obj1 = { email: "Person1", age: 5 };
            const obj2 = { age: 5, name: "Person1" };
        Output: false

    *Test Case 4: Passed
        Input: 
            const obj1 = { name: "Person1", age: 5 };
            const obj2 = { age: 5, name: "Person21" };
        Output: false
*/





/*
    *Task 2: Use the rest countries API Url: https://restcountries.com/v3.1/all and display all the country flags in the console.
*/ 

//Creating the xhr object
const xhr1 = new XMLHttpRequest();

//Opening the connection
xhr1.open("GET", "https://restcountries.com/v3.1/all", true);

//Sending the request to server
xhr1.send();

//Getting the response from server by onLoad event
xhr1.onload = function() {

    let response = xhr1.response;

    //Parse the received response i.e converting to JSON
    response = JSON.parse(response);

    //Printing country flags in console as arry of objects
    const countryFlags = response.map(r => {
       return {
            flag: r.flag,
            flagImageUrls: r.flags
        }
    })

    console.log("Country Flags: ", countryFlags);
}




/*
    *Task 3: Use the rest countries API Url: https://restcountries.com/v3.1/all and display all the country name, regions, sub-regions and population.
*/ 

//Creating the xhr object
const xhr2 = new XMLHttpRequest();

//Opening the connection
xhr2.open("GET", "https://restcountries.com/v3.1/all", true);

//Sending the request to server
xhr2.send();

//Getting the response from server by onLoad event
xhr2.onload = function() {

    let response = xhr2.response;

    //Parse the received response i.e converting to JSON
    response = JSON.parse(response);

    //Printing country details such as name, region, subregion and population in console as arry of objects
    const countryDetails = response.map(r => {
       return {
            name: r.name,
            region: r.region,
            subregion: r.subregion,
            population: r.population
        }
    })

    console.log("Country Details: ", countryDetails);
}