function add_to_cart(id)
{
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);

	update_orders_input();
	update_orders_button();
}

function update_orders_input()
{
	var orders = cart_orders();
	$('#orders_input').val(orders);
}

function update_orders_button() 
{
	var text_button = 'Cart (' + cart_number_of_items() + ')';
	$('#orders_button').val(text_button);
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

function cancel_order()
{
	window.localStorage.clear();
	update_orders_input();
	update_orders_button();
	return false;
}
