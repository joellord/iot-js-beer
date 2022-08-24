let status = false;

setInterval(() => {
  status = !status;
  console.log(`LED is ${status ? "on" : "off"}`);
  LED1.write(status);
}, 500);