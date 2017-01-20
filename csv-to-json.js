// Node packages for file system
var fs = require('fs');
var path = require('path');

// Load CSV
var filePath = path.join(__dirname, './cities.csv');

// Read CSV
var csv = fs.readFileSync(filePath, {encoding: 'utf-8'}, 
    function(err){console.log(err);});

function csvJSON(csv){

  var lines=csv.split("\n");

  var json = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  json.push(obj);

  }
  
  //return result; //JavaScript object
  var outPath = path.join(__dirname, 'newObject');
  fs.writeFileSync(outPath, JSON.stringify(json), 'utf8', function(err){console.log(err);});
}

csvJSON(csv);
