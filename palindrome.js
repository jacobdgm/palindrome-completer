"enable strict"

function completePalindrome(){
	document.getElementById("completionTextbox").value=
	shortestPalindromicCompletion(document.getElementById("entryTextbox").value)
}

function reverseString(str){
	return str.split("").reverse().join("")
}

function isPalindromic(str){
	return reverseString(str) === str
}

function shortestPalindromicCompletion(str){
	str = str.toLowerCase()
	str = str.replace(/['"]/g,"")
	str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
	str = str.replace(/\s+/g,"")
	strLength = str.length
	tailIndex = 0
	for (let i = 0; i < strLength; i++) {
		sl = str.slice(i)
		if (isPalindromic(sl)) {
			tailIndex = i
			break
		}
	}
	completion = str + reverseString(str.slice(0, tailIndex))
	return completion
}