  // Добавление пользователя
  var user = {};

  function getUser() {
    
    user.firstName = prompt ('Имя:');
    
    user.lastName = prompt ('Фамилия:');
    
    user.birthDay = prompt ('Дата рождения:');
   
    user.phones = [];
      for (var j = 0; j < 2; j++){
          
      user.phones.push (user.phone = prompt ('Телефон:'));
      }
      return user
    }
    
  user = getUser();
  users.push(user);

  // Вывод в CSV формате

  function csvPhormat() {  

    return ('Пользователь'+ (r+1) + ':' + 'Имя:'+ ' ' + "'" + users[r].firstName
            + "'" + ';' +'Фамилия:'+ ' ' + "'" + users[r].lastName + "'" + ';'
             + 'Дата рождения:'+ ' ' + "'" + users[r].birthDay + "'" + ';' + 'Телефоны:'+ 
             "'" + users[r].phones.join(' , ') + "'"+';');

  
  }

  for (var r = 0; r < users.length; r++){

    console.log(csvPhormat());
  }



  // функция вывода наименьшего числа
  
  function min(a, b) {
    
    return (a < b) ? a : b;
  }

  console.log (min(0, 10));
  console.log (min(0, -10));

  // Функция подсчёта количества символов 'B' в строке

  function countBs(string) {
  	
  	var calculated = 0;
  	   

  	for (var i = 0; i < string.length; i++) {
  		if (string.charAt(i) == 'B') {
  		 calculated++;

  	    } 	   
    }
    return calculated;
  }


  console.log(countBs('ABBaBbBbGH'));

  
  function countChar(string, sim) {

  	var calculated = 0;

  	for (var i = 0; i < string.length; i++) {
  		if (string.charAt(i) == sim) {
  		 calculated++;
  	    } 	   
    }
    return calculated;
  }

console.log(countChar('ABBaBbBbGH', 'b'));


// Рекурсивную функцию isEven 

function isEven(a) {	
	
    if (a === 0) {

        return true;

    } 

    if (a === 1){

        return false;
    }

    return isEven(a-2);
}
  	
 console.log(isEven(50));/*true*/
 console.log(isEven(75));/*false*/
 console.log(isEven(-1));/*VM299:1 Uncaught RangeError: Maximum call stack size exceeded(…)*/



 function isEven(a) {	
	
    if (a < 0) {

        return isEven(a+2);

    } else if (a === 0) {

        return true;

    }

    if (a === 1){

        return false;
    }

    return isEven(a-2);
}
  	
 console.log(isEven(50));/*true*/
 console.log(isEven(75));/*false*/
 console.log(isEven(-1));/*false*/