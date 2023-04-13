const characterCounter = (string) => {
    if (string.length == 0) {
        return {}
    }

    let counterObj = {}

    for (let i = 0; i < string.length; i++) {
        if (counterObj.hasOwnProperty(string[i])) {
            counterObj[string[i]]++
        } else {
            counterObj[string[i]] = 1
        }
    }
  return counterObj;
};

module.exports = characterCounter;
