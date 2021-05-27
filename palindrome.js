"enable strict"

function completePalindrome(){
	document.getElementById("completionTextbox").value=
	shortestPalindromicCompletion(document.getElementById("entryTextbox").value);
}

function reverseString(str){
	return str.split('').reverse().join('');
}

function isPalindromic(str){
	let len = str.length;
	for (let i = 0; i < len / 2; i++) {
		if (str[i] !== str[len - i - 1]
			&& str[i] !== "."
			&& str[len - i - 1] !== ".") {
			return false;
		}
	}
	return true;
}

function shortestPalindromicCompletion(str){
	str = str.toLowerCase();
	str = str.split('').filter(char => /[a-z\.]/.test(char)).join('');
	strLength = str.length;
	coreIndex = 0;
	for (let i = 0; i < strLength; i++) {
		sl = str.slice(i);
		if (isPalindromic(sl)) {
			coreIndex = i;
			break;
		}
	}
	completion = str + reverseString(str.slice(0, coreIndex))
	return fillWildcards(completion);
}

function fillWildcards(str){
	outputStr = "";
	let len = str.length;
	for (let i = 0; i < len; i++) {
		if (str[i] === ".") {
			outputStr = outputStr + str[len - i - 1].toUpperCase();
		} else {
			outputStr = outputStr + str[i];
		}
	}
	return outputStr
}