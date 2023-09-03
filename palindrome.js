let num = 121;
let sum='';
for(let i = num.length-1; i >=0 ; i++)
{
    sum+=num[i]
}if(parseInt(sum)==num) console.log('palindrome')
else console.log('not')