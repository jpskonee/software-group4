//Genearating a lucky number


const luckyNum = () => {
    let luckyNum = Math.floor(Math.random() * 100);
    luckyNum += luckyNum;

    return luckyNum;
}


module.exports = luckyNum;