function receivesAFunction(firstName){
    return firstName()
}
receivesAFunction(function (){return ("Your first name is Grace")})


function rice (){
    return deliciousMeal = function (){ return "I am rice, beef and veges!"}
}

function menu (meal){
    return meal()
}
function returnsANamedFunction(){
    return menu(rice)
}

function kitchen (){
    return function (){"I have cups, plates, spoons and forks"}
}
function room (compartments){
    return compartments()
}
function returnsAnAnonymousFunction(){
    return room(kitchen)
}