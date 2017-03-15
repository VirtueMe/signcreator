function luhn(number) {
 var flag = true,
     sum = 0,
     digits = (number + '').split('').reverse();

  for (let digit of digits) {
    digit = parseInt(digit, 10);
    flag = !flag;

    if (flag) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  return sum % 10 === 0;
}

export function name(name) {
  return !!name && (name.split(' ').filter((part) => part !== '' && part.length > 1).length > 1);
}

export function number(value) {
  return value && value.length >= 13 && value.length <= 16 && luhn(value);
}

export function email(value) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}
