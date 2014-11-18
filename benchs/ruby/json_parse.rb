require 'json'

example = {
  data: [
    {name: 'Ryan'},
    {name: 'Bob'},
    {name: 'Jimmy'}
  ]
}



`window.rbTests.json_parse = function() {`
  example.to_json.length
`}`
