/**
 * * Created by lee on 2017/8/17
 */
'use strict';

module.exports = {
    length,
    getLength,
    isDouble
};

let placeholder = '00';
let doubleCharReg = /[^\x00-\xff]/g;

function length(str, len) {
    len = len || 55;
    if(getLength(str) > len) {
        return cutStr(str, len);
    }
    return str;
}

function getLength(name) {
    if(name === null || name === (void 0)) return 0;
    if(typeof name !== 'string') {
        name += '';
    }
    let count = 0;
    let strArr = Array.from(name);
    strArr.forEach((c) => {
        if(isSingle(c)){
            count++;
        }else{
            count += 2;
        }
    });
    return count;
}

function cutStr(str, L) {
    let result = '',
        chrlen = str.replace(doubleCharReg, placeholder).length;

    if(chrlen <= L) {
        return str;
    }

    // 兼容emoji表情
    let strArr = Array.from(str);

    for(let i = 0, j = 0, len = strArr.length; i < len; i++) {
        let chr = strArr[i];

        if(isSingle(chr)) {
            j++;
        } else {
            j += 2;
        }

        if(j <= L) {
            result += chr;
        } else {
            return result;
        }
    }
}

function isSingle(char) {
    let singleCharReg = /[\x00-\xff]/;
    return singleCharReg.test(char);
}

function isDouble(char) {
    let doubleCharReg = /[^\x00-\xff]/;
    return doubleCharReg.test(char);
}