// Code your solution here
const drivers = [

{
  name: 'Bobby',
  hometown: 'Pittsburgh'
},
{
  name: 'Bobby',
  hometown: 'Tampa Bay'
}]

function findMatching(drivers, name){
  let driverName = drivers.filter(d => {
    return d.toLowerCase() === name.toLowerCase();
});

return driverName
}

function fuzzyMatch(drivers, name){
  let driverMatch = drivers.filter(d =>{
    return d.charAt(0) === name.charAt(0);
  });
  return driverMatch
}

function matchName(driver, name){

  const driverMatchName = drivers.filter(d =>{
    return d.name === name;
  })
  return driverMatchName;
}
