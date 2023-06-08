const firstName = "neala";
console.log(firstName);
const addHouse = document.querySelectorAll(".house");
const submitHouse = document.getElementById("submit-house");
submitHouse.addEventListener("click", function (e) {
  e.preventDefault();
const newHouse = {}
  addHouse.forEach(function (element) {
    if (element.value === "") {
      element.classList.add("error");
      message.textContent = "Please fill all the fields";
      message.classList.add("error-message");
      return;
    } else {
      element.classList.remove("error");
    }
newHouse.houseName =element[0].value;
newHouse.housePrice =element[1].value;
newHouse.houseLocation =element[2].value;
newHouse.houseSize =element[3].value;
newHouse.rentHouse =element[4].value;
newHouse.houseImages =element[5].value;
newHouse.houseamenities=element[6].value;
newHouse.selectHouse=element[7].value;
  });
});
