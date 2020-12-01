import * as d3 from 'd3';

const w = 400
const h = 350
const padding = 2
const dataset = [
	{"month":10, "sale":100},
	{"month":20, "sale":130},
	{"month":30, "sale":250},
	{"month":40, "sale":300},
	{"month":50, "sale":265},
	{"month":60, "sale":225},
	{"month":70, "sale":180},
	{"month":80, "sale":120},
	{"month":90, "sale":145},
	{"month":100, "sale":130}	
]

let svg = d3.select("body").append("svg")
	.attr("width", w).attr("height", h)

const lineFun = d3.line()
	.curve(d3.curveBasis)
	.x( d => d.month*3-2)
	.y( d => h-d.sale)

const viz = svg.append("path")
	.attr("d", lineFun(dataset))
	.attr("stroke", "purple")
	.attr("stroke-width", 2)
	.attr("fill", "none")

const labels = svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text(d => d.sale)
		.attr("x", d => d.month*3-25)
		.attr("y", d => h-d.sale)
		.attr("font-size", "12px")
		.attr("text-anchor", "start")
		.attr("dy", ".35em")
		.attr("font-weight", (d,i) => 
			i==0 || i == (dataset.length-1) ? 
			"bold" : "normal")