
// Create class Office
function Office(id, roomNum) {
	this.id = id;
	this.roomNum = roomNum;
	this.roomSpace = this.roomNum*10;
}

Office.prototype.turnOnLight = function () {
	console.log("Light is ON");
}


var exem1 = new Office("#4", "5");
var exem2 = new Office("#4", "5");
var myOffice = new Office("#4", 6);
myOffice.turnOnLight();

//наследование
//метод call чтоб использовать this из Office
function AdvancedOffice (id, roomNum, numOfWindows) {
	Office.call(this, id, roomNum);
	this.windows = numOfWindows;
}
// передаем прототипы с Object в AdvancedOffice
AdvancedOffice.prototype = Object.create(Office.prototype);