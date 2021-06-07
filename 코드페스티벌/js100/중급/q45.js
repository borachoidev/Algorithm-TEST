//getTime() 메서드 사용하기

const today = new Date();
console.log(today);
console.log(today.getTime());

const year = 60 * 60 * 24 * 365 * 1000;
Math.floor(today.getTime() / year + 1970);
