const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const express = require('express');
const port = 3000;

server.listen(port, () => {
	console.log(`Server is running on port ${port} `);
});

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/javascript', (req, res) => {
	res.sendFile(__dirname + '/public/javascript.html');
});



app.get('/css3', (req, res) => {
	res.sendFile(__dirname + '/public/css.html');
});

app.get('/html', (req, res) => {
	res.sendFile(__dirname +  '/public/html.html');
});


//Plain simple acknowledgment example
// io.on('connection', (socket) => {
// 	console.log('User connected');
// 	socket.emit('message', {manny: 'Hey how are you?'});
// 	socket.on('another event', (data) => {
// 		console.log(data);
// 	});
// });

//Tech Namepsace
const tech = io.of('/tech');

//Emit response event
// io.on('connection', (socket) => {
// 	console.log('user connected');
// 	socket.on('message', (msg)=> {
// 		console.log(msg);
// 		io.emit('message', msg);
// 	});

// 	//on disconection
// 	socket.on('disconnect', () => {
// 		console.log('User disconnected');
 
// 		io.emit('message', 'User disconnected');
// 	});
// });

tech.on('connection', (socket) => {
	console.log('User connected:');
	socket.on('join', (data) => {
		socket.join(data.room); 
		tech.in(data.room).emit('message', {msg: `New User joined ${data.room} room!`})
	});

	socket.on('message', (data) => {
		console.log(`message: ${data.msg} `);
		// tech.emit('message', data.msg );
		tech.in(data.room).emit('message', data);
	});

	socket.on('disconnect', () => {
		console.log(`User disconnected:`)
		tech.emit('message', { msg: 'User disconnected'});
	});
});