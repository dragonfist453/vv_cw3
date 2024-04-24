// A function to calculate the perimeter of a circle with PI as 3.141592 and parameter as radius and return the result

/**
    @id perimeter

    @pre    (radius == #radius) * types(#radius: Num)
    @post   (ret == (2 * #radius * 3.141592))
*/
function perimeter(radius) {
    return 2 * 3.141592 * radius;
}

// A function to calculate the area of a circle with PI as 3.141592 and parameter as radius and return the result

/**
    @id area

    @pre    (radius == #radius) * types(#radius: Num)
    @post   (ret == #radius * #radius * 3.141592)
*/
function area(radius) {
    return 3.141592 * radius * radius;
}