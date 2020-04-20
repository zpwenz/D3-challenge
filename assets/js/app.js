// @TODO: YOUR CODE HERE!
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#scatter")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


//Read the data
d3.csv("https://raw.githubusercontent.com/zpwenz/D3-HW-Data/master/data.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([5, 25])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
  svg.append("text")      // text label for the x axis
    .attr("x", 225 )
    .attr("y", 390 )
    .style("text-anchor", "middle")
    .text("Poverty rate (State)");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([20, 40])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -50)
    .attr("x",  -150)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Obesity rate (state)")
  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.poverty); } )
      .attr("cy", function (d) { return y(d.obesity); } )
      .attr("r", 8)
      .style("fill", "blue")
  svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("cx", function (d) { return x(d.poverty); } )
      .attr("cy", function (d) { return y(d.obesity); } )
      .text(data.abbr)

})