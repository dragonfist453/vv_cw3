// A function to converts meters to feet and returns the result

/**
    @id meterToFeet

    @pre (meter == #meter) * types(#meter: Num)
    @post (ret == #meter / 0.3048)
*/
function meterToFeet(meter) {
    return meter * 3.28084;
}