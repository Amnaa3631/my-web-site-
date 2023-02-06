//Create a age calculator that takes date of birth of user and shows age in years, 
//months and days.
function calculate_age(age) { 
    // var diff_ms = Date.now() - dob.getTime();
    // var age_dt = new Date(diff_ms); 0
    let now = new Date();
    let curruentYear = now.getFullYear()
    let curruentMonth = now.getMonth()
    let curruentday = now.getDay()
    let agemonth = age.getMonth()
    let ageDay = age.getDay()
    let ageYear = age.getFullYear()
    let Year = curruentYear - ageYear
    let month;
    let day;
    if(curruentMonth - agemonth >= 0){
        month =curruentMonth - agemonth;
    }else {
        Year--;
        month = curruentMonth - agemonth + 12;
    }
    if(curruentday- ageDay >= 0)
        day = curruentday- ageDay
    else {
        month--
        day = curruentday- ageDay + 31
        if(month < 0){
            month = 11
            Year--; 
        }
    }
    
    
return `year ${Year} Month ${month} day ${day}`
}

console.log(calculate_age(new Date(1966, 11, 4)));


    


