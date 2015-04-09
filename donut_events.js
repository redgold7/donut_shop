(function() {
  var tableRow = document.getElementById('hourlyTotalTable');
  var storeForm = document.getElementById('addStoreForm');

  var handleStoreFormSubmit = function(event) {
    event.preventDefault();
    stores.push(new TopPot(event.target.addStoreName.value, Number.parseInt(event.target.addStoreMin.value), Number.parseInt(event.target.addStoreMax.value), Number.parseInt(event.target.addStoreAvg.value)));
    event.target.addStoreName.value = null;
    event.target.addStoreMin.value = null;
    event.target.addStoreMax.value = null;
    event.target.addStoreAvg.value = null;
    renderAllStores();
  };

  storeForm.addEventListener('submit', handleStoreFormSubmit);

})();
