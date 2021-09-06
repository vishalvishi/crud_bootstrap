
$(function() 
{
     tableForm();
});

var selectedRow = null;
var l = 0;
var m = 0;
var userData = [];
//Function for viewing data
function dataView(actionId, indexData) {
   // console.log(actionId, indexData, "action details");
    let mb = "";
//To delete row in the table
    if (actionId.id == "dd") {
       
       // row = actionId.parentElement.parentElement;
      //  $("#employeeList").deleteRow(row.rowIndex).remove();
      $(".tbl").eq(indexData).remove(); 
     userData.splice(indexData, 1);
       console.log(indexData,"deleete");

      // window.z=window.no--;
        console.log(indexData,"indeeeeeexxx");
        console.log(userData.length,"userdata_delete");
        console.log(userData,"userdata");
        noData();
     
        // console.log("Length_after");
    }
    

//To update the values in the form
    else if (actionId.id == "ud") {
        $("#submit").css("display", "none");
        $("#d_update").css("display", "inline-block");
        $("#d_reset").css("display", "none");
        $("#d_add").css("display", "inline-block");
        $("#f_edit").css("display","inline");
        $("#p_edit").css("display","inline");
        $("#file").css("display", "none");
        $("#photo").css("display", "none");
      //  document.getElementById("bl1").style.filter = "blur(0px)";
      //  document.getElementById("bl").style.filter = "blur(0px)";
      //  document.getElementById("bl2").style.filter = "blur(0px)";
        userData.forEach((element, index) => {
            if (index == indexData) {
                localStorage.setItem("viewElement", index);
                mb = element;
            }
        });
         
        console.log(mb, "mb value");
        $("#name").val( mb.name);
        $("#name").prop('disabled', false);
        $("#dob").val( mb.dob);
        $("#dob").prop('disabled', false);
        $("#age").val( mb.age);
        $("#age").prop('disabled', false);
        $("#course").val( mb.course);
        $("#course").prop('disabled', false);
        $("#email").val( mb.email);
        $("#email").prop('disabled', false);
        $("#phone").val( mb.phone);
        $("#phone").prop('disabled', false);
        $("#file7").css("display", "inline-block");
        $("#photo7").css("display", "inline-block");
        $("#file7").html(mb.file.replace(" ", "_").replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(mb.dat).concat(".").concat("pdf"));
        $("#photo7").html(mb.photo.replace(" ", "_").replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(mb.dat).concat(".").concat("jpg"));
    } else {
 //To view the data in the form
        $("#submit").css("display", "none");
        $("#d_update").css("display", "none");
        $("#d_reset").css("display", "none");
        $("#d_add").css("display", "inline-block");
        $("#file").css("display", "none");
        $("#photo").css("display", "none");
        $("#f_edit").css("display", "none");
        $("#p_edit").css("display", "none");
      //  document.getElementById("bl1").style.filter = "blur(0px)";
      //  document.getElementById("bl").style.filter = "blur(0px)";
      //  document.getElementById("bl2").style.filter = "blur(0px)";

        userData.forEach((element, index) => {
            if (index == indexData) {
                localStorage.setItem("viewElement", index);
                mb = element;
            }
        });
        console.log(mb, "mb value");
       $("#name").val( mb.name);
       $("#name").prop('disabled', true);
       $("#dob").val( mb.dob);
       $("#dob").prop('disabled', true);
       $("#age").val( mb.age);
       $("#age").prop('disabled', true);
       $("#course").val( mb.course);
       $("#course").prop('disabled', true);
       $("#email").val( mb.email);
       $("#email").prop('disabled', true);
       $("#phone").val( mb.phone);
       $("#phone").prop('disabled', true);
       $("#file7").css("display", "inline-block");
       $("#photo7").css("display", "inline-block");
       $("#file7").html(mb.file.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(mb.dat).concat(".").concat("pdf"));
       $("#file_box2").attr("download" ,mb.file.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(mb.dat).concat(".").concat("pdf"));
       $("#photo7").html(mb.photo.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(mb.dat).concat(".").concat("jpg"));
       $("#img_box2").attr("download" , mb.photo.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(mb.dat).concat(".").concat("jpg"));
       
    }
}

function noData(){
    if(userData.length<=0){
        //  window.x=1;
          tb=`<td class="p-3 mb-2 bg-secondary text-white text-center" colspan="9"class="text-center"><b>No data available in table</b></td>`
         $("#u_data").html(tb);
          
       }
    }

