import React from 'react';
import * as d3 from "d3";
import styled from 'styled-components';

const Path = styled.path`
  fill: ${props => d3.schemePaired[props.index]};
  stroke: black;
`

const Arc = ({ arcData }) => {
  const arc = d3.arc()
  .innerRadius(0)
  .outerRadius(75);

  return (
    <Path d={arc(arcData)} index={arcData.index}>Test</Path>
  )
}

const PieChart = ({ data, x, y }) => {
  const pie = d3.pie().value(d => d.amount);
  return (
    <g transform={`translate(${x}, ${y})`}>
      {pie(data).map((d, index) =>{
        console.log(d);
        return(
        <Arc key={`id-${index}`} arcData={d}/>
        )
      })}
    </g>
  )
}

export default PieChart;