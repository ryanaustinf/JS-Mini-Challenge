function fixFruit(fruit,newFruit) {
	
	if( !fruit['isVisible'] ) {
		fruit['quantity'] = newFruit['quantity'];
		fruit['price'] = newFruit['price'];
		$("div#receipt").html($("div#receipt").html() + 
					"<div class=\"fruit\" id=\"" + fruit['name'] + 
					"\"><span class=\"quantity\">" + 
					fruit['quantity'] + "</span><span class=\"name\">"
					+ fruit['name'] + "</span><span class=\"price\">"
					+ fruit['price'] + "</span></div>");
		fruit['isVisible'] = true;
	} else {
		fruit['quantity'] = fruit['quantity'] * 1 + newFruit['quantity'] * 1.0;
		fruit['price'] += newFruit['price'];
		$("div#" + fruit['name'] ).html("<span class=\"quantity\">" + 
					fruit['quantity'] + "</span><span class=\"name\">"
					+ fruit['name'] + "</span><span class=\"price\">"
					+ fruit['price'] + "</span>");
	}
}
$(document).ready(function() {
	
	var total = 0;
	
	var apple = {
		name: 'Apple',
		quantity: 0,
		price: 0,
		isVisible: false
	};
	
	var orange = {
		name: 'Orange',
		quantity: 0,
		price: 0,
		isVisible: false
	};
	
	var banana = {
		name: 'Banana',
		quantity: 0,
		price: 0,
		isVisible: false
	};
	
	$("#addToCart").click(function() {
		
		if( $("input#count").val() != 0 ) {
			var fruit = {
				name: $("select#fruits").find(":selected").text(),
				quantity: $("input#count").val(),
				price: $("select#fruits").val() * $("input#count").val()
			};
			
			console.log(isNaN(fruit['quantity']));
			if( !isNaN(fruit['quantity']) ) {
				total += fruit['price'];
				
				switch( fruit['name'] ) {
					case 'Apple':
						fixFruit( apple, fruit );
						break;
					case 'Orange':
						fixFruit( orange, fruit );
						break;
					case 'Banana':
						fixFruit( banana, fruit );
						break;
				}
			}
		}
	});
	
	$("#checkOut").click(function() {
		
		$("div#totalLabel").text('Total: ' + total);
	});
});