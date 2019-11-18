'use script'



var totalCloumn = [];

var shops = [];

function Shop(
    name,
    min,
    max,
    avgCookie,
) {
    this.hour = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        this.name = name;
    this.min = min;
    this.max = max;
    this.avgCookie = avgCookie;
    this.amountsOfcookies = [];
    this.total = 0;
    shops.push(this);

}
hour = ["", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Total"]
var container2 = document.getElementById('tablePlace');
var article2El = document.createElement('article');
container2.appendChild(article2El);

var table = document.createElement('table');
article2El.appendChild(table);

var headerRowEl = document.createElement('tr');
table.appendChild(headerRowEl);
for (let u = 0; u < hour.length; u++) {
    var td1El = document.createElement('td');
    headerRowEl.appendChild(td1El);
    td1El.textContent = this.hour[u];
}


Shop.prototype.hourlyCustomers = function () {
    return Math.floor((Math.random() * (this.max - this.min + 1)) + this.min);
}
Shop.prototype.cookies = function () {


    for (var i = 0; i < this.hour.length; i++) {
        this.amountsOfcookies[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);
        this.total += this.amountsOfcookies[i];
    }
    
    
    
}
// switch (i) {
    //     case 0:
    //         var t0 = x+this.amountsOfcookies[0]
    //         totalCloumn.push(t0)
    //         break;
    //     case 1:
    //         var t1 =x+this.amountsOfcookies[1]
    //         totalCloumn.push(t1)
    //         break;
    //     case 2:
    //         var t2 = x+this.amountsOfcookies[2]
    //         totalCloumn.push(t2)
    //         break;
    //     case 3:
    //         var t3 =x+this.amountsOfcookies[3]
    //         totalCloumn.push(t3)
    //         break;
    //     case 4:
    //         var t4 =x+this.amountsOfcookies[4]
    //         totalCloumn.push(t4)
    //         break;
    //     case 5:
    //         var t5 = x+this.amountsOfcookies[5]
    //         totalCloumn.push(t5)
    //         break;
    //     case 6:
    //         var t6 = x+this.amountsOfcookies[6]
    //         totalCloumn.push(t6)
    //         break;
    //     case 7:
    //         var t7 = x+this.amountsOfcookies[7]
    //         totalCloumn.push(t7)
    //         break;
    //     case 8:
    //         var t8 =x+this.amountsOfcookies[8]
    //         totalCloumn.push(t8)
    //         break;
    //     case 9:
    //         var t9 =x+this.amountsOfcookies[9]
    //         totalCloumn.push(t9)
    //         break;
    //     case 10:
    //         var t10 = x+this.amountsOfcookies[10]
    //         totalCloumn.push(t10)
    //         break;
    //     case 11:
    //         var t11 = x+this.amountsOfcookies[11]
    //         totalCloumn.push(t11)
    //         break;
    //     case 12:
    //         var t12 = x+this.amountsOfcookies[12]
    //         totalCloumn.push(t12)
    //         break;
    //     case 13:
    //         var t13 =x+this.amountsOfcookies[13]
    //         totalCloumn.push(t13);
    //         break;
    //     default:
    //         break;
    // }
    
    
    Shop.prototype.render = function () {
        var container = document.getElementById('salesProfiles');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < this.hour.length; i++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = this.hour[i] + ": " + this.amountsOfcookies[i] + ` cookies`;
        }
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl),
        liEl.textContent = "Total " + ": " + this.total + ` cookies`;
        var x =0;
        for (var z = 0; z < shops.length; z++) {
           if (z == shops[z]) {
               
               var t = x + this.amountsOfcookies[z];
               totalCloumn.push(t);
           } 
        }
        console.log(totalCloumn);
    }
//////Table Function////////

