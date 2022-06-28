var Usrdata = document.querySelector('.box');

const userDetail = [
    {img:"https://i.ytimg.com/vi/Tsnyq-3k7Bg/maxresdefault.jpg", 
    title: "NO estamos hechos de particulas",
    profilePic: "https://yt3.ggpht.com/ytc/AKedOLRcaE67CdD1w6waGaAJlurZEL830OO7C2thp8PrPQ=s900-c-k-c0x00ffffff-no-rj",
    userName:"Quantum Fracture",
    views: "218.915 visualizaciones",
    date: "hace 2 años"},
    {img:"https://i.ytimg.com/vi/IWaC_hTumN8/maxresdefault.jpg", 
    title: "Como empezar a hacer videos en Youtube",
    profilePic: "https://yt3.ggpht.com/ytc/AKedOLQ5wak9ahFfsdHvj9oG8mNbOQX3fk-4AboxLAJnHw=s900-c-k-c0x00ffffff-no-rj",
    userName:"Jaime Altozano",
    views: "412.135 visualizaciones",
    date: "hace 1 año"},
]

document.getElementById('Posts').innerHTML = userDetail.map(user => 
    `<div class="Post">
      <img src=${user.img} alt="Profile">
      <div class="userZone">
       <img src=${user.profilePic} alt="Profile">
       <div class="titleZone">
         <h1>${user.title}</h1>
         <h2>${user.views}  · ${user.date}</h2>
       </div>
      </div>
    </div>`
).join('')