


const findMatching = (drivers, string) => {
//
// third attempt
  return drivers.filter(drivername => drivername.toLowerCase() === string.toLowerCase())

  // console.log(findMatching(drivers, "Bobby"));

  //first attempt

  // let result = drivers.filter(drivername => (drivername == string || string.toLowerCase()))


  //second attempt

  // return drivers.filter(drivername => {
  //     if(drivername === string || string.toLowerCase()){
  //       return drivername
  //     }
  // })


  //

  //fourth attempt

  // let even = [];
  //     for(var i = 0; i < drivers.length; i++) {
  //               if (drivers[i] === string) {
  //                 even.push(drivers[i]);}
  //               else if(drivers[i] === string2){
  //                 even.push(drivers[i]);
  //               }
  //       }
  //
  //     console.log(even);


}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(drivername => drivername.startsWith(string))
    return drivername

}


const matchName = (drivers, string) => {
      return drivers.filter(driver => {
        return driver.name === string
      })
}


matchName(drivers, "Bobby")
