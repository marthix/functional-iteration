console.log('Show me how to calculate the average price of all items.')
//Declare the average and initalize to 0
var average = 0
//Get the total price of all items
var total = items.reduce(function(previousItem, currentItem) {
  //Check if the previousItem is a number or not
  var previousPrice = isNaN(previousItem) ? previousItem.price : previousItem
  return previousPrice + currentItem.price
})

//Find the average and round to two decimal places
average = Math.round((total/items.length)* 100) / 100

//Log out the answer with some fancy-ass formatting :D
console.log('---ANSWER 1---')
console.log('The average price of all items is: $' + average)
console.log('--------------')
console.log(' ')




console.log('Show me how to get an array of items that cost between $14.00 and $18.00 USD')
//Function to check if the price value is between 14 and 18
var filtered = items.filter(function (item) {
  return item.price > 14 && item.price < 18
})

//Sort the filtered array
filtered.sort(function (a, b) {
  if (a.price > b.price) {
    return 1
  }
  if (a.price < b.price) {
    return -1
  }
  return 0
})

//Log out the answer with some fancy-ass formatting :D
console.log('---ANSWER 2---')
console.log('The items that are between $14.00 and $18.00 are:')
filtered.forEach(function(filteredItem) {
  console.log('$' + filteredItem.price + ': ' + filteredItem.title)
})
console.log('--------------')
console.log(' ')




console.log('Show me how find the item with a "GBP" currency code and print its name and price.')
//Finds a single item with a currency code of GBP
var britishPound = items.find(function (item) {
  return item.currency_code === 'GBP'
})

//Log out the answer with some fancy-ass formatting :D
console.log('---ANSWER 3---')
console.log('The item with a GBP currency code is: ' + britishPound.title + ' for £' + britishPound.price)
console.log('--------------')
console.log(' ')




console.log('Show me how to find which items are made of wood.')
//Finds every item made of wood
var woodItems = items.filter(function (item) {
  return item.materials.includes('wood')
})

//Map the title of items to the woodItems variable
woodItems = woodItems.map(function (item) {
  return item.title
})

//Log out the answer with some fancy-ass formatting :D
console.log('---ANSWER 4---')
console.log('The items that are made of wood are:')
console.log(woodItems.join("\n"))
console.log('--------------')
console.log(' ')




console.log('Show me how to find which items are made of eight or more materials.')
//Finds every item made of at least 8 materials
var manyMaterials = items.filter(function (item) {
  return item.materials.length >= 8
})

//Map the title of items to the manyMaterials variable
manyMaterials = manyMaterials.map(function (item) {
  return item.title
})

//Log out the answer with some fancy-ass formatting :D
console.log('---ANSWER 5---')
console.log('The items that are made of eight or more materials are:')
console.log(manyMaterials.join("\n"))
console.log('--------------')
console.log(' ')


console.log('Show me how to calculate how many items were made by their sellers.')

var homemadeItems = items.filter(function (item) {
  return item.who_made === 'i_did'
})

//Log out the answer with some fancy-ass formatting :D
console.log('---ANSWER 6---')
console.log(homemadeItems.length + ' items were made by their sellers.')
console.log('--------------')
console.log(' ')
