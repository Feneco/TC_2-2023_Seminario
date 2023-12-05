<template>
    <div>
        <svg class="NodeGraph w-full h-screen"></svg>
    </div>
</template>

<script >
import * as d3 from "d3";

export default {
    mounted() {
        const DUMMY_DATA = {
            nodes:
            [ {name: "A"}
            , {name: "B"}
            , {name: "C"}
            , {name: "D"}
            ],
            edges:
            [ {source:"A", target:"B"}
            , {source:"B", target:"D"}
            , {source:"A", target:"D"}
            , {source:"C", target:"A"}
            ]
        };

        let svg = d3.select("svg.NodeGraph")

        const link = svg
            .append("g")
            .selectAll("line")
            .data(DUMMY_DATA.edges)
            .enter()
            .append("line")
            .attr("stroke-width", "3")
            .style("stroke", "pink")

        const node = svg
            .append("g")
            .selectAll("circle")
            .data(DUMMY_DATA.nodes)
            .enter()
            .append("circle")
            .attr("r", "15")
            .attr("fill", "orange")

        node.call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

        
        const simulation = d3
            .forceSimulation(DUMMY_DATA.nodes)
            .force("link", d3.forceLink(DUMMY_DATA.edges).id((d) => {
                return d.name
            }))
            .force("charge", d3.forceManyBody().strength(-300))
            .force("center", d3.forceCenter(200, 200))
            .on("tick", ticked)

        function ticked() {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y)
            
            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
        }

        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        // Update the subject (dragged node) position during drag.
        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        // Restore the target alpha so the simulation cools after dragging ends.
        // Unfix the subject position now that it’s no longer being dragged.
        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }
    },
};
</script>

<style></style>
