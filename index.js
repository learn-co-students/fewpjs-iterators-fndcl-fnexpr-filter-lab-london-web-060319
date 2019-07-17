// Code your solution here
const drivers = ["bob", "fred", "truckman8000", "fred"]
const str = "fred"

function findMatching(arr, str) {
    let matches = arr.filter(f => { return f.toLowerCase() === str.toLowerCase()} )
    return matches
}

function fuzzyMatch(arr, str) {
    let matches = arr.filter(f => {return f.slice(0,2).includes(str)} )
    return matches
}

function matchName(obj, str) {
    let matches = obj.filter(f => {return f.name === str} )
    return matches
}