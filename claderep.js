var lastChange;
var newString = 'bath';
var regExerTH = /(th)/gi;
var regExerD = /(d)/gi;

function replacer(match, p1, offset, string) {
  console.log(match);
  console.log(p1);
  console.log(offset);
  console.log(string);
  var modWord = p1;
  return p1;
}

function repWrap(str, reg, changeto){
	return str.replace(reg, function(match, p1, offset, string){
		console.log(match);
		console.log(changeto);
		if (lastChange != match){
		p1 = p1.replace(match, changeto);
		lastChange = changeto;
		}
		return p1;
	});
}
console.log(newString);
newString = repWrap(newString, regExerTH, "d");
console.log(newString);
newString = repWrap(newString, regExerD, "t");
console.log(lastChange);
console.log(newString);
