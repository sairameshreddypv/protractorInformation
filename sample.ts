let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

console.log("cucumber_"+date + ":" +hours + ":" + minutes +".html");

let ts = Date.now();

// timestamp in milliseconds
console.log(ts);

// timestamp in seconds
console.log(Math.floor(ts/1000));

// qa validation.com

console.log(new Date().toJSON().slice(0,10));
console.log("cucumber_"+new Date().toJSON().slice(0,30) +".html");
console.log(new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0].replace('T',' '));
console.log("cucumber_"+new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0].replace('T',' ')+".html");