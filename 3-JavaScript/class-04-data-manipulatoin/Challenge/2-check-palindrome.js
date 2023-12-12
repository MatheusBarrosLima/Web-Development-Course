
function isPalindrome(text){
    const normalText = text.toLowerCase().replaceAll(" ", "");
    
    const reverseText = text.toLowerCase().replaceAll(" ", "")
    .split("").reverse("").join("");
    return normalText === reverseText
}

const text = "Ame o poema"
const result = isPalindrome(text)
console.log(result ? "Verdadeiro" : "Falso");
