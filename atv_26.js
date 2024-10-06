const string = "turmalina paraíba";
const subString = "paraíba";

const contemSubstring = (str,subStr)=>{
    if(str.toLowerCase().includes(subStr.toLowerCase())){
        return true
    }
    return false
}

console.log(contemSubstring(string,subString))