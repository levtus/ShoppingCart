// Declare Variables
var currentItemPrice = 25;
var currentItemName = "null";
var nameList = [];
var priceList = [];

// New Item Function
function addItem(name, cost) {
  var clear = 0;
  console.log("Adding item with name " + name + " and price " + cost + ".");
  // Check that Input is Valid
  for (var i = 0; i < 3; i++) {
    
    // Check that there is input at all
    if ("input" + i == 0 || "input" + i == null || "input" + i == "") {
      setText("alert", "Please input both an item name and item price");
    } else {
      
      // Check that list is not full
      if (nameList.length > 7) {
        setText("alert", "The list is full, your item could not be added.");
      } else {
         clear = 1;
      }
    }
  }
  
  // Add item if input is valid
  if (clear == 1) {
    // Update List
    appendItem(nameList, name);
    appendItem(priceList, cost);
    // Update Home Screen
    updateLabels ();
    setScreen("home");
    // Reset Input Boxes
    setText("input1", "");
    setNumber("input2", 25);
  }
}
// Function to Delete Item
function deleteItem(line) {
  console.log("Deleting Records from line " + lineReg + ".");
  var lineReg = line + 1;
  // Update List
  removeItem(nameList, line);
  removeItem(priceList, line);
  // Update Screen
  updateLabels ();
}
// Update Screen Function
function updateLabels() {
  // Set active label contents and show delete buttons 
  for (var i = 0; i < nameList.length; i++) {
    // Set Labels
    var regNum = i + 1;
    var name = "" + nameList[i];
    var price = "" + priceList[i];
    setText("name" + regNum, name);
    setText("price" + regNum, price);
    // Show Delete Buttons
    showElement("del" + regNum);
  }
  // Hide All Other Delete Buttons
  for (i = 8; i > nameList.length; i--) {
    hideElement("del" + i);
  }
  // Reset all other labels
  for (i = 8; i >= nameList.length; i--) {
    var regNum2 = i + 1;
    setText("name" + regNum2, "");
    setText("price" + regNum2, "");
  }
  console.log("Updated Labels");
}
// Add Item Chain
onEvent("addItem", "click", function( ) {
	console.log("addItem clicked!");
	setText("alert", "");
	setScreen("newItem");
});
onEvent("finishAddingItem", "click", function() {
addItem(currentItemName, currentItemPrice );
});
// Update Name Var Upon Text Change
onEvent("input1", "input", function( ) {
	currentItemName = getText("input1");
});
// Update Price Var Upon Slider Change
onEvent("input2", "input", function( ) {
	currentItemPrice = getText("input2");
});
// Calculate total price
onEvent("calc", "click", function( ) {
	console.log("Calculating Total Cost");
	var totalPrice = 0;
	// Calculate total price
	for (var i = 0; i < priceList.length; i++) {
	  totalPrice = parseInt(totalPrice) + parseInt(priceList[i]);
	}
	// Display total price
	setText("totalPrice", "$" + totalPrice);
});
// Delete Button EventHandlers
onEvent("del1", "click", function( ) { deleteItem(0); });
onEvent("del2", "click", function( ) { deleteItem(1); });
onEvent("del3", "click", function( ) { deleteItem(2); });
onEvent("del4", "click", function( ) { deleteItem(3); });
onEvent("del5", "click", function( ) { deleteItem(4); });
onEvent("del6", "click", function( ) { deleteItem(5); });
onEvent("del7", "click", function( ) { deleteItem(6); });
onEvent("del8", "click", function( ) { deleteItem(7); });
