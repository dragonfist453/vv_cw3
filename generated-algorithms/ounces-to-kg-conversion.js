// A function to convert ounces to kilograms and return the result

/**
    @id ouncesToKilograms

    @pre (oz == #oz) * types(#oz: Num)
    @post (ret == (#oz * 28.3498) / 1000)
 */
function ouncesToKilograms(ounces) {
    return ounces / 35.274;
}