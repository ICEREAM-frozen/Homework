function fact(val){
    var val2 = val-1;
    for(i = val2; val2 > 0; val2--){
        val *= val2;
    }
    return val;
}//the function above calculates the factorial of any number passed as an argument
function comb(n,r){
    return fact(n)/(fact(n-r)*fact(r))
}//the fuction above performs "combination" with any 2 values passed as argumets. nCr
function row(num){
    var num2 = num;
    var pascal = document.getElementById("pascal");
    pascal.innerHTML += "1 ";
    for(j = 1; j < num2; j++){
        pascal.innerHTML+= comb(num,j)+" "
    }
    return pascal.innerHTML += " 1<br>"
}//the function above displays a single row. the row it displays is dependent on the value passed into row
function rowNumber(){
    pascal.innerHTML = " ";
    rowN = document.getElementById("number").value;
    for(k = 1; k <= rowN; k++){
        row(k)
    }
}//the function above displays the pascals triangle to whatever row you want
