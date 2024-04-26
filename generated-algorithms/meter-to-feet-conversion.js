// A function named meterToFeet to convert meters (as parameter, meter) to feet and return the result

/**
    @id meterToFeet

    @pre (meter == #meter) * types(#meter: Num)
    @post (ret == #meter / 0.3048)
*/
function meterToFeet(meter) {
    return meter * 3.28084;
}

// A function named feetToMeter to convert feet (as parameter, feet) to meters and return the result

/**
    @id feetToMeter

    @pre (feet == #feet) * types(#feet: Num)
    @post (ret == #feet * 0.3048)
*/
function feetToMeter(feet) {
    return feet / 3.28084;
}