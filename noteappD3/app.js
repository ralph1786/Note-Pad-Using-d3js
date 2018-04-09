//To remove notes/remove button.
d3.select(".remove")
    .on("click", function(){
      d3.selectAll(".note")
        .remove();
    });

//feeling lucky button.
d3.select(".lucky")
    .on("click", function(){
      d3.selectAll(".note")
        .style("font-size", function(){ //This function allows for text-size to change randomly.
          return Math.random() * 100 +"px";
        });
    });

// Following section adds notes to list.
const input = d3.select("input");
const preview = d3.select(".preview");

d3.select("#new-note")
    .on('submit', function() {
      d3.event.preventDefault();
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .text(input.property('value'));
      input.property('value', '');
      setPreview("");
    });

//This shows preview on top of input field.
input.on("input", function(){
    var note = d3.event.target.value;
    setPreview(note);
});

function setPreview(val) {
  preview.text(val)
      .classed("hide", val === "");
}