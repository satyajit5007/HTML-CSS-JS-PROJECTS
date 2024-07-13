let form = document.querySelector("form");
let main = document.querySelector(".main");
let call = document.querySelector("#call");

form.addEventListener("submit", (event) => {
  let name = event.target.uname.value;
  let lname = event.target.lname.value;
  let cname = event.target.cname.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;
  let checkStatus = 0;

  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  for (let v of userData) {
    if (v.email == email || v.phone == phone) {
      checkStatus = 1;
      break;
    }
  }

  if (checkStatus == 1) {
    alert("email or phone already exists");
  } else {
    userData.push({
      name: name,
      lname: lname,
      cname: cname,
      email: email,
      phone: phone,
    });
    localStorage.setItem("userDetails", JSON.stringify(userData));
    event.target.reset();
  }

  displayData();
  event.preventDefault();
});

let displayData = () => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  let finalData = "";

  userData.forEach((element, i) => {
    finalData += `<div class="items">
            <span onclick='removeData(${i})'>&times;</span>

            <h5>First Name</h5>
            <div>${element.name}</div>

            <h5>Last Name</h5>
            <div>${element.lname}</div>

            <h5>Country</h5>
            <div>${element.cname}</div>

            <h5>Email</h5>
            <div>${element.email}</div>

            <h5>Phone No.</h5>
            <div>${element.phone}</div>
        </div>`;
  });

  main.innerHTML = finalData;
};
let removeData = (index) => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.splice(index, 1);
  localStorage.setItem("userDetails", JSON.stringify(userData));
  displayData();
};

call.addEventListener("click", () => {
  localStorage.clear("userDetails");
  displayData();
});

displayData();