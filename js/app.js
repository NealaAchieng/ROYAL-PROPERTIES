const firstName = "neala";
console.log(firstName);

const detailsContainer =document.getElementById("details-container");



function getFromLocalStorage(){
  const houses = JSON.parse(localStorage.getItem("houses"));

  houses.map(house=>{
    const cardDetails = document.createElement("div");
    cardDetails.setAttribute("class", "details__card");
    const cardDetailsImg = document.createElement("div");
    cardDetailsImg.setAttribute("class", "details__card__img");
    cardDetails.appendChild(cardDetailsImg);

    const imgH4 = document.createElement("h4");
    imgH4.textContent = `Ksh. ${house.housePrice}`;
    const  imgImg =document.createElement("img");
    imgImg.setAttribute("class", "details__card__img");
    imgImg.setAttribute("src", `images/${house.houseImages}`)

    cardDetailsImg.appendChild(imgH4);
    cardDetailsImg.appendChild(imgImg);
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.textContent=house.houseAmenities;
    p2.textContent=house.houseLocation;
    p3.textContent=house.houseSize;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    const button = document .createAttribute("button");
    button.textContent = "Book Now"


    cardDetails.appendChild(cardDetailsImg);
    cardDetails.appendChild(div);

   detailsContainer.appendChild(cardDetails);

    


  })

}


getFromLocalStorage();




