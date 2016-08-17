function placeAnOrder(orderNumbers) {
	
	console.log("Customer order:", orderNumber);

	cookAndDeliverFood (function(){
		console.log("Delivered food order:", orderNumber);
	});
	
}

//Simulate users web request
placeOrder(1);





var Bucky = {
	favFood: "bacon",
	favMovie: "Avengers"
};

var Person = Bucky;
Person.favFood = "salad";
console.log(Bucky.favFood); //output: salad (Person is not reference)


console.log(19 == '19'); //true(== only compares values)
console.log(19 === '19'); //false (=== compares both value and type)


var Bucky = {
	printFirstNames: function() {
		console.log("My name is Bucky");
		console.log(this === Bucky);
	}
};
Bucky.printFirstNames(); //true (this == Bucky)

//the default calling context is global
function doSomething(){
	console.log("Do something");
	console.log(this === global);
}
doSomething(); //true 





function User(){
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer){
		targetPlayer.life += 1;
		console.log(this.name + " give 1 life to " + targetPlayer.name);
	}
}

var Bucky = new User();
var Wendy = new User();
Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

//use prototype to add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -= 3;
	console.log(this.name + " just uppercutted" + targetPlayer.name);
}
Wendy.upeercut(Bucky);
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

//use prototype to add properties to all objects
User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(Wendy.magic);






module.exports.variableName = functionName; // export modules

var movies = require('./moduleName'); //look for a module in the same directory, don't include the extension
movies.variableName();


//alternate way to export module
module.exports = {
	function1: function() {}, 
	function2: function() {}, 
	favMovie: "Avengers"
}

var movies = require('./moduleName'); 
movies.variableName();
console.log(movies.favMovie);






module.exports = {
	favMovie: ""
};

var movies = require('./moduleName');
movie.favMovie = "The Notebook";
console.log(movie.favMovie);

require('./Person1');
require('./Person2');







module.exports = function{
	return{
		favMovie: ""
	}
}

var movies = require('./movies');
var emilyMovie = movies();
emilyMovie.favMovie = "The Notebook";
console.log(emilyMovie.favMovie);

var movies = require('./movies');
var buckyMovie = movies();
console.log(buckyMovie.favMovie);






//core module
//name the variable same as the file
var fs = require('fs');
fs.writeFileSync("corn.txt", "Corn is good."); //create a new text file and contain a sentence in it
console.log(fs.readFileSync("corn.txt").toString()); //read the text file and print out the content

var path = require('path');
var websiteHome = "Desktop/bucky/index.html";
var websiteAbout = "Desktop/bucky/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout)); //directory
console.log(path.basename(websiteAbout)); //file name
console.log(path.extname(websiteAbout)); //extension

setInterval(function (){
	console.log("beef");
}, 2000); //runs repeatedly every 2 sec

console.log(__dirname); //full path
console.log(__filename); //full file name






var http = require('http');

function onRequest(request, response){
	console.log("A user made a request" + request.url);
	response.writeHead(200, {"Context-Type": "text/plain"});
	response.write("Here is some data");
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running....");


var http = require('http');
var fs = require('fs');

//404 response
function send404Response(response){
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Error 404: Page not found!");
	response.end();
}

//Handle a user request
function onRequest(request, response){

	if( request.method == 'GET' && request.url == '/'){
		response.writeHead(200, {"ContentType": "text/html"});
		fs.createReadStream("./index.html").pipe(response);	
	}
	else{
		send404Response(response);
	}
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running....");





var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request, response, next){
	console.log('next1');
	next();
}

function doSecond(request, response, next){
	console.log('next2');
	next();
}

app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);
console.log("Server is now running....");





var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response){
	console.log('User requested profile');
}

function forum(request, response){
	console.log('User requested forum');
}

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is now running....");