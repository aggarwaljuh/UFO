const tableData = data;
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
  tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
      // Append a row to the table body
    let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}
function handleClick() {
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };
  buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
