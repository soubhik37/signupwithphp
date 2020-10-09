
let x = document.getElementById("snackbar");
// name verification
function name() {
  let name = document.getElementById("name").value;
  if (name == "") {
    x.innerHTML = ("Name is empty");
    verificationError();
    name.focus();
    return (false);
  }
  else if (!isNaN(name)) {
    x.innerHTML = ("Number Not allow in name field");
    verificationError();
    name.focus();
    return (false);
  }
  else if (name.length < 3) {
    x.innerHTML = ("The name is too short");
    verificationError();
    name.focus();
    return (false);
  }
  else if (name.length > 20) {
    x.innerHTML = ("The name is so big");
    verificationError();
    return (false);
  }
  else if (!(name == "")) {
    var letters = "^[a-zA-Z \s]+$";
    if (name.match(letters)) {
      return true;
    }
    else {
      x.innerHTML = ("Only alphabet allow in name field");
      verificationError();
      name.focus();
      return false;
    }
  }
  else {
    return (true);
  }
}
// Number verification
function number() {
  let mobile = document.getElementById("mobile").value;
  if (mobile == "") {
    x.innerHTML = ("Mobile no is empty");
    verificationError();
    mobile.focus();
    return (false);
  }
  else if (mobile.length <= 9) {
    x.innerHTML = ("The mobile no is too short minimum 10 dight allow");
    verificationError();
    mobile.focus();
    return (false);
  }
  else if (mobile.length >= 14) {
    x.innerHTML = ("The mobile no is too big maximum 13 dight allow");
    verificationError();
    mobile.focus();
    return (false);
  }
  else if (isNaN(mobile)) {
    x.innerHTML = ("alphabet not allow in number field");
    verificationError();
    mobile.focus();
    return (false);
  }
  else {
    return (true);
  }
}
// address verification
function address() {
  let address = document.getElementById("address").value;
  if (address.length > 50) {
    x.innerHTML = ("The Address is so big");
    verificationError();
    address.focus();
    return (false);
  }
  else if (address == "") {
    x.innerHTML = ("Address is empty");
    verificationError();
    address.focus();
    return (false);
  }
  else if (address.length < 8) {
    x.innerHTML = ("The Address is too short");
    verificationError();
    address.focus();
    return (false);
  }
  else {
    return (true);
  }
}
// main verification funtion
function checking() {
  name();
  number();
  address();
  let nam = name()
  let num = number()
  let add = address()
  if (nam && num && add) {
    document.getElementById("mainForm").submit();
  }
}
// display show
function verificationError() {
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
