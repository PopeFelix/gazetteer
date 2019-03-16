class Star {
	type() { 
		if (!this._type) { 
			this._type = this._generate_type();
		}
		return this._type;
	}
	_nd6(n = 1) { 
		var sum = 0;
		for (var i = 0; i < n; i++) { 
			var num = Math.floor(Math.random() * 6) + 1;
			sum += num;
		}
		return sum;
	}
	_generate_type() { 
		// do only life-friendly right now
		var types = {
			2: 'M',
			3: 'M',
			4: 'M',
			5: 'K',
			6: 'K',
			7: 'G',
			8: 'G',
			9: 'F',
			10: 'F',
			11: 'F',
			12: 'F',
		};
		var subtypes = { 
			1: 1,
			2: 2,
			3: 4,
			4: 6,
			5: 8,
			6: 0
		};
		var type_roll = this._nd6(2);
		var subtype_roll = this._nd6(1);
		var type = types[type_roll] + subtypes[subtype_roll] + 'V';
		return type;
	}
}


module.exports = Star;
