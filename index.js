// Code your solutions in this file

function writeCards(names, message){
    let messages = []
    for(let name of names){
        messages.push(`Thank you, ${name}, for the wonderful ${message} gift!`)
    }
    return messages
}

function countDown(num){
    for(let i=0; i<=num; num-- ){
        console.log(num);
    }
}