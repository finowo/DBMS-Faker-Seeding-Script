let orderDate = faker.date.past().toISOString().slice(0, 19).replace('T', '  ');
let shipDate = faker.date.recent().toISOString().slice(0, 19).replace('T', '  ');
let warehouseDate = faker.date.recent().toISOString().slice(0, 19).replace('T', '  ');

let keyboards =
	'INSERT INTO `keyboard` (`id`, `size`, `orderDate`, `shipDate`, `imagePath`, `keyswitch_id`) <br> VALUES <br>';

for (var i = 0; i < 29; i++) {
	keyboards +=
		'(NULL, "' +
		faker.random.arrayElement(['120%', '100%', 'TKL', '65%']) +
		'",  "' +
		orderDate +
		'", "' +
		shipDate +
		'", "' +
		faker.random.image() +
		'", ' +
		faker.random.number({ min: 1, max: 30 }) +
		'),<br>';
}
keyboards +=
	'(NULL, "' +
	faker.random.arrayElement(['120%', '100%', 'TKL', '65%']) +
	'",  "' +
	orderDate +
	'", "' +
	shipDate +
	'", "' +
	faker.random.image() +
	'", ' +
	faker.random.number({ min: 1, max: 30 }) +
	');<br>';

document.getElementById('keyboards').innerHTML = keyboards;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

let keyswitch =
	'INSERT INTO `keyswitch` (`id`, `name`, `description`, `actuationWeight`, `tactility`, `image_path`, `warehouse_id`) <br> VALUES <br>';

for (var j = 0; j < 29; j++) {
	keyswitch +=
		'(NULL, "' +
		faker.commerce.productName() +
		'",  "' +
		faker.commerce.productDescription() +
		'",  "' +
		faker.random.number({ min: 15, max: 40, precision: 0.01 }) +
		'",  "' +
		faker.random.arrayElement(['Linear', 'Tactile', 'Clicky']) +
		'",  "' +
		faker.random.image() +
		'",  ' +
		faker.random.number({ min: 1, max: 30 }) +
		'),<br>';
}

keyswitch +=
	'(NULL, "' +
	faker.commerce.productName() +
	'",  "' +
	faker.commerce.productDescription() +
	'",  "' +
	faker.random.number({ min: 15, max: 40, precision: 0.01 }) +
	'",  "' +
	faker.random.arrayElement(['Linear', 'Tactile', 'Clicky']) +
	'",  "' +
	faker.random.image() +
	'",  ' +
	faker.random.number({ min: 1, max: 30 }) +
	');<br>';

document.getElementById('keyswitch').innerHTML = keyswitch;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

let employee =
	'INSERT INTO `employee` (`id`, `name`, `ppsNumber`, `email`, `phone`) <br> VALUES <br>';

for (var i = 0; i < 29; i++) {
	employee +=
		'(NULL, "' +
		faker.name.firstName() +
		'",  "' +
		faker.finance.routingNumber() +
		'", "' +
		faker.internet.email() +
		'", "' +
		faker.phone.phoneNumberFormat() +
		'"),<br>';
}
employee +=
	'(NULL, "' +
	faker.name.firstName() +
	'",  "' +
	faker.finance.routingNumber() +
	'", "' +
	faker.internet.email() +
	'", "' +
	faker.phone.phoneNumberFormat() +
	'");<br>';

document.getElementById('employee').innerHTML = employee;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

let customer =
	'INSERT INTO `customer` (`id`, `firstName`, `surName`, `address`, `phone`, `keyboard_id`) <br> VALUES <br>';

for (var i = 0; i < 29; i++) {
	customer +=
		'(NULL, "' +
		faker.name.firstName() +
		'",  "' +
		faker.name.lastName() +
		'", "' +
		faker.address.streetAddress() +
		'", "' +
		faker.phone.phoneNumberFormat() +
		'", ' +
		faker.random.number({ min: 1, max: 30 }) +
		'),<br>';
}
customer +=
	'(NULL, "' +
	faker.name.firstName() +
	'",  "' +
	faker.name.lastName() +
	'", "' +
	faker.address.streetAddress() +
	'", "' +
	faker.phone.phoneNumberFormat() +
	'", ' +
	faker.random.number({ min: 1, max: 30 }) +
	');<br>';

document.getElementById('customer').innerHTML = customer;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

let order =
	'INSERT INTO `order` (`id`, `customer_id`, `keyboard_id`, `employee_id`) <br> VALUES <br>';

for (var i = 0; i < 29; i++) {
	order +=
		'(NULL, ' +
		faker.random.number({ min: 1, max: 30 }) +
		',  ' +
		faker.random.number({ min: 1, max: 30 }) +
		', ' +
		faker.random.number({ min: 1, max: 30 }) +
		'),<br>';
}

order +=
	'(NULL, ' +
	faker.random.number({ min: 1, max: 30 }) +
	',  ' +
	faker.random.number({ min: 1, max: 30 }) +
	', ' +
	faker.random.number({ min: 1, max: 30 }) +
	');<br>';

document.getElementById('order').innerHTML = order;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

let warehouse = 'INSERT INTO `warehouse` (`id`, `price`, `orderDate`)  <br> VALUES <br>';

for (var i = 0; i < 29; i++) {
	warehouse += '(NULL, ' + faker.commerce.price() + ',  "' + warehouseDate + '"),<br>';
}

warehouse += '(NULL, ' + faker.commerce.price() + ',  "' + warehouseDate + '");<br>';

document.getElementById('warehouse').innerHTML = warehouse;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

let keyboardEmployee =
	'INSERT INTO `keyboard_employee` (`id`, `keyboard_id`, `employee_id`) <br> VALUES <br>';

for (var i = 0; i < 29; i++) {
	keyboardEmployee +=
		'(NULL, ' +
		faker.random.number({ min: 1, max: 30 }) +
		',  ' +
		faker.random.number({ min: 1, max: 30 }) +
		'),<br>';
}

keyboardEmployee +=
	'(NULL, ' +
	faker.random.number({ min: 1, max: 30 }) +
	',  ' +
	faker.random.number({ min: 1, max: 30 }) +
	');<br>';

document.getElementById('keyboardEmployee').innerHTML = keyboardEmployee;
