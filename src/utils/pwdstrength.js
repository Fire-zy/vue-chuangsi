//判断密码强度
export const pwdstrength = (str) => {
    //6-20位包含字符、数字和特殊字符
    var ls = 0;
    var passwordPercent = 0
    if (str !== '') {
        if (str.match(/([a-z])+/)) {
            ls++;
        }
        if (str.match(/([0-9])+/)) {
            ls++;
        }
        if (str.match(/([A-Z])+/)) {
            ls++;
        }
        if (str.match(/([\W])+/) && !str.match(/(![\u4E00-\u9FA5])+/)) {
            ls++;
        }
        if (str.length < 6 || str.length > 20) {
            // 要求6-20位字符
            ls = 0;
        }
        if (str.match(/([\u4E00-\u9FA5])+/)) {
            // 不能包含中文字符
            ls = 0;
        }
        switch (ls) {
            case 0: passwordPercent = 0; break;
            case 1: passwordPercent = 33; break;
            case 2: passwordPercent = 66; break;
            case 3:
            case 4: passwordPercent = 100; break;
            default: passwordPercent = 0; break;
        }
    }
    return passwordPercent;

}