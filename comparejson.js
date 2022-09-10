var obj1 = {name:"Person1", age:5};
var obj2 = {age:5, name:"Person1"};

var output = true;

if(Object.keys(obj1).length == Object.keys(obj2).length) {
    for(key in obj1){
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else{
            output = false;
            break;
        }
    }
}
else{
    output= false;
}
console.log("Keys of two objects are equal which is",output);