var items = [{"qty": 2, "price":2.5}, 
			{"qty": 8, "price":1.25},
			{"qty": 3, "price":1}];

// Total using reduce

console.log(items.reduce((acc = 0,element) => acc + (element.price * element.qty)));

// Most expensive using reduce
