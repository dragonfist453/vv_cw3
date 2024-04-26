// A function named ouncesToKilograms to convert ounces (as parameter, oz) to kilograms and return the result

/**
    @id ouncesToKilograms

    @pre (oz == #oz) * types(#oz: Num)
    @post (ret == (#oz * 28.3498) / 1000)
 */
function ouncesToKilograms(oz) {
    return oz / 35.274;
}