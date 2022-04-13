// Product quantity add and minus

$('.plus-btn').on('click', function(event) {
	// event.preventDefault();
	var $input = $(this).closest('div').find('input');
	var value = parseInt($input.val());
	value += 1;
	$input.val(value);
})

$('.minus-btn').on('click', function(event) {
	// event.preventDefault();
	var $input = $(this).closest('div').find('input');
	var value = parseInt($input.val());
	value -= 1;
	if(value < 0){value = 0;}
	$input.val(value);
})

$('.add-to-cart').on('click', function(event) {
	alert("Successfully added to cart!");
});
