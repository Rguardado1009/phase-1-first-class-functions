
function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function Name(){}

}

function returnsAnAnonymousFunction(){
    return function (){
    }
}
