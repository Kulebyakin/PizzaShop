function add_to_cart(id)
{
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);

	alert('Number of items in your cart: ' + cart_number_of_items());
}

function cart_number_of_items()
{
	var sum = 0;
	for (var i = 0; i < localStorage.length; i++)
	{
    	sum = sum * 1 + localStorage.getItem(localStorage.key(i)) * 1;
	}
	return sum;
}

function cart_orders()
{
	var orders = '';
	for (var i = 0; i < localStorage.length; i++)
	{
		order = localStorage.key(i) + '=' + localStorage.getItem(localStorage.key(i)) + ',';
    	orders = orders + order;
	}
	return orders;
}
