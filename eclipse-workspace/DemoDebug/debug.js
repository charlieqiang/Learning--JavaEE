/**
 * 1
 */
//console.log('hello!');
//var n = window.prompt("plz input an int");
//n = parseInt(n);
//var res = 0;
//for(var i=1;i<=n;i++){
//	res+=i;
//}
//document.writeln("res="+res);
//
//var res2=0;
//var temp=1;
//
//for(var i=1;i<=n;i++){
//	for(var j=1;j<=i;j++){
//		temp+=j;
//	}
//	res2+=temp;
//	temp=1;
//}
//document.writeln("res2="+res);
/**
 * 2
 */
//function Person() {
//	this.name="abc";
//	this.abc=function(){
//		window.alert(this.name);
//	}
//
//}
//
//var p1=new Person();
//p1.name="cde";
//p1.abc();
//
//var p2=new Person();
//p2.abc();
/**
 * 3
 * 
 */
var arr=new Array(3);
arr[0]="Geo";
arr[1]="Joh";
arr[2]="Cha";

Array.prototype.find=function(val){
	for(var i=0;i<this.length;i++){
		if(val==this[i]){
			return i;
		}
	}
	return -1;
}

document.writeln("John index="+arr.find("Joh"));