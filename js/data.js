
    // CONVERT OBJECT IN JAVASCRIPT TO STRING IN JSON
    var button=document.getElementById("btn");
     function setJson(){
        var user=document.getElementById("username").value,
            pass=document.getElementById("password").value,
            fullName=document.getElementById("fullname").value,
            Department=document.getElementById("department").value;
            

            alert("*When click button the resalt show in console");


        var myJsObj={ username:"" ,password:"", fullname: "", department:"" };
            myJsObj.username=user;
            myJsObj.password=pass;
            myJsObj.fullname=fullName;
            myJsObj.department=Department;

     console.log(myJsObj)
     console.log(typeof myJsObj);

     let myJsonObj=JSON.stringify(myJsObj);

     console.log(myJsonObj)
     console.log(typeof myJsonObj);
     };

