/**
 * 
 */
console.log('hello!');
var n = window.prompt("plz input an int");
n = parseInt(n);
var res = 0;
for(var i=1;i<=n;i++){
	res+=i;
}
document.writeln("res="+res);

var res2=0;
var temp=1;

for(var i=1;i<=n;i++){
	for(var j=1;j<=i;j++){
		temp+=j;
	}
	res2+=temp;
	temp=1;
}
document.writeln("res2="+res);