 // Функция преобразования цвета из 10-ного представления в 16-ный
 var nums = [];
    for (var j = 0; j < 3; j++){
 
        nums.push(num = prompt('Число от 0 до 256'));
    }
  var numtoString = nums.map(function(num) {
    return parseInt(num).toString(16);
 });
 console.log( '#' + numtoString.join('') );