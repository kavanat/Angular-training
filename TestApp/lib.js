function forEach(elems,action){
    for(var i=0; i<elems.length; i++)
    {
        action(elems[i]);
    }
}
function filter(elems, predicate){
    var result= [];
    forEach(elems, function (elems) {
        if(predicate(elems)){
            result.push(elems);
        }
        
    });
    return result;

}

//mapper function transform

function map(elems, mapperFn) {

    var result = [];
    forEach(elems, function (elems) {
        result.push(mapperFn(elems));
    })
    return result;
}