//To add extra form details
function add_more() {
   resetForm();
    $("#name").prop('disabled', false);
    $("#dob").prop('disabled', false);
    $("#age").prop('disabled', false);
    $("#course").prop('disabled', false);
    $("#email").prop('disabled', false);
    $("#phone").prop('disabled', false);
    $("#d_add").css("display", "none");
    $("#submit").css("display", "inline-block");
    $("#d_reset").css("display", "inline-block");
    $("#file").css("display", "inline-block");
    $("#photo").css("display", "inline-block");
    $("#file7").css("display", "none");
    $("#photo7").css("display", "none");
    $("#f_edit").css("display", "none");
    $("#p_edit").css("display", "none");
    $("#d_update").css("display", "none");
  //  document.getElementById("bl1").style.filter = "blur(0px)";
  //  document.getElementById("bl").style.filter = "blur(0px)";
  //  document.getElementById("bl2").style.filter = "blur(0px)";
}

var d;
$("#submit").click(function onFormSubmit() {
    
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    var dateTime = date + '-' + time;
    d = dateTime.toString();
//Validating the form
    if (validate()) {
        let data = {
            name: $("#name").val(),
            dob: $("#dob").val(),
            age: $("#age").val(),
            course: $("#course").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            file: $("#file").val(),
            photo: $("#photo").val(),
            dat: d,
            base_64_string: base64String,
            img_base_64_string: imageBase64String
        };
        userData.push(data);

        tableForm();
        resetForm();
    }
});
//Converting file into base64 string
let base64String = "";
function fileUploaded() {
    var file = $("#file").val().replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.');
    var file5 = document.querySelector('input[type=file]')['files'][0];
    var reader = new FileReader();
    reader.onload = function () {
        base64String = reader.result;
    //    console.log(base64String, "string for copy");
    }
    reader.readAsDataURL(file5);
}
//To display file on table
var view_b64 = null
function view_base_64(indexData) {
    let nb = "";
    var elemen;
  //  console.log(indexData, "action details");
    userData.forEach((elemen, index) => {
        if (index == indexData) {
            nb = elemen;

        }
    }
    );
    var s = base64String;

    $("#hdg1").html(nb.file.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(nb.dat).concat(".").concat("pdf"));   
    $("#fl1").attr("src",nb.base_64_string);
    $("#fl3").attr("href" ,nb.base_64_string);
    $("#fl3").attr("download",nb.file.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(nb.dat).concat(".").concat("pdf"))
     // $("#myModal1").modal("show");

   $("#base_64").attr("src",nb.base_64_string);
   $("#file_box4").attr("href" ,nb.base_64_string);
    if (view_b64 === null) {
       $("#viewbox").css("display", "block");
        view_b64 = true
    } else {
       $("#viewbox").css("display", "none");
        view_b64 = null
    }
}
//Converting image into base64 string
let imageBase64String = "";
function imageUploaded() {
    var img = $("#photo").val().replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.');
    var file6 = document.querySelector('input[name=photo]')['files'][0];
    var reader = new FileReader();
    reader.onload = function () {
        imageBase64String = reader.result;
    //    console.log(imageBase64String, "image string");
    }
    reader.readAsDataURL(file6);
}
//To display image on table
var box = null
function img_base_64(indexData) {
    let ib = "";
    var elemen1;
  // console.log(indexData, "action ffgfgfgfgfggdetails");
    userData.forEach((elemen1, index) => {
        if (index == indexData) {
            ib = elemen1;

        }
    }
    );
   
         $("#hdg").html(ib.photo.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(ib.dat).concat(".").concat("jpg"));   
          $("#mg1").attr("src",ib.img_base_64_string);
          $("#mg3").attr("href" ,ib.img_base_64_string);
          $("#mg3").attr("download",ib.photo.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(ib.dat).concat(".").concat("jpg"))
           // $("#myModal").modal("show");
       
  
    console.log(ib.img_base_64_string, "action ffgfgfgfgfggdetails");

  // $("#imgBase_64").attr("src", ib.img_base_64_string);
 //  $("#img_box3").attr("href" ,ib.img_base_64_string);
   
 

    if (box === null) {
       $("#filebox").css("display", "block");
        box = true
    } else {
       $("#filebox").css("display", "none");
        box = null
    }
}
//Updating the form
$("#d_update").click(function formUpdate() {
    $("#submit").css("display", "inline-block");
    $("#d_update").css("display", "none");
    $("#d_reset").css("display", "inline-block");
    $("#d_add").css("display", "none");
    $("#file7").css("display", "none");
    $("#photo7").css("display", "none");
    $("#f_edit").css("display", "none");
    $("#p_edit").css("display", "none");
    $("#file").css("display", "inline-block");
    
   $("#photo").css("display", "inline-block");
   // document.getElementById("bl1").style.filter = "blur(0px)";
   // document.getElementById("bl").style.filter = "blur(0px)";
   // document.getElementById("bl2").style.filter = "blur(0px)";
    if (validate()) {
        var today = new Date();
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
        var dateTime = date + '-' + time;
        d = dateTime.toString();
        let updateId = localStorage.getItem("viewElement");
        let data = {
            name: $("#name").val(),
            dob: $("#dob").val(),
            age: $("#age").val(),
            course: $("#course").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            file: $("#file").val(),
            photo: $("#photo").val(),
            dat: d,
            base_64_string: base64String,
            img_base_64_string: imageBase64String
        };
        console.log(userData, "before update");
        userData[updateId] = data;
        // window.a=window.no;
      //  window.c=2;
        console.log(window.a,"update id")
        console.log(userData, "after update");
        tableForm();
        resetForm();
    }
   
});
//Getting index number
function vv_photo(index_Data) {
    window.ph = index_Data;
}
//To display photo
view_b64_photo = null;
function v_photo() {
    var i_b = "";
   // console.log(window.ph, "action details");
    userData.forEach((elemen2, index_) => {
        if (index_ == window.ph) {
            i_b = elemen2;

        }
    }
    );

    $("#img_box1").attr('src',i_b.img_base_64_string);
    $("#img_box2").attr('href',i_b.img_base_64_string);

    if (view_b64_photo === null) {
        $("#img_box").css("display", "block");
        view_b64_photo = true
    } else {
        $("#img_box").css("display", "none");
        view_b64_photo = null
    }
}
//Getting index number
function vv_file(index_data) {
    window.fh = index_data;
}
//To display the file
view_b64_file = null;
function v_file() {
    var j_b = "";
   // console.log(window.fh, "action details");
    userData.forEach((elemen3, index_s) => {
        if (index_s == window.fh) {
            j_b = elemen3;

        }
    }
    );

    $("#file_box1").attr('src', j_b.base_64_string);
    $("#file_box2").attr('href', j_b.base_64_string);
    if (view_b64_file === null) {
        $("#file_box").css("display", "block");
        view_b64_file = true
    } else {
        $("#file_box").css("display", "none");
        view_b64_file = null
    }
}
//Editing the file
$("#f_edit").click(function file_edit() {
    $("#file7").css("display", "none");
    $("#file").css("display", "inline-block");
    $("#f_edit").css("display", "none");

});
//Editing the photo
$("#p_edit").click(function photo_edit() {
   $("#photo7").css("display", "none");
   $("#photo").css("display", "inline-block");
   $("#p_edit").css("display", "none");

});
//Getting values from the form
function readFormData() {
    return true;
}
//Creating the table
window.x=1;
function tableForm() {
     tb = "";
    userData.forEach((element, index) => {
     //   console.log(element, index, "element,index");
     console.log(userData.length,"table_length");
        tb = tb + `<tr class="tbl"><td>${element.name}</td>
        <td>${element.dob}</td>
        <td>${element.age}</td>
        <td>${element.course}</td>
        <td>${element.email}</td>
        <td>${element.phone}</td>
        <td  data-toggle="modal" data-target="#myModal1" onclick="view_base_64(${index})"><a href="#">${element.file.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(element.dat).concat(".").concat("pdf")}</a></td>
        <td   data-toggle="modal" data-target="#myModal" onclick="img_base_64(${index})"><a href="#">${element.photo.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(element.dat).concat(".").concat("jpg")}</a></td>
        <td><button class="btn btn-outline-info" id="vi"onclick="dataView(this,${index});vv_photo(${index});vv_file(${index});">VIEW</button><button class="btn btn-outline-secondary" id="ud" onclick="dataView(this,${index})">UPDATE</button><button class="btn btn-outline-danger" id="dd" onclick="dataView(this,${index})">DELETE</button></td></tr>`
    });
   
    if(tb==""){
      tb=`<td class="p-3 mb-2 bg-secondary text-white text-center" colspan="9" class="" ><b>No data available in table</b></td>`
      $("#u_data").html(tb);
       
    
    }else{
      
   //    window.no=window.x++;
      //  console.log(window.no,"else");
    
  //  console.log(window.no,"window no");
   $("#u_data").html(tb);
}
    
   }
  

