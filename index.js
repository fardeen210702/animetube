let onoff= document.getElementById('on-off');
let btn= document.getElementById('Non');
let view= document.querySelector('.unordered-list')

onoff.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
    onoff.classList.add("fa-moon")
    onoff.classList.remove("fa-sun")
  }
  else{
    onoff.classList.remove("fa-moon")
    onoff.classList.add("fa-sun")
  }
});

btn.addEventListener('click',()=>{
    if(view.style.display!="block"){
        view.style.display="block";
        Non.classList.remove("fa-bars");
        Non.classList.add("fa-xmark");

    }
    else{
        view.style.display="none";
        Non.classList.add("fa-bars");
        Non.classList.remove("fa-xmark");
    }
})

// form logic----->

function clearerrors(){
errors = document.getElementsByClassName('formERROR');
for(let item of errors){
  item.innerHTML="";
}
}

function seterror(id,error){
element= document.getElementById(id);
element.getElementsByClassName('formERROR')[0].innerHTML= error;
}

function validateform(){
  var returnval =true;
  let name = document.forms['myform']['fname'].value;
  if(name.length<4){
    seterror('name','*Name must be atleast 4 chars');
    returnval = false;
  }
  let email = document.forms['myform']['femail'].value;
  if(email.length>20){
    seterror('email','*Email should not be more than 20 chars');
    returnval = false;
  }
  else if(email.length==0){
    seterror('email','*Enter a valid email');
    returnval = false;
  }
  let phone = document.forms['myform']['fphone'].value;
  if(phone.length!=10){
    seterror('phone','*Enter a valid ph.no');
    returnval = false;
  }
  let password = document.forms['myform']['fpassword'].value;
  if(password.length<8 || password.length>16){
    seterror('password','*Password must be atleast 8-16 chars');
    returnval = false;
  }
  let text = document.forms['myform']['ftext'].value;
  if(text.length==0){
    seterror('text','*Give us your response on our website');
    returnval = false;
  }
  return returnval;
}