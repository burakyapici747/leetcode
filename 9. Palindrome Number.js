/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xStr = String(x);
    for(let i = 0; i < xStr.length; i++){
        if(x > -1){
            if( Number(xStr.charAt(i))
                !== Number(xStr.charAt( (xStr.length -1) - i )) ){
                return false;
            }
        }else {
            return false;
        }
    }
    return true;
};