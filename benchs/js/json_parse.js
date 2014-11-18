// var JSONExample = '[   {     color: "red",     value: "#f00"   },   {     color: "green",     value: "#0f0"   },   {     color: "blue",     value: "#00f"   },   {     color: "cyan",     value: "#0ff"   },   {     color: "magenta",     value: "#f0f"   },   {     color: "yellow",     value: "#ff0"   },   {     color: "black",     value: "#000"   } ]';

var example = {
  data: [
    {name: 'Ryan'},
    {name: 'Bob'},
    {name: 'Jimmy'}
  ]
}

window.jsTests.json_parse = function() {
  // JSON.parse(JSONExample).length
  JSON.stringify(example).length
};