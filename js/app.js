'use script'
var Seattle = {
name:"seattle", 
hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],   
min: 23,
max: 65,
cust:0,
avgCookie: 6.3,
total:0,
amountsOfcookies:[],
hourlyCustomers: function(){
    return Math.floor((Math.random() * (this.max - this.min + 1)) + this.min);
  
},
//  hourlyCustomers: function(min, max) {
    
// this.cust = hourlyCustomers(min, max)
// },
cookies: function(){
   
    
for (var i = 0; i<this.hour.length; i++) {  
  this.amountsOfcookies[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);
//   var x=0;
//   this.total= x+ this.amountsOfcookies

 this.total += this.amountsOfcookies[i];
  
}
// return (Math.random() * (this.max - this.min + 1)) + this.min;
// console.log(total)
},


render: function(){
    var container = document.getElementById("salesProfiles");
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
        liEl.textContent = this.hour[i] + ": " +this.amountsOfcookies[i]  +` cookies` ;
    }    
        var liEl=document.createElement('li');
        ulEl.appendChild(liEl),
        liEl.textContent = "Total " + ": " +this.total +` cookies` ;
},
};

// function hourlyCustomers(min, max) {
    
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

Seattle.hourlyCustomers(23, 65);
Seattle.cookies();
Seattle.render();
console.table(Seattle);





var tokyo = {
    name:"Tokyo", 
    hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],   
    min: 3,
    max: 24,
    cust:0,
    avgCookie: 1.2,
    total:0,
    amountsOfcookies:[],
    hourlyCustomers: function(){
        return Math.floor((Math.random() * (this.max - this.min + 1)) + this.min);
      
    },
    //  hourlyCustomers: function(min, max) {
        
    // this.cust = hourlyCustomers(min, max)
    // },
    cookies: function(){
       
        
    for (var i = 0; i<this.hour.length; i++) {  
      this.amountsOfcookies[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);
    //   var x=0;
    //   this.total= x+ this.amountsOfcookies
    
     this.total += this.amountsOfcookies[i];
      
    }
    // return (Math.random() * (this.max - this.min + 1)) + this.min;
    // console.log(total)
    },
    
    
    render: function(){
        var container = document.getElementById("salesProfiles");
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
            liEl.textContent = this.hour[i] + ": " +this.amountsOfcookies[i]  +` cookies` ;
        }    
            var liEl=document.createElement('li');
            ulEl.appendChild(liEl),
            liEl.textContent = "Total " + ": " +this.total +` cookies` ;
    },
    };
    
    // function hourlyCustomers(min, max) {
        
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    
    tokyo.hourlyCustomers(23, 65);
    tokyo.cookies();
    tokyo.render();
    console.table(tokyo);


    var dubai = {
        name:"Dubai", 
        hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],   
        min: 11,
        max: 38,
        cust:0,
        avgCookie: 3.7,
        total:0,
        amountsOfcookies:[],
        hourlyCustomers: function(){
            return Math.floor((Math.random() * (this.max - this.min + 1)) + this.min);
          
        },
        //  hourlyCustomers: function(min, max) {
            
        // this.cust = hourlyCustomers(min, max)
        // },
        cookies: function(){
           
            
        for (var i = 0; i<this.hour.length; i++) {  
          this.amountsOfcookies[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);
        //   var x=0;
        //   this.total= x+ this.amountsOfcookies
        
         this.total += this.amountsOfcookies[i];
          
        }
        // return (Math.random() * (this.max - this.min + 1)) + this.min;
        // console.log(total)
        },
        
        
        render: function(){
            var container = document.getElementById("salesProfiles");
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
                liEl.textContent = this.hour[i] + ": " +this.amountsOfcookies[i]  +` cookies` ;
            }    
                var liEl=document.createElement('li');
                ulEl.appendChild(liEl),
                liEl.textContent = "Total " + ": " +this.total +` cookies` ;
        },
        };
        
        // function hourlyCustomers(min, max) {
            
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        // }
        
        dubai.hourlyCustomers(23, 65);
        dubai.cookies();
        dubai.render();
        console.table(dubai);


        var paris = {
            name:"Paris", 
            hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],   
            min: 20,
            max: 38,
            cust:0,
            avgCookie: 2.3,
            total:0,
            amountsOfcookies:[],
            hourlyCustomers: function(){
                return Math.floor((Math.random() * (this.max - this.min + 1)) + this.min);
              
            },
            //  hourlyCustomers: function(min, max) {
                
            // this.cust = hourlyCustomers(min, max)
            // },
            cookies: function(){
               
                
            for (var i = 0; i<this.hour.length; i++) {  
              this.amountsOfcookies[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);
            //   var x=0;
            //   this.total= x+ this.amountsOfcookies
            
             this.total += this.amountsOfcookies[i];
              
            }
            // return (Math.random() * (this.max - this.min + 1)) + this.min;
            // console.log(total)
            },
            
            
            render: function(){
                var container = document.getElementById("salesProfiles");
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
                    liEl.textContent = this.hour[i] + ": " +this.amountsOfcookies[i]  +` cookies` ;
                }    
                    var liEl=document.createElement('li');
                    ulEl.appendChild(liEl),
                    liEl.textContent = "Total " + ": " +this.total +` cookies` ;
            },
            };
            
            // function hourlyCustomers(min, max) {
                
            //     return Math.floor(Math.random() * (max - min + 1)) + min;
            // }
            
            paris.hourlyCustomers(23, 65);
            paris.cookies();
            paris.render();
            console.table(paris);


            
        
 var lima = {
            name:"Lima", 
            hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],   
            min: 2,
            max: 16,
            cust:0,
            avgCookie: 4.6,
            total:0,
            amountsOfcookies:[],
            hourlyCustomers: function(){
                return Math.floor((Math.random() * (this.max - this.min + 1)) + this.min);
              
            },
            //  hourlyCustomers: function(min, max) {
                
            // this.cust = hourlyCustomers(min, max)
            // },
            cookies: function(){
               
                
            for (var i = 0; i<this.hour.length; i++) {  
              this.amountsOfcookies[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);
            //   var x=0;
            //   this.total= x+ this.amountsOfcookies
            
             this.total += this.amountsOfcookies[i];
              
            }
            // return (Math.random() * (this.max - this.min + 1)) + this.min;
            // console.log(total)
            },
            
            
            render: function(){
                var container = document.getElementById("salesProfiles");
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
                    liEl.textContent = this.hour[i] + ": " +this.amountsOfcookies[i]  +` cookies` ;
                }    
                    var liEl=document.createElement('li');
                    ulEl.appendChild(liEl),
                    liEl.textContent = "Total " + ": " +this.total +` cookies` ;
            },
            };
            
            // function hourlyCustomers(min, max) {
                
            //     return Math.floor(Math.random() * (max - min + 1)) + min;
            // }
            
            lima.hourlyCustomers(23, 65);
            lima.cookies();
            lima.render();
            console.table(lima);




















































