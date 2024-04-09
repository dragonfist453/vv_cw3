"use strict";

/**
    @id feetToMeter

    @pre (feet == #feet) * types(#feet: Num)
    @post (ret == #feet * 0.3048)
*/
function feetToMeter(feet) {
    return feet * 0.3048
}

/**
    @id meterToFeet

    @pre (meter == #meter) * types(#meter: Num)
    @post (ret == #meter / 0.3048)
*/
function meterToFeet(meter) {
    return meter / 0.3048
}