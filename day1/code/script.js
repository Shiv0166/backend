alert("hello");
var arr = [1,2,3,4,5];
arr.forEach(function(val){
    console.log(val + "shivam");
})
var ans = arr.map(function(val){
    return val+1;
})
console.log(ans);

var ans2 = arr.filter(function(val){
    if(val>=3){
        return true;
    }
})
console.log(ans2)

 var ans3 = arr.indexOf(5);
 console.log(ans3);


var ans4 = {
    name: "shivam",
    age: 19
}
ans4.name;

function abcd(a,b,c,d){

}
console.log(abcd.length);