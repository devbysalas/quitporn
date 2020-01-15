import React from 'react';
import * as d3 from 'd3';
import { Container, Row } from 'react-bootstrap';

class BarChart extends React.Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;
    const svg = d3
      .select(this.refs.myVisDiv)
      .append('svg')
      .attr('width', this.props.width)
      .attr('height', this.props.height);

    const h = this.props.height;

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => h - 10 * d)
      .attr('width', 65)
      .attr('height', (d, i) => d * 10)
      .attr('fill', 'green');

    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(d => d)
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => h - 10 * d - 3);

    //selection.attr(“property”, (d, i) => {})
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center my-5">
          <div ref="myVisDiv"></div>
        </Row>
      </Container>
    );
  }
}

export default BarChart;
