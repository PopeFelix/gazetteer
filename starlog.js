const Star = require('./lib/Gazetteer/Star');

var star = new Star;
console.log('Type is ' + star.type());

var types_found = {};
var types = ['F', 'G', 'K', 'M'];
var subtypes = [1,2,4,6,8,0];
types.forEach(function(type) {
	subtypes.forEach(function(subtype) { 
		var full_type = type + subtype + 'V';
		types_found[full_type] =1;	
	})
});
types_found['G4V'] = 0;
types.every(function(type) { 
	return subtypes.every(function(subtype) { 
		var full_type = type + subtype + 'V';
		if (types_found[full_type] != 1) {
			console.log('Where is ' + full_type + '?');
			return false;
		}
		console.log('Found type: ' + full_type);
		return true;
	});
});
