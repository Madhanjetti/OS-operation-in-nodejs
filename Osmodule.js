const os=require('os')

console.log("CPU Architecture :",os.arch());
console.log("Free memory",os.freemem());
console.log("Total memory",os.totalmem());
console.log("Operating system name",os.type());
console.log("os release ",os.release());
console.log("List of network Interfaces :"+os.networkInterfaces());
console.log("OS default directory for temp files:"+os.tmpdir());
console.log("Endianness of system :"+os.endianness());
