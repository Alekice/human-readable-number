module.exports = function toReadable (number) {
  const fromZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const fromTentoNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  let n = String(number);
  
  if (n.length === 1) {
    
    return fromZeroToNine[n];
    
  } else if (n.length === 2) {
    
    let firstDigit = n.slice(0, 1);
    let lastDigit = n.slice(1);
    
    if (n.startsWith('1')) {
      return fromTentoNineteen[lastDigit];
    } else if (n.endsWith('0')) {
      return tens[firstDigit - 2];
    } else {
      return `${tens[firstDigit - 2]} ${fromZeroToNine[lastDigit]}`;
    }
    
  } else {
    let firstDigit = n.slice(0, 1);
    let secondDigit = n.slice(1, 2);
    let lastDigit = n.slice(2);
    
    if (secondDigit === '0') {
      
      if (lastDigit === '0') {
        
        return `${fromZeroToNine[firstDigit]} hundred`;
      } else {
        return `${fromZeroToNine[firstDigit]} hundred ${fromZeroToNine[lastDigit]}`;
      }
      
    } else if (secondDigit === '1') {
      
        return `${fromZeroToNine[firstDigit]} hundred ${fromTentoNineteen[lastDigit]}`;
      
    } else {
      
      if (lastDigit === '0') {
        
        return `${fromZeroToNine[firstDigit]} hundred ${tens[secondDigit - 2]}`;
        
      } else {
        return `${fromZeroToNine[firstDigit]} hundred ${tens[secondDigit - 2]} ${fromZeroToNine[lastDigit]}`;
      }
      
    }
  }
}