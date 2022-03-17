// Code your solution in this file!
function distanceFromHqInBlocks (blocks){
    if (blocks >= 42)
        return blocks - 42 
    else 
        return 42 - blocks
}
distanceFromHqInBlocks()

function distanceFromHqInFeet (feet){
    return distanceFromHqInBlocks (feet) * 264;
}
distanceFromHqInFeet()

function distanceTravelledInFeet (start, destination) {
    if (start < destination)
        return (destination - start) * 264
    else 
        return (start - destination) *264 
}
distanceTravelledInFeet ()

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet (start, destination) > 2500)
        return 'cannot travel that far'
    else if (distanceTravelledInFeet (start, destination) > 2000)
        return 25
    else if (distanceTravelledInFeet (start, destination) <= 400)
        return 0
    else if (distanceTravelledInFeet (start, destination) < 2000)
        return (distanceTravelledInFeet (start, destination) - 400) * .02
}