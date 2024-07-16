let numbers = [
    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    'hundred'
]


module.exports = function toReadable (number) { 
  let result = [];
  let numStrArr = number.toString().split('');

  if (numStrArr.length === 3) {
    result.push(numbers[0][numStrArr[0]]);
    result.push(numbers[3])
  }

  if (numStrArr.length >= 2) {
    let lastNumber = +numStrArr.slice(-2).join('');
    if (lastNumber > 10 && lastNumber < 20) { 
        result.push(numbers[1][+numStrArr.at(-1)])
        return result.join(" ");
    }
    if (+numStrArr.at(-2) !== 0) result.push(numbers[2][+numStrArr.at(-2)]);
    if (+numStrArr.at(-1) === 0) return result.join(" ");
  }
  result.push(numbers[0][+numStrArr.at(-1)]);
  return result.join(" ");
}
