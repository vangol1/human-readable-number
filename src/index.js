module.exports = function toReadable (number) {
    let a = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    let teenToReadable = (n =>{
        return a[n];
    })

    let twoDigitToReadable = (n =>{
        let digits = n.toString().split('');
        if(digits[1] != 0){
            return b[digits[0]] + " " + a[digits[1]];
        }
        else
            return b[digits[0]]
    })
    
    let digits = number.toString().split('');
    if(number < 20){
        return teenToReadable(number);
    }
    else if(number < 100){
        return twoDigitToReadable(number)
    }
    else if(number - 100 * digits[0] < 20){
        if(number - 100 * digits[0] === 0)
            return a[digits[0]] + " hundred"
        return a[digits[0]] + " hundred " + teenToReadable(number - 100 * digits[0])
    }
    else{
        return a[digits[0]] + " hundred " + twoDigitToReadable(number - 100 * digits[0])
    }
}
