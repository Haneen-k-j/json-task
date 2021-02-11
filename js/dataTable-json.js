// convert json to object and display data in table 

var text = '{"users":[' +
'{"username":"Haneen","password":"111" ,"fullname":"Haneen Kadhim","department":"IT"},' +
'{"username":"Assel","password":"121" ,"fullname":"Aseel Saad","department":"IT"},' +
'{"username":"Israa","password":"131" ,"fullname":"Israa Abd","department":"IT"},'+
'{"username":"Baidaa","password":"141" ,"fullname":"Baidaa Shimal","department":"IT"},'+
'{"username":"Mahdi","password":"151" ,"fullname":"Mahdi Fahim","department":"IT"},'+
'{"username":"Saif","password":"141" ,"fullname":"Saif","department":"IT"}]}';

console.log(text);
console.log(typeof text);


obj = JSON.parse(text);
console.log(obj.users);
console.log(typeof obj);


// dsiplay data in table
usersTable(obj.users)


function usersTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].username}</td>
                        <td>${data[i].password}</td>
                        <td>${data[i].fullname}</td>
                        <td>${data[i].department}</td>
                  </tr>`
        table.innerHTML +=row;


    }
};