window.c=1;
// Reset form after data is submitted
function resetForm() {
   $("#name").val("") ;
   $("#dob").val("") ;
   $("#age").val("") ;
   $("#course").val("") ;
   $("#email").val("") ;
   $("#phone").val("") ;
   $("#file").val("") ;
   $("#photo").val("") ;
}
//To hide the table
function hideTable() {
   $('#employeeList1').css("display", "none");
   $("#bl").style.filter = "blur(0px)";
   $("#bl1").style.filter = "blur(0px)";
   $("#bl2").style.filter = "blur(0px)";
}
//To show the table
function showTable() {
    
   $("#employeeList1").css("display", "inline-block");
   // document.getElementById("bl").style.filter = "blur(6px)";
  //  document.getElementById("bl1").style.filter = "blur(6px)";
  //  document.getElementById("bl2").style.filter = "blur(6px)";
    
}
// Form validation
function validate() {
    var name1 = $("#name");
    var dob1 = $("#dob");
    var age1 = $("#age");
    var course1 = $("#course");
    var phone1 = $("#phone");
    var email1 = $("#email");
    var file1 = $("#file");
    var photo1 = $("#photo");
    var filePath = $('#file').val();
    var photoPath = $('#photo').val();
    var ag = $("#age").val();
    var fileExtensions = /(\.pdf)$/i;
    var photoExtensions = /(\.jpg|\.jpeg)$/i;
    var nam = /^(?!^ +$)([\w -&]+)$/;
    var phn = /^([0-9]{10})+$/;
    var mail = /^([A-Za-z0-9_.])+\@([a-z0-9])+\.([a-z])+$/;
    if (name1.val().trim() == "") {
        alert("Please Enter Your Name");
        return false;
    } else if (!nam.test(name1.val())) {
        alert("Use Only Alphabets   ");
        return false;
    } else if (dob1.val().trim() == "") {
        alert("Please Enter Your Dob");
        return false;
    } else if (age1.val().trim() == "") {
        alert("Please Enter Your Age");
        return false;
    } else if (ag < 0 || ag > 200) {
        alert("Please Enter Your Age Between 0-200");
    } else if (course1.val().trim() == "") {
        alert("Please Enter Your Course");
        return false;
    } else if (email1.val().trim() == "") {
        alert("Please Enter Your Email");
        return false;
    } else if (!mail.test(email1.val())) {
        alert("Please Enter Valid Email Address ");
        return false;
    } else if (phone1.val().trim() == "") {
        alert("Please Enter Your Phone Number");
        return false;
    } else if (!phn.test(phone1.val())) {
        alert("Use Only 10 Digit Numbers   ");
        return false;
    } else if (file1.val() == "") {
        alert("Please Upload Your Certificate");
        return false;
    } else if (!fileExtensions.exec(filePath)) {
        alert('Please Upload Your File In Pdf Format');
        return false;
    } else if (photo1.val() == "") {
        alert("Please Upload Your Photo");
        return false;
    } else if (!photoExtensions.exec(photoPath)) {
        alert('Please Upload Your Photo In Jpg Format');
        return false;
    }
    else {
        return true;
    }
}
var box = null
function pop1() {
    if (box === null) {
        $("#filebox").css("display", "block");
        box = true
    } else {
        $("#filebox").css("display", "none");
        box = null
    }
}
var view = null
function pop2() {
    if (view === null) {
        $("#viewbox").css("display", "block");
        view = true
    } else {
        $("#viewbox").css("display", "none");
        view = null
    }
}
var view1 = null
function pop3() {
    if (view1 === null) {
        $("#img_box").css("display", "block");
        view1 = true
    } else {
        $("#img_box").css("display", "none");
        view1 = null
    }
}
var view2 = null
function pop4() {
    if (view2 === null) {
        $("#file_box").css("display", "block");
        view2 = true
    } else {
        $("#file_box").css("display", "none");
        view2 = null
    }
}
