var y=2;
var w=5;
var x=3;
const pi = 3.14;
var e = 2.71828;

var firstMove = Math.pow(y,x);
var secondMove = pi/(Math.pow(y,2));
var thirdMove = w/(w+y);
var PrefinalMove = (firstMove - secondMove + thirdMove);
var finalMove = Math.pow(PrefinalMove,e);
document.writeln(finalMove.toFixed(3));
