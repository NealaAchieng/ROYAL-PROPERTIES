const firstName = "neala";
console.log(firstName);
const addHouse = document.querySelectorAll(".house");
const submitHouse = document.getElementById("submit-house");
console.log(addHouse)
submitHouse.addEventListener("click", function (e) {
  e.preventDefault();
  const newHouse = {};
  const houses=[];
  addHouse.forEach(function (element) {
    if (element.value === "") {
      element.classList.add("error");
      message.textContent = "Please fill all the fields";
      message.classList.add("error-message");
      return;
    } else {
      element.classList.remove("error");
      message.textContent=""
      newHouse.houseName = addHouse[0].value;
      newHouse.housePrice = addHouse[1].value;
      newHouse.houseLocation = addHouse[2].value;
      newHouse.houseSize = addHouse[3].value;
      newHouse.houseRent= addHouse[4].value;
      newHouse.houseImages = addHouse[5].files[0].name;
      newHouse.houseamenities = addHouse[6].value;
      newHouse.houseSelect= addHouse[7].value;
console.log(addHouse[0].value);
console.log(newHouse);
    }
  })
// local storage
if (localStorage.getItem ("houses")===null){
    houses.push(newHouse);
localStorage.setItem("houses",JSON.stringify(houses));
}
else{
    const localStorageHouses=JSON.parse(localStorage.getItem("houses"))
    localStorageHouses.push(newHouse)
    localStorage.setItem("houses",JSON.stringify(localStorageHouses))
}
})
