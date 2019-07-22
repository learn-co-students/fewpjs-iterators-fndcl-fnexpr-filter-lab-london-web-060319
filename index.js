// Code your solution here
function findMatching (drivers, driverName) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === driverName.toLowerCase()
    })
}

function fuzzyMatch(drivers, driverName) {
    return drivers.filter(driver => {
        return driver[0] === driverName[0]
    })
}

function matchName(drivers, driverName) {
    return drivers.filter(driver => {
        return driver.name === driverName
    })
}