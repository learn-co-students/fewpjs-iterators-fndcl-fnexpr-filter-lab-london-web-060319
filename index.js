function findMatching(drivers, name) {
  let driverMatch = drivers.filter(d => {
    return d.toUpperCase() === name.toUpperCase();
  })
  return driverMatch
}

function fuzzyMatch(drivers, name) {
  let driverMatch = drivers.filter(d => {
    return d.charAt(0).toUpperCase() === name.charAt(0).toUpperCase();
  })
  return driverMatch
}

function matchName(drivers, name) {
  let driverMatch = drivers.filter(d => {
    return d.name === name;
  })
  return driverMatch
}
