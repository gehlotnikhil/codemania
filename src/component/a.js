a = [
    { id: 4 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
]
for(i = 0; i<a.length-1;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]["id"]>a[j]["id"]){
            temp = a[i]
            a[i] = a[j]
            a[j] = temp
        }
    }
}
console.log(a)