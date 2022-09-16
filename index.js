const prompt = require('prompt-sync')({sigint: true});
var fs = require("fs")
const path = require("path") //non global

//folder path
const pathname = path.join(__dirname,"StringSeparation")
console.log("---------------------------Vowels and consonats will be separated in  separate files----------------------------")
//input from user
const string = prompt('Enter input for vowel and consonants separation: ');
//replaced space
const input =  string.replace(/ /g,'')
//check whethere char is vowel or consonants
const vowels = input.match(/[aeiou]/gi)
const consonants = input.match(/[^aeiou]/gi)

//if folder not exists then create
if(!fs.existsSync(pathname))
{
    fs.mkdirSync(pathname)
}
fs.writeFile(pathname + '/vowel.txt', 'Vowels : '+vowels, function (err) {
    if (err) throw err;
  });
fs.writeFile(pathname + '/consonants.txt', 'Consonants : '+consonants, function (err) {
    if (err) throw err;
  });