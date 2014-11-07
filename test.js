//
// Exit handlers
//
process.on('exit', function(code) {
	console.log("[exit] : Code=" + code + " : cleanup here") ;
	handle && clearTimeout(handle) ; // Stop the timer
}) ;

process.on('SIGTERM', function() {
	console.log('[SIGTERM] - Caught') ;
	process.exit(0) ;
});

// 
// Simple timer to keep app running printing messages periodically
//
var handle = undefined ;
var startedAt = new Date().getTime() ;

function godot() {
	var now = new Date().getTime() ;
	var runningFixed = Math.round((now-startedAt)/100) ;
	console.log('App running for ' + Math.floor(runningFixed/10) + '.' + Math.round(runningFixed%10) + ' seconds') ;
	handle = setTimeout(godot, 2000) ;
}  ;
console.log('App started!!!!') ;
handle = setTimeout(godot, 2000) ;

