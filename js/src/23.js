let dateLogger = setInterval(() => console.log(new Date), 5000);
setTimeout(() => clearInterval(dateLogger),  52000);
