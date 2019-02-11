const query = MemoizedQueryModule();

query.findById('test-id');
console.log(1);
query.findById('test-id');
console.log(2);
query.findByCSSSelector('h1');
console.log(3);
query.findByCSSSelector('.test-class');
console.log(4);
query.findByCSSSelector('.test-class');
console.log(5);
query.findByCSSSelector('h2');
console.log(6);