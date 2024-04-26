// A function named perimeter (with parameter, radius) to calculate the perimeter of a circle with PI written as 3.141592 and return the result

/**
    @id perimeter

    @pre    (radius == #radius) * types(#radius: Num)
    @post   (ret == (2 * #radius * 3.141592))
*/
function perimeter(radius) {
    return 2 * 3.141592 * radius;
}

// A function named area (with parameter, radius) to calculate the area of a circle with PI written as 3.141592, without Math library and return the result

/**
    @id area

    @pre    (radius == #radius) * types(#radius: Num)
    @post   (ret == #radius * #radius * 3.141592)
*/
function area(radius) {
    return 3.141592 * radius * radius;
}