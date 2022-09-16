const fs = require('fs')
const prompt = require('prompt-sync')({sigint: true});

console.log("-----------------------CRUD with file system-------------------")
console.log("1. Insert")
console.log("2. Append")
console.log("3. Read")
console.log("4. Update")
console.log("5. Delete")


const filename = prompt('Enter file name for your crud oprations: ');
if(!fs.existsSync)
{
    fs.writeFile(filename+".txt", '', function (err) {
        if (err) throw err;
    });
}

function insertdata(){
    a = prompt('Enter data for your file : ');
    fs.writeFile(filename+".txt", a, function (err) {
        if (err) throw err;
    });
}
function appenddata(){
    a = prompt('Enter data for your file : ');
    fs.appendFile(filename+".txt", a, function (err) {
        if (err) throw err;
    });
}
function readdata(){
    fs.readFile(filename+".txt",function (err,filedata) {
        if (err) throw err;
        console.log(filedata.toString())
    });
}
function deletedata(){
    fs.unlink(filename+".txt",function (err) {
        if (err) throw err;
    });
}
//input from user
let option = prompt('Choose any one option from above menu: ');
switch(option){
    case '1':
        insertdata()
        console.log("Data inserted sucessfully")
        break
    case '2':
        appenddata()
        console.log("Data appended sucessfully")
        break
    case '3':
        readdata()
        break
    case '4':
        console.log("Updation")
        insertdata()
        console.log("Data updated sucessfully")
        break
    case '5':
        deletedata()
        console.log("Data deleted sucessfully")
        break
    default:
        console.log("Invalid option selected :(")
}