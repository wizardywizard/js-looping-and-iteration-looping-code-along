function writeCards(name, suprise){
    let gift = []
    for (let i = 0; i < name.length; i++) {
        gift.push(`Thank you, ${name[i]}, for the wonderful ${suprise} gift!`);
    }
    return gift;
}
 
function countDown(num){
    while (num >= 0){
        console.log(num);
        num--;
    }
    return num
}
