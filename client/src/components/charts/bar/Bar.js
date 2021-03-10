import React, { useEffect, useCallback, useContext } from 'react';
import useWindowSize from '@rehooks/window-size';
import styled from 'styled-components';
import * as d3 from 'd3';
import { DataContext } from '../../utils/hooks';

const Bar = () => {

	const barData = useContext(DataContext);
	const windowSize = useWindowSize().innerWidth;

	const getWidth = useCallback(
		() => {
			if (windowSize < 1024) {
				return windowSize * 0.8;
			} else {
				return 700;
			}
		},
		[windowSize]
	);

	const elementWidth = getWidth() + 100;

	useEffect(
		() => {
			const data = barData.houses.reduce((acc, cur) => {
				if (!acc[cur.Year]) acc[cur.Year] = [];
				if (cur.Area !== 'England And Wales' && cur.Area !== 'Wales' && cur.Area !== 'England')
					acc[cur.Year].push(cur);
				return acc;
			}, []);

			const drawChart = () => {
				let time = 1995;

				const margin = { left: 140, right: 70, top: 20, bottom: 30 };
				const height = 575 - margin.top - margin.bottom;
				const width = getWidth() - margin.left;

				const g = d3
					.select('#bar')
					.append('svg')
					.attr('class', 'bar-svg')
					.attr('width', width + margin.left + margin.right)
					.attr('height', height + margin.top + margin.bottom)
					.append('g')
					.attr('transform', `translate(${margin.left},${margin.top})`);

				const x = d3.scaleTime().domain([1995, 2017]).range([0, width]);

				const y = d3.scaleBand().range([50, height]).padding(0.2);

				const yAxis = d3.axisLeft(y);
				g.append('g').attr('class', 'y axis').call(yAxis);

				const title = g
					.append('text')
					.attr('text-anchor', 'middle')
					.attr('y', 0)
					.attr('x', width / 2 - 40)
					.attr('class', 'title-label');
				title.text('London House Prices');

				const dateLabel = g
					.append('text')
					.attr('y', height - 5)
					.attr('x', width + 5)
					.attr('class', 'date-label')
					.attr('fill', '#fff');

				d3.interval(() => {
					time = time < 2017 ? time + 1 : 1995;
					update(data[time]);
				}, 280);

				update(data[1995]);

				function update(data) {
					const clear = [...new Map(data.map((obj) => [`${obj.Code}:${obj.Area}`, obj])).values()];
					const topResults = clear
						.sort((a, b) => {
							return parseInt(b.Value) - parseInt(a.Value);
						})
						.slice(0, 15);

					let t = d3.transition().duration(280);
					let bar = g.selectAll('.bar').data(topResults);
					let barLabel = g.selectAll('.barLabel').data(topResults);

					bar.exit().attr('class', 'exit bar').remove();

					barLabel.exit().attr('class', 'exit barLabel').remove();

					x.domain([0, d3.max(topResults, (d) => parseInt(d.Value))]);
					y.domain(topResults.map((d) => d.Area));

					bar
						.enter()
						.append('rect')
						.attr('class', 'enter bar')
						.merge(bar)
						.transition(t)
						.attr('y', (d) => y(d.Area))
						.attr('width', (d) => x(parseInt(d.Value)))
						.attr('height', (d) => y.bandwidth())
						.attr('fill', '#5d99cb');

					barLabel
						.enter()
						.append('text')
						.attr('class', 'enter barLabel')
						.merge(barLabel)
						.transition(t)
						.attr('y', (d) => y(d.Area) + 15)
						.attr('x', (d) => x(parseInt(d.Value)) + 10)
						.attr('whiteSpace', 'nowrap')
						.attr('height', (d) => y.bandwidth())
						.text((d) => `£${d.Value.toLocaleString()}`)
						.attr('fill', '#fff');

					g.selectAll('.y.axis').call(yAxis).selectAll('.domain, .tick line').remove();

					dateLabel.text(data[0].Year);
				}
			};

			// The chart is redrawn when the device orientation is changed.
			// So if present remove it.
			if (document.getElementsByClassName('bar-svg').length) {
				document.getElementsByClassName('bar-svg')[0].remove();
				drawChart();
			} else {
				drawChart();
			}
		},
		[barData, getWidth]
	);
	return (
		<BarChart>
			<div id='bar' data-testid='bar-chart' width={elementWidth.toFixed().toString()} height='550' />
		</BarChart>
	);
}

export default Bar;

const BarChart = styled.div`
	.bar-svg {
		margin: 0 auto;
		display: block;
	}

	.bar {
		font-size: 14px;
	}
	.barLabel {
		font-size: 12px;
	}

	.date-label {
		font-size: 24px;
	}
	.title-label {
		font-size: 24px;
		fill: #fff;
	}

	.enter.bar {
		font-size: 20px;
	}

	@media (max-width: 425px) {
		.date-label {
			font-size: 20px;
		}

		.title-label {
			font-size: 20px;
		}
		.enter.bar {
			font-size: 10px;
		}
	}
`;
