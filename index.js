// Code your solution in this file!

function distanceFromHqInBlocks(currentLocation) {
    let hqLocationBlock = 42;
    return Math.abs(currentLocation - hqLocationBlock);
}  

function distanceFromHqInFeet(currentLocation) {
    let manhattenBlockInFeet = 264;
    let distanceInBlocks = distanceFromHqInBlocks(currentLocation);
    return distanceInBlocks * manhattenBlockInFeet;
} 

function distanceTravelledInFeet(startingLocation, currentLocationInFeet) {
    let blocksTraveled = Math.abs(startingLocation - currentLocationInFeet);
    let manhattenBlockInFeet = 264;
    return blocksTraveled * manhattenBlockInFeet;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return distance * 0;
    } else if (distance > 400 && distance <=2000) {
        return (distance - 400) * .02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

