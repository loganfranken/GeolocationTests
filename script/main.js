var resultsTable = document.createElement('table');

resultsTable.appendChild(createTableHeaderRow(['Latitude', 'Longitude', 'Accuracy', 'Time']));

var resultsWrapper = document.getElementById('results');
resultsWrapper.appendChild(resultsTable);

function createTableHeaderRow(columnNames) {

  var row = document.createElement('tr');

  columnNames.forEach(function(value) {

    var col = document.createElement('th');
    col.textContent = value;
    row.appendChild(col);

  });

  return row;

}
