module.exports = function zeros(expression) {
  	var resOfExpr = 0,
  		expression = expression.split("*"),
  		howMuchZeros = 0;

  	for (var i = 0; i < expression.length; i++) {
  		if (expression[i].indexOf("!!")!== -1) {
  			if (resOfExpr === 0) {
  				resOfExpr = factorial(expression[i].slice(0, -2), 2);
  			} else {
  				resOfExpr = multiply(String(resOfExpr), String(factorial(expression[i].slice(0, -2), 2)));
  			}
  		} else {
	  		if (resOfExpr === 0) {
	  			resOfExpr = factorial(expression[i].slice(0, -1), 1);
	  		} else {
	  			resOfExpr = multiply(String(resOfExpr), String(factorial(expression[i].slice(0, -1), 1)));
	  		}
  		}
  	}

  	for (var j = String(resOfExpr).length-1; j >= 0; j--) {
  		if (String(resOfExpr)[j] == 0) {
  			howMuchZeros += 1;
  		} else {
  			return howMuchZeros;
  		}
  	}

	function factorial(n, c) {
		var r = 1;

		if(c === 1) {
			for (var i = 1; i <= n; i++) {
				r = multiply(String(r), String(i));
			}
			return r;
		}
		if(c === 2){
			var i;
			n % 2 == 0 ? i = 2 : i = 1;
			for (i; i <= n; i += 2) {
				r = multiply(String(r), String(i));
			}
			return r;
		}
	}

	function multiply(first, second) {
	  	var result = [];

	  	for (var i = 0; i < first.length; i++) {
	  		for (var j = 0; j < second.length; j++) {
	  			var ind = i + j;
	  			
	  			if (!result[ind]) {
	  				result[ind] = 0;
	  			}

	  			result[ind] += (first[i] * second[j]);
	  		}
	  	}

	  	for (var k = result.length-1; k >= 0; k--) {
	        if (result[k] >= 10) {
	        	var temp = String(result[k]);

	        	if (k == 0) {
	        		result.unshift(0);
	        		k++;
	        	}

	        	result[k] = Number(temp.slice(-1));
	        	result[k-1] += Number(temp.slice(0, -1));
	        }
	    }

	    return result.join("");
	}
}