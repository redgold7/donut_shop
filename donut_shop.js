

  window.stores = [];
  var TopPot = function(branchName, minCust, maxCust, avgPerCust) {
      this.branchName = branchName;
      if (!(branchName && minCust && maxCust && avgPerCust)) {
        throw "Donut Shops need min and max customers, average per customer, and opening and closing hours";
      };
      this.minCust = minCust;
      this.maxCust = maxCust;
      this.avgPerCust = avgPerCust;
      this.hourlyTotals = [];
    };

    TopPot.prototype.generateRandom = function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    };

    TopPot.prototype.donutsPerHour = function() {
      return Math.floor(this.generateRandom() * this.avgPerCust);
    };

    TopPot.prototype.donutsPerDay = function() {
      var total = 0;
      for (var i = 0; i < 11; i++) {
        var hourlyDonuts = this.donutsPerHour();
        this.hourlyTotals.push(hourlyDonuts);
        total += hourlyDonuts;
      }
      return total;
    };

    TopPot.prototype.render = function() {
      var elRow = document.createElement('tr');
      var elHead = document.createElement('th');
      var totalDonuts = this.donutsPerDay();
      var elTotalDonuts = document.createElement('td');
      elHead.innerHTML = this.branchName;
      elRow.appendChild(elHead);
      for (var i = 0; i < 11; i++) {
        var elTd = document.createElement('td');
        elTd.innerHTML = this.hourlyTotals[i];
        elRow.appendChild(elTd);
      }
      elTotalDonuts.innerHTML = totalDonuts;
      elRow.appendChild(elTotalDonuts);
      return elRow;
    };

    var renderAllStores = function() {
      var hourlyTotalTable = document.getElementById('hourlyTotalTable');
      hourlyTotalTable.innerHTML = '<tr><th><strong><u>Location:</u></strong></th><td>7:00 AM</td><td>8:00 AM</td><td>9:00 AM</td><td>10:00 AM</td><td>11:00 AM</td><td>12:00 PM</td><td>1:00 PM</td><td>2:00 PM</td><td>3:00 PM</td><td>4:00 PM</td><td>5:00 PM</td><td><strong><u>Total: </u></strong></td></tr>';
      stores.forEach(function(store) {
        hourlyTotalTable.appendChild(store.render());
      });
    };

    stores.push(new TopPot('Downtown', 8, 43, 4.5));
    stores.push(new TopPot('Capitol Hill', 4, 37, 2));
    stores.push(new TopPot('South Lake Union', 9, 23, 6.33));
    stores.push(new TopPot('Wedgewood', 2, 28, 1.25));
    stores.push(new TopPot('Ballard', 8, 58, 3.75));

    // downtown.render();
    // capitolHill.render();
    // southLakeUnion.render();
    // wedgewood.render();
    // ballard.render();
    renderAllStores();
