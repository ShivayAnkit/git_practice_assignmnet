let num = 10;
count=0;
for(let i = 1; i < num; i++)
{
    if(num%2==0){
        count++;
        break;
    }
}
if(count==0){
    console.log('prime')
}else{
    console.log('not prime')

}