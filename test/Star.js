var expect = require('chai').expect;
const Star = require('../lib/Gazetteer/Star');
const types = ['F', 'G', 'K', 'M'];
const subtypes = [1,2,4,6,8,0];

describe('Star.type()', function() { 
        it('should return a type', function() { 
                var star = new Star;
                expect(star.type()).to.match(/^[F,G,K,M][1,2,4,6,8,0]V$/);
        });
	it('generates all supported types', function() { 
		var types_found = {};
		types.forEach(function(type) {
			subtypes.forEach(function(subtype) { 
				var full_type = type + subtype + 'V';
				types_found[full_type] = 0
			})
		});
		for (var i = 0; i < 100; i++) { 
			// 24 possible star types (4 main types, 6 subtypes) means we can expect to
			// require 91 attempts (see 
			// https://math.stackexchange.com/questions/28905/expected-time-to-roll-all-1-through-6-on-a-die) 
			// to hit all possible values. Give it 100 tries because 100 is a nice round
			// number.
			var star = new Star;
			var type = star.type();
			var found = types_found[type];
			if (typeof(found) == 'undefined') {
				throw new Error('Type ' + type + ' not found in list');
			}
			types_found[type] = 1;
		}
		all_found = types.every(function(type) { 
			return subtypes.every(function(subtype) { 
				var full_type = type + subtype + 'V';
				return types_found[full_type] == 1;
			});
		});
	});
});

