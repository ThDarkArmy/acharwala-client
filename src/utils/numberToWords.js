export const numberToWords = (num) => {
    console.log('Number to words', num);

    num = Number(num.replace(/,/g, ''));
    if (num === 0) return 'zero';

    const belowTwenty = [
        'zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'nine', 
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
        'eighteen', 'nineteen'
    ];
    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    const thousands = ['', 'thousand', 'million', 'billion'];

    function helper(n) {
        if (n === 0) return '';
        if (n < 20) return belowTwenty[n] + ' ';
        if (n < 100) return tens[Math.floor(n / 10)] + ' ' + helper(n % 10);
        if (n < 1000) return belowTwenty[Math.floor(n / 100)] + ' hundred ' + helper(n % 100);
        return '';
    }

    let result = '';
    let i = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + thousands[i] + ' ' + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return result.trim();
}


