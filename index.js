// Code your solution here
function findMatching(drivers, name) {
   return drivers.filter(driver => {
        if (driver === name || driver === name.toLowerCase()) {
            return driver
        }
    })
}

function fuzzyMatch(drivers, name) {
    const size = name.length

    return drivers.filter(driver => {
        if (driver.substring(0, size) === name) {
            return driver
        }
    })
}

function matchName(drivers, name) {
    return drivers.filter(driver => {
        if (driver.name === name) {
            return driver
        }
    })
}