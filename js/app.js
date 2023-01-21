
//   <!--  |---------------------------|
//         | SwiftMan by ARMAN RAHMAN  |
//         |---------------------------| -->


let data = [
    [   
        ['রবিবার'],
        ['সোমবার'],
        ['মঙ্গলবার'],
        ['বুধবার'],
        ['বৃহস্পতিবার'],
        ['শুক্রবার'],
        ['শনিবার'],
        
    ],
    [
        ['ভাত', 'সবজি দিয়ে ছোট মাছ', 'ভর্তা', 'ডাল'],
        ['ভাত','মুরগী ভুনা', 'ভাজি/সবজি', 'ডাল'],
        ['ভাত','ডিম ভুনা', 'শাক/সবজি', 'ডাল'],
        ['ভাত','মাছ', 'ভর্তা', 'ডাল'],
        ['ভাত','ডিম ভুনা', 'মুগডাল/বুটেরডাল'],
        ['সাদা পোলাও','গরুর গোস্তভুনা', 'সালাদ/সবজি'],
        ['ভাত','পাঙ্গাস মাছ', 'ভাজি/ডিম', 'ডাল'],
    ],
    [
        
        ['ভাত', 'সবজি দিয়ে ছোট মাছ', 'ভর্তা', 'ডাল'],
        ['ভাত','মুরগী ভুনা', 'ভর্তা', 'ডাল'],
        ['ভাত','ডিম ভুনা', 'শাক/সবজি', 'ডাল'],
        ['ভাত','মাছ', 'ভাজি/সবজি', 'ডাল'],
        ['ভাত','মুরগী ভুনা', 'সবজি','ডাল'],
        ['খিচুড়ি','ডিম ভুনা', 'ভর্তা'],
        ['ভাত','পাঙ্গাস মাছ', 'ভাজি/ডিম', 'ডাল'],
    ],
    [
        ['ভাত', 'সবজি দিয়ে ছোট মাছ', 'ভর্তা', 'ডাল'],
        ['ভাত','মুরগী ভুনা', 'ভাজি', 'ডাল'],
        ['ভাত','ডিম ভুনা', 'শাক/সবজি', 'ডাল'],
        ['ভাত','মাছ', 'ভর্তা', 'ডাল'],
        ['ভাত','ডিম ভুনা', 'মুগডাল/বুটেরডাল'],
        ['চিকেন বিরিয়ানি','সালাদ'],
        ['ভাত','পাঙ্গাস মাছ', 'ভাজি/ডিম', 'ডাল'],
    ],
    [
        ['ভাত', 'সবজি দিয়ে ছোট মাছ', 'ভর্তা', 'ডাল'],
        ['ভাত','মুরগী ভুনা', 'শাক/ভাজি/সবজি', 'ডাল'],
        ['ভাত','ডিম ভুনা', 'শাক/সবজি', 'ডাল'],
        ['ভাত','মাছ', 'সবজি', 'ডাল'],
        ['ভাত','মুরগী ভুনা', 'শাক/সবজি', 'ডাল'],
        ['খিচুড়ি','ডিম ভুনা', 'ভর্তা'],
        ['ভাত','পাঙ্গাস মাছ', 'ভাজি/ডিম', 'ডাল'],
    ],
];

// Full Menu Start
function weekData(week){
    let items = "";
    for(let i = 0; i < data[0].length; i++){
        items += `<tr><td>${data[0][i]}</td><td>${data[week][i]}</td></tr>`;
    }

    return items;
}

let fullTable = "";


for(let j = 1; j < data.length; j++){
    if(j == 1){
        var weekName = "1st";
    }else if(j == 2){
        var weekName = "2nd";
    }else if(j == 3){
        var weekName = "3rd";
    }else{
        var weekName = "4th";
    }

    fullTable += `
    <div class="d-flex justify-content-center">
        <div class="week"> ${weekName} Week</div>
    </div>
    <div class="d-flex justify-content-center">
        <table class="table table-hover menu-table">
            <thead>
                <tr class="table-header">
                        <th scope="col">Day</th>
                        <th scope="col">Menu</th>
                </tr>
            </thead>
            <tbody>
            ${weekData(j)}
            </tbody>
        </table>
    </div> 
    `;
}

document.querySelector("#tableData").innerHTML = fullTable;

// Full Menu End

// Menu with Icon 

function Icon(name){
    let singleItem = `<div class="col-6 col-md-3 mt-5"> <div class="item">`;
    if(name == "ভাত"){
       singleItem += `
            <img src="./images/menu/rice.png" alt="${name}">
            `;
    }else if(name == "সবজি দিয়ে ছোট মাছ"){
        singleItem += `
            <img src="./images/menu/fish.png" alt="${name}">
            `;
    }else if(name == "ডাল"){
        singleItem += `
            <img src="./images/menu/dal.png" alt="${name}">
            `;
    }else{
        singleItem += `
            <img src="./images/menu/dal.png" alt="${name}">
            `;
    }
    singleItem += `<h2>${name}</h2> </div></div>`;

    return singleItem;
}

// Today's Menu Start

function todaymenu(){
    let today = new Date();
    let date = today.getDate();
    let _day = today.getDay(); 
    
    if(date <= 7){
        return data[1][_day];
    }else if(date <= 14){
        return data[2][_day];
    }else if(date <= 21){
        return data[3][_day];
    }else{
        return data[4][_day];
    }
}
let TodayMenu = todaymenu();

let allItem = "";

function allItems(findbyDay){
    for(var k=0; k<findbyDay.length; k++){
        allItem += Icon(findbyDay[k]);
        console.log(findbyDay[k]);
    }

    return allItem;
}

 document.querySelector('#todaysMenu').innerHTML = allItems(TodayMenu);


// Today's Menu End

 // tomorrow's Menu End

function tomorrowmenu(){
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate()+1);
    let date = tomorrow.getDate();
    let _day = tomorrow.getDay(); 
    
    if(date <= 7){
        return data[1][_day];
    }else if(date <= 14){
        return data[2][_day];
    }else if(date <= 21){
        return data[3][_day];
    }else{
        return data[4][_day];
    }
}
singleItem = "";
let TomorrowsMenu = todaymenu();
console.log(TomorrowsMenu);

//  tomorrowmenu();
//  document.querySelector('#tomorrowsMenu').innerHTML = allItems(TomorrowsMenu);