const bmiSelection = document.querySelector(".bmiSelection");
const height = document.querySelector("#heigth");
const weight = document.querySelector("#weigth");

weight.addEventListener("input", () => {
  let bmi = weight.value / ((height.value / 100) ** 2);
  let percentage;
  if(bmi > 13.5 && bmi < 18.5) {
    percentage = 7 + (bmi - 13.5) * 16 / 5;
  } else if(bmi > 25 && bmi < 30 || bmi >= 30 && bmi < 35 || bmi >= 35 && bmi < 40) {
    percentage = 40 + (bmi - 24.5) * 16 / 5;
  } else if (bmi >= 18.5 && bmi < 25 ) {
    percentage = 23 + (bmi - 18.5) * 16 / 7;
  }

  if(percentage > 6 && percentage < 88) {
    bmiSelection.style.left = `${percentage}%`;
  }
})

const imgBox = document.querySelectorAll(".img-box");
const trainerFlag = document.querySelectorAll(".trainer-flag");
const trainerName = document.querySelectorAll(".trainer-name");

for(let i = 0; i < imgBox.length; i++) {
  imgBox[i].addEventListener ("mouseover", () => {
    trainerFlag[i].classList.remove("hidden");
    trainerName[i].classList.remove("hidden");
  })
  imgBox[i].addEventListener ("mouseout", () => {
    trainerFlag[i].classList.add("hidden");
    trainerName[i].classList.add("hidden");
  })
}


const classes = [
    {
      id: 1,
      category: "Yoga",
      img: "/images/yoga.jpg ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus obcaecati, illum recusandae nesciunt qui possimus exercitationem consequatur ullam unde blanditiis nam facilis voluptas rem necessitatibus natus in voluptate quos iste!",
      time: [
        "Saturday-Sunday: 8:00am - 10.00am",
        "Monday-Tuesday: 10:00am - 12.00pm",
        "Wednesday-Friday: 3:00pm - 6.00pm",
      ],
    },
    {
      id: 2,
      category: "Group",
      img: "/images/group.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus obcaecati, illum recusandae nesciunt qui possimus exercitationem consequatur ullam unde blanditiis nam facilis voluptas rem necessitatibus natus in voluptate quos iste!",
      time: [
        "Saturday-Sunday: 12:00pm - 4.00pm",
        "Tuesday-Thursday: 2:00pm - 4.00pm",
        "Wednesday-Friday: 6:00pm - 9.00pm",
      ],
    },
    {
      id: 3,
      category: "Solo",
      img: "/images/solo.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus obcaecati, illum recusandae nesciunt qui possimus exercitationem consequatur ullam unde blanditiis nam facilis voluptas rem necessitatibus natus in voluptate quos iste!",
      time: [
        "Saturday-Sunday: 10:00am - 12.00am",
        "Monday-Tuesday: 12:00pm - 2.00pm",
        "Wednesday-Friday: 2:00pm - 4.00pm",
      ],
    },
    {
      id: 4,
      category: "Stretching",
      img: "/images/stret.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus obcaecati, illum recusandae nesciunt qui possimus exercitationem consequatur ullam unde blanditiis nam facilis voluptas rem necessitatibus natus in voluptate quos iste!",
      time: [
        "Saturday-Sunday: 11:00am - 1.00pm",
        "Tuesday-Thursday: 10:00am - 12.00pm",
        "Wednesday-Friday: 10:00am - 12.00pm",
      ],
    },
  ];
  
  const GroupBtn = document.querySelectorAll(".group-btn");
  const triangle = document.querySelectorAll(".group-btn div");
  const classesContent = document.querySelector(".classBottom");
  
  GroupBtn[0].style.backgroundColor = "#fc9b01";
  
  for (let i = 0; i < GroupBtn.length; i++) {
    GroupBtn[i].addEventListener("click", () => {
      for (let j = 0; j < GroupBtn.length; j++) {
        GroupBtn[j].style.backgroundColor = "#355592";
        triangle[j].classList.remove("selected");
      }
  
      GroupBtn[i].style.backgroundColor = "#fc9b01";
      triangle[i].classList.add("selected");
      classesContent.innerHTML = "";
      const selectedGroup = GroupBtn[i].innerText;
  
      classes.forEach((e) => {
        if (e.category == selectedGroup) {
          showMenu(e, classesContent);
        }
      });
    });
  }
  
  function showMenu(e, classesContent) {
    let div = document.createElement("div");
    div.classList.add("content-click");
    div.innerHTML = `  <h3>Why are your ${e.category}?</h3>
      <p>${e.description}</p>
      <h3>When comes ${e.category} Your Time.</h3>
      <p>${e.time[0]}</p>
      <p>${e.time[1]}</p>
      <p>${e.time[2]}</p>
  
      `;
    let img = document.createElement("img");
    img.classList.add("class-img");
    img.src = `${e.img}`;
    img.alt = `${e.category}`;
    classesContent.append(div);
    classesContent.append(img);
  }
  

  const navbar = document.querySelector(".navbar");
  const navContainer = document.querySelector(".header-container");
  const containerTop = document.querySelector(".container-text");
  
  document.addEventListener("scroll", () => {
    if(window.pageYOffset != 0) {
      navContainer.classList.add("header-container");
      containerTop.style.paddingTop = "72px";
    } else {
      navContainer.classList.remove("header-container");
      containerTop.style.paddingTop = "144px";
    }
  })



  document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.getElementById("menu-toggle");
    menuToggle.addEventListener("change", function() {
      var nav = document.querySelector(".nav");
      if (menuToggle.checked) {
        nav.style.display = "block";
      } else {
        nav.style.display = "none";
      }
    });
  });
  