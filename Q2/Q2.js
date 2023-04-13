const parenthesesValidator = (string) => {
    if (string.length == 1) {
        return 'invalid'
    }

    let openParenthesesCounter = 0

    for (let i=0 ; i<string.length ; i++) {
        if (string[i] == '(') {
            openParenthesesCounter++
        } else {
            openParenthesesCounter--
        }

        if ( openParenthesesCounter < 0 ) {
            return 'invalid'
        }
    }

    if (openParenthesesCounter != 0) {
        return 'invalid'
    } else {
        return 'valid'
    }


}

module.exports = parenthesesValidator;