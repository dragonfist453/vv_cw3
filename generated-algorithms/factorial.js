// A function to calculate the factorial of a number and return the result

/**
    @id fact

    @pre    (n == 0)
    @post   (ret == 1)

    @pre    GlobalObject() * ObjectPrototype($lobj_proto) *
            scope(fact: #fact) * JSFunctionObject(#fact, "fact", _, _, _) *
            (n == #n) * types(#n : Num)
    @post   GlobalObject() * ObjectPrototype($lobj_proto) *
            scope(fact: #fact) * JSFunctionObject(#fact, "fact", _, _, _) *
            (ret == #ret) * types(#ret : Num)
 */
function fact(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}