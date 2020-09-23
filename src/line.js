import React from 'react';
import * as d3 from 'd3';
import bar from './line.csv'

class BarChart extends React.Component {
  componentDidMount() {
    this.drawChart();
  }

  midpoint(range) {
      return range[0] + (range[1] - range[0]) / 2.0;
    }

  drawChart() {
    const owidth = this.props.width
    const oheight = this.props.height

    var margin = {top: 20, right: 20, bottom: 70, left: 100},
        width = owidth - margin.left - margin.right,
        height = oheight - margin.top - margin.bottom;


        d3.csv(bar).then((data) => {
          console.log(data);
          //
          // var xScale = d3.scaleLinear()
          //     .range([0, width]); // output

          var yScale = d3.scaleLinear()
              .range([height, 0]); // output
          //
          var xScale = d3.scaleBand()
              .range([0, width]) // output
              .padding(0.1)

          // var yScale = d3.scaleLinear()
          //     .range([height, 0]); // output


var line = d3.line()
    .x(function(d, i) { return xScale(d.year); }) // set the x values for the line generator
    .y(function(d) { return yScale(d.value); }) // set the y values for the line generator
    .curve(d3.curveMonotoneX) // apply smoothing to the line



              xScale.domain(data.map(function(d) { return d.year; }));
              yScale.domain([0, d3.max(data, function(d) { return d.value; })]);

              const svg = d3.select("body").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(xScale));

            svg.append("g")
                .attr("class", "y axis")
                .call(d3.axisLeft(yScale));

            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "darkblue")
            .attr("stroke-width", 4)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", line);


                    const xmid = xScale.range()[0] + (xScale.range()[1] - xScale.range()[0]) / 2.0;
                    //
                    const ymid = yScale.range()[0] + (yScale.range()[1] - yScale.range()[0]) / 2.0;
                    //
                    const xtitle = svg.append('text')
                        .attr('class', 'axis-title')
                        .text('Year');
                    //
                    xtitle.attr('text-anchor', 'middle');
                    xtitle.attr('x', xmid);
                    xtitle.attr('y', height+40);
                    const ytitle = svg.append('text')
                      .attr('class', 'axis-title')
                      .text('Domestic Passenger Count')
                      ytitle.attr('x', -210);
                      ytitle.attr('y', -80);
                      ytitle.attr('dy', '1.75ex');
                      ytitle.attr('text-anchor', 'middle');
                      ytitle.attr('transform', 'rotate(-90)');

        })

    }

  render(){
    return <div id={"#" + this.props.id}></div>
  }


}

export default BarChart;
