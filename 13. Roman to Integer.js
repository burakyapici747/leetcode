/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let number = 0;
    let romanNumbers = [
        {'I': 1},
        {'V': 5},
        {'X': 10},
        {'L': 50},
        {'C': 100},
        {'D': 500},
        {'M': 1000},
    ];
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < romanNumbers.length; j++){
            if(romanNumbers[j][s.charAt(i)] !== undefined){
                number += romanNumbers[j][s.charAt(i)];
                if( (i < s.length -1) && ( s.charAt(i) === 'I' && (s.charAt(i + 1) === 'V' || s.charAt(i + 1) === 'X')) ){
                    number -= 2;
                }else if( (i < s.length -1) && ( s.charAt(i) === 'X' && (s.charAt(i + 1) === 'L' || s.charAt(i + 1) === 'C')) ){
                    number -= 20;
                }else if( (i < s.length -1) && ( s.charAt(i) === 'C' && (s.charAt(i + 1) === 'D' || s.charAt(i + 1) === 'M')) ){
                    number -= 200;
                }
            }
        }
    }
    return number;
};