// var tokyo = {
//     name:"Tokyo", 
//     hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],   
//     min: 3,
//     max: 24,
//     total:0,
//     cust:0,
//     avgCookie: 1.2,
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
//       this.total += this.amountsOfcookies[i];

//     }
//     // return (Math.random() * (this.max - this.min + 1)) + this.min;
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
//             liEl.textContent = this.hour[i]+ ": " +this.amountsOfcookies[i]  +` cookies` ;
//         }    
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
//         hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","Total"],   
//         min: 11,
//         max: 38,
//         cust:0,
//         avgCookie: 3.7,
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
        
//         }
//         // return (Math.random() * (this.max - this.min + 1)) + this.min;
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
//                 liEl.textContent = this.hour[i]+ ": " +this.amountsOfcookies[i]  +` cookies` ;
//             }    
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
//             hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","Total"],   
//             min: 20,
//             max: 38,
//             cust:0,
//             avgCookie: 2.3,
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
            
//             }
//             // return (Math.random() * (this.max - this.min + 1)) + this.min;
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
//                     liEl.textContent = this.hour[i]+ ": " +this.amountsOfcookies[i]  +` cookies` ;
//                 }    
//             },
//             };
            
//             // function hourlyCustomers(min, max) {
                
//             //     return Math.floor(Math.random() * (max - min + 1)) + min;
//             // }
            
//             paris.hourlyCustomers(23, 65);
//             paris.cookies();
//             paris.render();
//             console.table(paris);

//             var Lima = {
//                 name:"lima", 
//                 hour:["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","Total"],   
//                 min: 2,
//                 max: 16,
//                 cust:0,
//                 avgCookie: 4.6,
//                 amountsOfcookies:[],
//                 hourlyCustomers: function(){
//                     return Math.floor((Math.random() * (this.max - this.min + 1)) + this.min);
                  
//                 },
//                 //  hourlyCustomers: function(min, max) {
                    
//                 // this.cust = hourlyCustomers(min, max)
//                 // },
//                 cookies: function(){
                   
                    
//                 for (var i = 0; i<this.hour.length; i++) {  
//                   this.amountsOfcookies[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);
                
//                 }
//                 // return (Math.random() * (this.max - this.min + 1)) + this.min;
//                 },
                
                
//                 render: function(){
//                     var container = document.getElementById("salesProfiles");
//                     var articleEl = document.createElement('article');
//                     container.appendChild(articleEl);
//                     var h2El = document.createElement('h2');
//                     articleEl.appendChild(h2El);
//                     h2El.textContent = this.name;
//                     var ulEl = document.createElement('ul');
//                     articleEl.appendChild(ulEl);
//                     for (var i = 0; i < this.hour.length; i++) {
//                         var liEl = document.createElement('li');
//                         ulEl.appendChild(liEl);
//                         liEl.textContent = this.hour[i]+ ": " +this.amountsOfcookies[i]  +` cookies` ;
//                     }    
//                 },
//                 };
                
//                 // function hourlyCustomers(min, max) {
                    
//                 //     return Math.floor(Math.random() * (max - min + 1)) + min;
//                 // }
                
//                 Lima.hourlyCustomers(23, 65);
//                 Lima.cookies();
//                 Lima.render();
//                 console.table(Lima);