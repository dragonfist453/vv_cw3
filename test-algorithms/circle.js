/**
    @id perimeter

    @pre    (radius == #radius) * types(#radius: Num)
    @post   (ret == (2 * #radius * 3.141592))
    */
function perimeter(radius) {
    return radius * 2 * 3.141592
}

/**
    @id area

    @pre    (radius == #radius) * types(#radius: Num)
    @post   (ret == #radius * #radius * 3.141592)
*/
function area(radius) {
    return radius * radius * 3.141592
}