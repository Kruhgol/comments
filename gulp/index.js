var fs = require('fs');
var tasks = fs.readdirSync('./gulp/gulpTasks/');

require('./config');

tasks.forEach(function(task){
	require('./gulpTasks/' + task);
})





