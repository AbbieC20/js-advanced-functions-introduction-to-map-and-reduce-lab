// Your code here
function mapToNegativize(array) {
    let updatedNumbers = []
    for (let i = 0; i < array.length; i++) {
        updatedNumbers.push(array[i] * -1)
    }
    return updatedNumbers
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let updatedNumbers = []
    for (let i = 0; i < array.length; i++) {
        updatedNumbers.push(array[i] * 2)
    }
    return updatedNumbers
}

function mapToSquare(array) {
    let updatedNumbers = []
    for (let i = 0; i < array.length; i++) {
        updatedNumbers.push(array[i] * array[i])
    }
    return updatedNumbers
}


function reduceToTotal(array, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < array.length; i++ ) {
      total = total + array[i]
    }
    return total
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
      if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
      if (array[i]) return true
    }
    return false
}
