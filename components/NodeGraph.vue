<template>
    <div>
        <svg class="NodeGraph"></svg>
    </div>
</template>

<script >
import * as d3 from "d3";

export default {
    props: {
        data: {
            required: false,
            default: {
                nodes:
                    [ { name: "A" }
                    , { name: "B" }
                    , { name: "C" }
                    , { name: "D" }
                    ],
                edges:
                    [ { source: "A", target: "B" }
                    , { source: "B", target: "D" }
                    , { source: "A", target: "D" }
                    , { source: "C", target: "A" }
                    ]
            }
        },
        width: {
            default: 240
        },
        height: {
            default: 80
        }
    },
    data() {
        return {
            svg: null,
            link: null,
            node: null,
            text: null,
            simulation: null,
        }
    },
    created() {
        this.svg = d3
            .select("svg.NodeGraph")
            .attr("viewBox",  [0, 0, this.width, this.height])

        this.link = this.svg
            .append("g")
            .selectAll("line")
            .data(this.data.edges)
            .enter()
            .append("line")
            .attr("stroke-width", "3")
            .style("stroke", "pink")

        this.node = this.svg
            .append("g")
            .selectAll("circle")
            .data(this.data.nodes)
            .enter()
            .append("circle")
            .attr("r", "15")
            .attr("fill", "orange")

        this.node.call(d3.drag()
            .on("start", this.dragstarted)
            .on("drag",  this.dragged)
            .on("end",   this.dragended))

        this.text = this.svg
            .append("g")
            .attr("class", "text")
            .selectAll("text")
            .data(this.data.nodes)
            .enter()
            .append("text")
            .text(d => d.name)
            .classed("h1", true);
        
        this.simulation = d3
            .forceSimulation(this.data.nodes)
            .force("link", d3.forceLink(this.data.edges).id((d) => {
                return d.name
            }))
            .force("charge", d3.forceManyBody().strength(-300))
            .force("center", d3.forceCenter(this.width/2, this.height/2))
            .on("tick", this.ticked)

    },
    methods: {
        ticked() {
            this.link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y)

            this.node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)

            this.text
                .attr("x", d => d.x + 10)
                .attr("y", d => d.y - 10)
        },

        dragstarted(event) {
            if (!event.active) this.simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        },

        dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        },

        dragended(event) {
            if (!event.active) this.simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }
    }
};
</script>

<style></style>
