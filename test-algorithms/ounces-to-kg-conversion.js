"use strict";

/**
    @id ouncesToKilograms

    @pre (oz == #oz) * types(#oz: Num)
    @post (ret == (#oz * 28.3498) / 1000)
 */
function ouncesToKilograms(oz) {
    return (oz * 28.3498) / 1000
}