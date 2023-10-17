var pass = prompt("Enter Password");

let password = ' p@ssword@2023 ';

if (password.length <= 8 && password.includes(' p@ssword ')) {
  console.log(' VALID PASSWORD ');
} else {
  console.log(' INVALID PASSWORD ');
}