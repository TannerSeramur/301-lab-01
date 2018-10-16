const colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', 'white', 'yellow'];

let rand = (arr) => Math.floor(Math.random()*arr.length);

$('#a').css("background-color", colors[rand(colors)]);
$('#b').css("background-color", colors[rand(colors)]);
$('#c').css("background-color", colors[rand(colors)]);
$('#d').css("background-color", colors[rand(colors)]);
$('#e').css("background-color", colors[rand(colors)]);
$('#f').css("background-color", colors[rand(colors)]);
$('#g').css("background-color", colors[rand(colors)]);
$('#h').css("background-color", colors[rand(colors)]);
$('#i').css("background-color", colors[rand(colors)]);

