function isTriangle(a,b,c){

    if((a+b)>c && (a+c)>b && (b+c)>a){
        return true
    } else {
        return false
    }

}
console.log(isTriangle(0,1,3))