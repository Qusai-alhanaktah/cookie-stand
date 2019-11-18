'use script'

var totalCloumn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
        var x = 0;
        this.amountsOfcookies[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);
        this.total += this.amountsOfcookies[i];
        switch (i) {
            case 0:
                totalCloumn[0] = totalCloumn[0] + this.amountsOfcookies[0]
                break;
            case 1:
                totalCloumn[1] = totalCloumn[1] + this.amountsOfcookies[1]
                break;
            case 2:
                totalCloumn[2] = totalCloumn[2] + this.amountsOfcookies[2]
                break;
            case 3:
                totalCloumn[3] = totalCloumn[3] + this.amountsOfcookies[3]
                break;
            case 4:
                totalCloumn[4] = totalCloumn[4] + this.amountsOfcookies[4]
                break;
            case 5:
                totalCloumn[5] = totalCloumn[5] + this.amountsOfcookies[5]
                break;
            case 6:
                totalCloumn[6] = totalCloumn[6] + this.amountsOfcookies[6]
                break;
            case 7:
                totalCloumn[7] = totalCloumn[7] + this.amountsOfcookies[7]
                break;
            case 8:
                totalCloumn[8] = totalCloumn[8] + this.amountsOfcookies[8]
                break;
            case 9:
                totalCloumn[9] = totalCloumn[9] + this.amountsOfcookies[9]
                break;
            case 10:
                totalCloumn[10] = totalCloumn[10] + this.amountsOfcookies[10]
                break;
            case 11:
                totalCloumn[11] = totalCloumn[11] + this.amountsOfcookies[11]
                break;
            case 12:
                totalCloumn[12] = totalCloumn[12] + this.amountsOfcookies[12]
                break;
            case 13:
                totalCloumn[13] = totalCloumn[13] + this.amountsOfcookies[13]
                break;
            default:
                break;
        }
    }

    console.log(totalCloumn)

}

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

}
//////Table Function////////

Shop.prototype.render1 = function () {



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