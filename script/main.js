var GeoStats = (function () {

  // Record current time
  var startTime = new Date();

  // Table
  var resultsTable = document.createElement('table');

  // Header Row
  resultsTable.appendChild(createTableRow(['Latitude', 'Longitude', 'Accuracy', 'Time'], true));

  var resultsWrapper = document.getElementById('results');
  resultsWrapper.appendChild(resultsTable);

  function createTableRow(columnValues, isHeader) {

    var row = document.createElement('tr');

    columnValues.forEach(function(value) {

      var col = document.createElement(isHeader ? 'th' : 'td');
      col.textContent = value;
      row.appendChild(col);

    });

    return row;

  }

  function recordResults(pos) {

    var now = new Date();
    var timeDiff = now - startTime;

    resultsTable.appendChild(createTableRow([
        pos.coords.latitude, pos.coords.longitude,
        pos.coords.accuracy, timeDiff
    ]));

  }

  return {
    recordResults: recordResults
  }

})();
