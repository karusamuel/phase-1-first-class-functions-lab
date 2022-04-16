// Code your solution in this file!
const returnFirstTwoDrivers = (arr)=>{
 return arr.slice(0,2)
}

const returnLastTwoDrivers = (arr)=>{
    return arr.slice(arr.length-2,arr.length)
   }

var selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
  return (fare)=>{return fare*num};
}

function fareDoubler(fare){
    const doubleFare = createFareMultiplier(2)(fare);
    return doubleFare;
}

function fareTripler(fare){
    const tripleFare = createFareMultiplier(3)(fare);
    return tripleFare;
}

function selectDifferentDrivers(arr,cb){
    return cb(arr);
}