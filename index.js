// Code your solutions in this file
writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' );
function writeCards(name, event) {
   
    const array = []
    for (let i = 0; i < name.length; i++) {
        array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    console.log(array);
    return array;

}
function countDown(number) {
    while (number>0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}