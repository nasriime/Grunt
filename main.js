// function myFunc(num) {
//     for (num;num > 0; num--) {
//         num *= num;
//         console.log(num);
//     }
// }
//
// myFunc(8);


function fact(num)
{
    if(num<0)
     return "Undefined";
    var fact=1;
    for(var i=num;i>1;i--)
      fact*=i;
    return fact;
 }
