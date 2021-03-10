import React, { useEffect, useCallback, useContext } from 'react';
import styled from 'styled-components';
import useWindowSize from '@rehooks/window-size';
import * as d3 from 'd3';
import { DataContext } from '../../utils/hooks';

const Bubble = () => {
	const bubbleData = useContext(DataContext);

	const windowSize = useWindowSize().innerWidth;

	const getWidth = useCallback(
		() => {
			if (windowSize < 1024) {
				return windowSize * 0.7;
			} else {
				return 700;
			}
		},
		[windowSize]
	);

	const elementWidth = getWidth() + 100;
	useEffect(
		() => {
			const drawChart = () => {
				const margin = { left: 65, right: 100, top: 100, bottom: 100 };
				const height = 550 - margin.top - margin.bottom;
				const width = getWidth();

				const g = d3
					.select('#bubble')
					.append('svg')
					.attr('class', 'bubble-svg')
					.attr('width', width + margin.left + margin.right)
					.attr('height', height + margin.top + margin.bottom)
					.append('g')
					.attr('transform', `translate(${margin.left}, ${margin.top})`);
				let time = 0;

				const toolTip = d3.select('#bubble').append('div').attr('class', 'toolTip').style('opacity', 0);
				const x = d3.scaleLog().base(10).range([0, width]).domain([142, 150000]);
				const y = d3.scaleLinear().range([height, 0]).domain([0, 90]);
				const area = d3.scaleLinear().range([25 * Math.PI, 1500 * Math.PI]).domain([2000, 1400000000]);
				const continentColor = d3.scaleOrdinal(d3.schemeDark2);

				const title = g
					.append('text')
					.attr('text-anchor', 'middle')
					.attr('y', -60)
					.attr('x', width / 2 - 20)
					.attr('class', 'bubble-title');
				title.text('Life Expectancy vs GDP');

				const xLabel = g
					.append('text')
					.attr('y', height + 50)
					.attr('x', width / 2)
					.attr('font-size', '20px')
					.attr('text-anchor', 'middle')
					.attr('fill', '#fff');
				xLabel.text('GDP Per Capita ($)');

				const yLabel = g
					.append('text')
					.attr('transform', 'rotate(-90)')
					.attr('y', -40)
					.attr('x', -170)
					.attr('font-size', '20px')
					.attr('text-anchor', 'middle')
					.attr('fill', '#fff');
				yLabel.text('Life Expectancy (Years)');

				const timeLabel = g
					.append('text')
					.attr('y', height - 10)
					.attr('x', width - 40)
					.attr('font-size', '30px')
					.attr('opacity', '0.6')
					.attr('text-anchor', 'middle')
					.attr('fill', '#fff')
					.text('1965');

				const xAxisCall = d3.axisBottom(x).tickValues([400, 4000, 40000]).tickFormat(d3.format('$'));
				g.append('g').attr('class', 'x axis').attr('transform', 'translate(0,' + height + ')').call(xAxisCall);

				const yAxisCall = d3.axisLeft(y).tickFormat((d) => {
					return +d;
				});
				g.append('g').attr('class', 'y axis').call(yAxisCall);

				const continents = ['africa', 'americas', 'asia', 'europe'];
				const legend = g.append('g').attr('transform', `translate(${width - 10}, ${height - 125})`);

				continents.forEach((continent, i) => {
					let legendRow = legend.append('g').attr('transform', `translate(0, ${i * 20})`);

					legendRow
						.append('rect')
						.attr('width', 10)
						.attr('height', 10)
						.attr('fill', continentColor(continent));

					legendRow
						.append('text')
						.attr('font-size', '14px')
						.attr('y', 9.5)
						.attr('x', -5)
						.attr('text-anchor', 'end')
						.style('text-transform', 'capitalize')
						.attr('fill', '#fff')
						.text(continent);
				});
				const formattedData = bubbleData.gdp.map((year) => {
					return year['countries']
						.filter((country) => {
							const dataExists = country.income && country.life_exp;
							return dataExists;
						})
						.map((country) => {
							country.income = +country.income;
							country.life_exp = +country.life_exp;
							return country;
						});
				});

				d3.interval(() => {
					time = time < 49 ? time + 1 : 0;
					update(formattedData[time]);
				}, 180);
				update(formattedData[0]);

				function update(data) {
					const t = d3.transition().duration(180);

					const circles = g.selectAll('circle').data(data, (d) => {
						return d.country;
					});

					circles.exit().attr('class', 'exit').remove();

					circles
						.enter()
						.append('circle')
						.attr('class', 'enter')
						.attr('fill', (d) => {
							return continentColor(d.continent);
						})
						.on('mouseover', (d) => {
							toolTip.transition().duration(200).style('opacity', 0.9);
							toolTip
								.html(
									`
                <table>
                  <tr>
                    <th>Country:</th>
                    <td>${d.country}</td>
                  </tr>
                  <tr>
                    <th>Continent:</th>
                    <td>${d.continent}</td>
                  </tr>
                  <tr>
                    <th>Life Expectancy:</th>
                    <td>${d.life_exp}</td>
                  </tr>
                  <tr>
                    <th>Income:</th>
                    <td> $${d.income}</td>
                  </tr>
                  <tr>
                    <th>Population:</th>
                    <td>${d.population}</td>
                  </tr>
                </table>`
								)
								.style('left', `${d3.event.layerX}px`)
								.style('top', `${d3.event.layerY - 28}px`);
						})
						.on('mouseout', () => toolTip.transition().duration(500).style('opacity', 0))
						.merge(circles)
						.transition(t)
						.attr('cy', (d) => {
							return y(d.life_exp);
						})
						.attr('cx', (d) => {
							return x(d.income);
						})
						.attr('r', (d) => {
							return Math.sqrt(area(d.population) / Math.PI);
						});

					timeLabel.text(+(time + 1965));
				}
			};

			// The chart is redrawn when the device orientation is changed.
			// So if present remove it.
			if (document.getElementsByClassName('bubble-svg').length) {
				document.getElementsByClassName('bubble-svg')[0].remove();
				drawChart();
			} else {
				drawChart();
			}
		},
		[bubbleData, getWidth]
	);
	return (
		<BubbleChart>
			<div id='bubble' data-testid='bubble-chart' width={elementWidth.toFixed().toString()} height='550' />
		</BubbleChart>
	);
}

const BubbleChart = styled.div`
	margin: 50px auto;

	.bubble-svg {
		display: block;
		margin: 0 auto;
	}

	.toolTip {
		font-weight: bold;
		font-size: 14px;
		padding: 2px;
		color: #fff;
		pointer-events: none;
		position: absolute;
		width: 350px;
		text-transform: capitalize;
	}

	.toolTip td {
		text-align: right;
		padding-left: 10px;
	}

	.toolTip th {
		text-align: left;
	}

	.bubble-title {
		font-size: 24px;
		fill: #fff;
	}

	@media (max-width: 1366px) {
		.toolTip {
			display: none;
		}
	}

	@media (max-width: 425px) {
		.bubble-svg {
			margin: 0 10px;
		}

		.bubble-title {
			font-size: 19px;
			background: red;
			width: 100%;
			display: block;
			border: 1px solid #fff;
			position: absolute;
		}
	}
`;

export default Bubble;
