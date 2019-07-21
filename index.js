// Code your solution here

function findMatching(driversArray,driver){
    let matched= driversArray.filter(d=>{return d.toUpperCase()===driver.toUpperCase()
    })
    return matched 
}

function fuzzyMatch(drivers,name){
    let startsWith=drivers.filter( n=> {return n.charAt(0)=== name.charAt(0)&& n.charAt(1) == name.charAt(1)})
    return startsWith
}


function matchName(driversObj,name){
    let matches= driversObj.filter(d=>{return d.name===name})
    return matches
}