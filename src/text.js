import * as d3 from 'd3'

const w = 300
const h = 300
const padding = 2
const dataset = [5,10,15,20,25,60,12,65,12,35]

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h)

svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
		.attr("x", (d,i) => i * (w/dataset.length))
		.attr("y", d => h - d)
		.attr("width", w/dataset.length - padding)
		.attr("height", d => d)
		.attr("fill",  d => colorPick(d))

svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text( d => d)
		.attr("text-anchor", "middle")
		.attr("x", (d,i) => i * (w/dataset.length)+(w/dataset.length - padding) / 2)
		.attr("y", d => (h - d)+14)
		.attr("font-size", 12)
		.attr("fill", "#ffffff")


function colorPick(value){
	if (value < 30) {
		return "#666666"
	} else if (value > 30) {
		return "#FF0033"
	}
}