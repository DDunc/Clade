$(document).ready(function(){
	var eng2Ger = [];

	function LettRule(strVal, changeVal, arr){
		this.strVal = strVal;
		this.changeVal = changeVal;
		arr.push(this);
	}
	var engES2AS0 = new LettRule(/es/gi, "as", eng2Ger);
	var engD2T0 = new LettRule(/d$/gi, "t", eng2Ger); //d to t ending
	var engF2B0 = new LettRule(/f$/gi, "b", eng2Ger); //f to b end
	var engV2B0 = new LettRule(/v(?!e$)/gi, "b", eng2Ger); // v to b end
	var engV2B1 = new LettRule(/ve$/gi, "b", eng2Ger); // ve to b end
  	var engTH2D0 = new LettRule(/^th/gi, "d", eng2Ger); // th to d begin
 	var engTH2D1 = new LettRule(/th$/gi, "d", eng2Ger); //th to d end
 	var engTH2T0 = new LettRule(/th/gi, "t", eng2Ger); // th to t middle
	var engF2V0 = new LettRule(/^f/gi, "v", eng2Ger); // f to v
	var engK2CH0 = new LettRule(/k$/gi, "ch", eng2Ger); //k to ch
	var engOO2U0 = new LettRule(/o{2}/gi, "u", eng2Ger);  //out of order
	//var engS2EN0 = new LettRule(/s$|es$/i, "en", eng2Ger);
	var engEAEU2A0 = new LettRule(/ea/gi, "a", eng2Ger); //ea to a
	var engY2J0 = new LettRule(/y/gi, "j", eng2Ger); //y to j
	var engC2K0 = new LettRule(/^c/i, "k", eng2Ger); // c to k begin
	var engPH2F0 = new LettRule(/ph/gi, "f", eng2Ger);
	var engY2G0 = new LettRule(/y$/gi, "g", eng2Ger);

function rulesRun(rulesArr, str){
	  var final;
	    var holding = str;
		for (var p=0; p < rulesArr.length; p++){
 holding = holding.replace(rulesArr[p].strVal, rulesArr[p].changeVal);
    }
	final = holding;
	return final;
}

	function germTest(str, rulesArr, rules){
		var finalStr = [];
		var arrStr = str.split(" ");
		console.log(arrStr);
		for (var i=0; i < arrStr.length; i++){
        	finalStr.push(rulesRun(rulesArr, arrStr[i]));
		}
		//arrStr[i].replace(rulesArr[0].strVal, rulesArr[0].changeVal));
			console.log(finalStr);
		finalStr = finalStr.join(" ");
		return finalStr;
	}

	function $dispBand(rulesArr, rules){
		$('<form>').appendTo('body');
		$('<input type=text>').appendTo('form').addClass("texts");
		$('<input type = submit>').appendTo('form');
		$('<ul>').appendTo('body')
		$('form').on("submit", function(e){
			e.preventDefault();
			$('ul').empty()
			var	newVal = $('.texts').val();
			var germVal = germTest(newVal, rulesArr, rules);
			$('<li>').text("Your shift is: " + germVal.toLowerCase()).appendTo('ul');
		});
	}

	$dispBand(eng2Ger,rulesRun);
});