Shop.prototype.render1 = function () {
    // var container2 = document.getElementById('tablePlace');
    // var article2El = document.createElement('article');
    // container2.appendChild(article2El);

    // var table = document.createElement('table');
    // article2El.appendChild(table);

    // var headerRowEl = document.createElement('tr');
    // table.appendChild(headerRowEl);
    // var td1El = document.createElement('td');
    // headerRowEl.appendChild(td1El);
    // td1El.textContent = this.hour;


    var dataRowEl = document.createElement('tr');
    table.appendChild(dataRowEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    dataRowEl.appendChild(tdEl);
    for (let x = 0; x < this.hour.length; x++) {

        var tdEl = document.createElement('td');
        tdEl.textContent = this.amountsOfcookies[x];
        dataRowEl.appendChild(tdEl);


    }
    var tdEl = document.createElement('td');
    tdEl.textContent = this.total;
    dataRowEl.appendChild(tdEl);


}

new Shop(
    "Seattle", 23, 65, 6.3
);
new Shop(
    "Tokyo", 3, 24, 1.2
);
new Shop(
    "Dubai", 11, 38, 3.7
);
new Shop(
    "Paris", 20, 38, 2.3
);
new Shop(
    "Lima", 2, 16, 4.6
);

for (var i = 0; i < shops.length; i++) {
    shops[i].hourlyCustomers();
    shops[i].cookies();
    shops[i].render();
    shops[i].render1();
}




var footerRowEl = document.createElement('tr');
table.appendChild(footerRowEl);
var tdEl = document.createElement('td');
tdEl.textContent = "Total";
footerRowEl.appendChild(tdEl);
for (let u = 0; u < hour.length; u++) {
    var td1El = document.createElement('td');
    footerRowEl.appendChild(td1El);

    td1El.textContent = this.totalCloumn[u];
}
















// var Seattle = {
// name:"seattle", 
// hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],   
// min: 23,
// max: 65,
// cust:0,
// avgCookie: 6.3,
// total:0,
// amountsOfcookies:[],
// hourlyCustomers: function(){
//     return Math.floor((Math.random() * (this.max - this.min + 1)) + this.min);

// },
// //  hourlyCustomers: function(min, max) {

// // this.cust = hourlyCustomers(min, max)
// // },
// cookies: function(){


// for (var i = 0; i<this.hour.length; i++) {  
//   this.amountsOfcookies[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);
// //   var x=0;
// //   this.total= x+ this.amountsOfcookies

//  this.total += this.amountsOfcookies[i];

// }
// // return (Math.random() * (this.max - this.min + 1)) + this.min;
// // console.log(total)
// },


// render: function(){
//     var container = document.getElementById("salesProfiles");
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (var i = 0; i < this.hour.length; i++) {
//         var liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = this.hour[i] + ": " +this.amountsOfcookies[i]  +` cookies` ;
//     }    
//         var liEl=document.createElement('li');
//         ulEl.appendChild(liEl),
//         liEl.textContent = "Total " + ": " +this.total +` cookies` ;
// },
// };

// // function hourlyCustomers(min, max) {

// //     return Math.floor(Math.random() * (max - min + 1)) + min;
// // }

// Seattle.hourlyCustomers(23, 65);
// Seattle.cookies();
// Seattle.render();
// console.table(Seattle);





// var tokyo = {
//     name:"Tokyo", 
//     hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],   
//     min: 3,
//     max: 24,
//     cust:0,
//     avgCookie: 1.2,
//     total:0,
//     amountsOfcookies:[],
//     hourlyCustomers: function(){
//         return Math.floor((Math.random() * (this.max - this.min + 1)) + this.min);

//     },
//     //  hourlyCustomers: function(min, max) {

//     // this.cust = hourlyCustomers(min, max)
//     // },
//     cookies: function(){


//     for (var i = 0; i<this.hour.length; i++) {  
//       this.amountsOfcookies[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);
//     //   var x=0;
//     //   this.total= x+ this.amountsOfcookies

//      this.total += this.amountsOfcookies[i];

//     }
//     // return (Math.random() * (this.max - this.min + 1)) + this.min;
//     // console.log(total)
//     },


//     render: function(){
//         var container = document.getElementById("salesProfiles");
//         var articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         var h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         var ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (var i = 0; i < this.hour.length; i++) {
//             var liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = this.hour[i] + ": " +this.amountsOfcookies[i]  +` cookies` ;
//         }    
//             var liEl=document.createElement('li');
//             ulEl.appendChild(liEl),
//             liEl.textContent = "Total " + ": " +this.total +` cookies` ;
//     },
//     };

//     // function hourlyCustomers(min, max) {

//     //     return Math.floor(Math.random() * (max - min + 1)) + min;
//     // }

//     tokyo.hourlyCustomers(23, 65);
//     tokyo.cookies();
//     tokyo.render();
//     console.table(tokyo);


//     var dubai = {
//         name:"Dubai", 
//         hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],   
//         min: 11,
//         max: 38,
//         cust:0,
//         avgCookie: 3.7,
//         total:0,
//         amountsOfcookies:[],
//         hourlyCustomers: function(){
//             return Math.floor((Math.random() * (this.max - this.min + 1)) + this.min);

//         },
//         //  hourlyCustomers: function(min, max) {

//         // this.cust = hourlyCustomers(min, max)
//         // },
//         cookies: function(){


//         for (var i = 0; i<this.hour.length; i++) {  
//           this.amountsOfcookies[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);
//         //   var x=0;
//         //   this.total= x+ this.amountsOfcookies

//          this.total += this.amountsOfcookies[i];

//         }
//         // return (Math.random() * (this.max - this.min + 1)) + this.min;
//         // console.log(total)
//         },


//         render: function(){
//             var container = document.getElementById("salesProfiles");
//             var articleEl = document.createElement('article');
//             container.appendChild(articleEl);
//             var h2El = document.createElement('h2');
//             articleEl.appendChild(h2El);
//             h2El.textContent = this.name;
//             var ulEl = document.createElement('ul');
//             articleEl.appendChild(ulEl);
//             for (var i = 0; i < this.hour.length; i++) {
//                 var liEl = document.createElement('li');
//                 ulEl.appendChild(liEl);
//                 liEl.textContent = this.hour[i] + ": " +this.amountsOfcookies[i]  +` cookies` ;
//             }    
//                 var liEl=document.createElement('li');
//                 ulEl.appendChild(liEl),
//                 liEl.textContent = "Total " + ": " +this.total +` cookies` ;
//         },
//         };

//         // function hourlyCustomers(min, max) {

//         //     return Math.floor(Math.random() * (max - min + 1)) + min;
//         // }

//         dubai.hourlyCustomers(23, 65);
//         dubai.cookies();
//         dubai.render();
//         console.table(dubai);


//         var paris = {
//             name:"Paris", 
//             hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],   
//             min: 20,
//             max: 38,
//             cust:0,
//             avgCookie: 2.3,
//             total:0,
//             amountsOfcookies:[],
//             hourlyCustomers: function(){
//                 return Math.floor((Math.random() * (this.max - this.min + 1)) + this.min);

//             },
//             //  hourlyCustomers: function(min, max) {

//             // this.cust = hourlyCustomers(min, max)
//             // },
//             cookies: function(){


//             for (var i = 0; i<this.hour.length; i++) {  
//               this.amountsOfcookies[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);
//             //   var x=0;
//             //   this.total= x+ this.amountsOfcookies

//              this.total += this.amountsOfcookies[i];

//             }
//             // return (Math.random() * (this.max - this.min + 1)) + this.min;
//             // console.log(total)
//             },


//             render: function(){
//                 var container = document.getElementById("salesProfiles");
//                 var articleEl = document.createElement('article');
//                 container.appendChild(articleEl);
//                 var h2El = document.createElement('h2');
//                 articleEl.appendChild(h2El);
//                 h2El.textContent = this.name;
//                 var ulEl = document.createElement('ul');
//                 articleEl.appendChild(ulEl);
//                 for (var i = 0; i < this.hour.length; i++) {
//                     var liEl = document.createElement('li');
//                     ulEl.appendChild(liEl);
//                     liEl.textContent = this.hour[i] + ": " +this.amountsOfcookies[i]  +` cookies` ;
//                 }    
//                     var liEl=document.createElement('li');
//                     ulEl.appendChild(liEl),
//                     liEl.textContent = "Total " + ": " +this.total +` cookies` ;
//             },
//             };

//             // function hourlyCustomers(min, max) {

//             //     return Math.floor(Math.random() * (max - min + 1)) + min;
//             // }

//             paris.hourlyCustomers(23, 65);
//             paris.cookies();
//             paris.render();
//             console.table(paris);




//  var lima = {
//             name:"Lima", 
//             hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],   
//             min: 2,
//             max: 16,
//             cust:0,
//             avgCookie: 4.6,
//             total:0,
//             amountsOfcookies:[],
//             hourlyCustomers: function(){
//                 return Math.floor((Math.random() * (this.max - this.min + 1)) + this.min);

//             },
//             //  hourlyCustomers: function(min, max) {

//             // this.cust = hourlyCustomers(min, max)
//             // },
//             cookies: function(){


//             for (var i = 0; i<this.hour.length; i++) {  
//               this.amountsOfcookies[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);
//             //   var x=0;
//             //   this.total= x+ this.amountsOfcookies

//              this.total += this.amountsOfcookies[i];

//             }
//             // return (Math.random() * (this.max - this.min + 1)) + this.min;
//             // console.log(total)
//             },


//             render: function(){
//                 var container = document.getElementById("salesProfiles");
//                 var articleEl = document.createElement('article');
//                 container.appendChild(articleEl);
//                 var h2El = document.createElement('h2');
//                 articleEl.appendChild(h2El);
//                 h2El.textContent = this.name;
//                 var ulEl = document.createElement('ul');
//                 articleEl.appendChild(ulEl);
//                 for (var i = 0; i < this.hour.length; i++) {
//                     var liEl = document.createElement('li');
//                     ulEl.appendChild(liEl);
//                     liEl.textContent = this.hour[i] + ": " +this.amountsOfcookies[i]  +` cookies` ;
//                 }    
//                     var liEl=document.createElement('li');
//                     ulEl.appendChild(liEl),
//                     liEl.textContent = "Total " + ": " +this.total +` cookies` ;
//             },
//             };

//             // function hourlyCustomers(min, max) {

//             //     return Math.floor(Math.random() * (max - min + 1)) + min;
//             // }

//             lima.hourlyCustomers(23, 65);
//             lima.cookies();
//             lima.render();
//             console.table(lima);


