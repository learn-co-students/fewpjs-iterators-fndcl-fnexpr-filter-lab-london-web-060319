function findMatching(driversArr, name) {
    const match = driversArr.filter(driver => {
        return driver.toUpperCase() === name.toUpperCase();
    })
    return match
}

function fuzzyMatch(driversArr, name) {
    const match = driversArr.filter(driver => {
        return driver.charAt(0).toUpperCase() === name.charAt(0).toUpperCase() 
    })
    return match
}

// Write a Function To Match object Values To a Provided string
// Write matchName - This function takes an array of drivers and a string as arguments. In this function, each element 
// of the drivers array is a JavaScript object that has a property of name. 
// The function should return each element whose name property matches the provided string argument.

function matchName(driversArr, name) {
    const match = driversArr.filter(driver => {
        return driver.name === name
    })
    return match
}