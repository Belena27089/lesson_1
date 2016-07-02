 // Функция преобразования цвета из 10-ного представления в 16-ный
 var colorToHex = function () {  
    var nums = [];
    for (var j = 0; j < 3; j++){
       var num = prompt('Число от 0 до 256');

          while (num < 0 || num > 255){
                num = prompt('Число от 0 до 256');
          }
           nums.push(num);
    }   
  var numtoString = nums.map(function(numer) {   
    
    return (numer < 10 && numer >= 0) ? (0 + parseInt(numer).toString(16)) : parseInt(numer).toString(16);
    
 });
  return numtoString = console.log('#' + numtoString.join(''));
} 

console.log(colorToHex());

 

// Функция, преобразующую число в объект
  
 

  var  convertNum = function (){

      var char = prompt();
      if (char > 999){
       char = prompt('Вы ввели слишком большое число,надо не больше 999');
     }
      var newchar = char.split('').reverse();    

      var num = {};
      num['единицы'] = newchar[0]; 
      num['десятки'] = newchar[1]; 
      num['сотни'] = newchar[2];
      return num;
  }  
  console.log(convertNum()); 


 // Написать функцию toQueryString(obj), которая принимает аргументом объект и возвращает строку.
 
user = {firstName: 'Dmitry', lastName: 'Bondarchuk', birthDay: '16.07.1990', phones: ['89001234567', '83431234567']};
 
function toQueryString(user) {
    var str = "";
  
    for (var i in user){
        if (!true) {
         str += "&";
       }
        str += i + "=" + user[i];
        
    }
    return str;
}
str = toQueryString({});
console.log(str);