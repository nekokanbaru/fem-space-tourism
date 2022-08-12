//navigation popup
const nav = document.querySelector(".nav-list");
const navBackground = document.querySelector(".nav-background-image");
const button = document.querySelector(".nav-button");
const btnClose = document.querySelector(".nav-close-button");

//navigation popup
button.addEventListener("click", () => {
  nav.toggleAttribute("data-visible");
  navBackground.toggleAttribute("data-visible");
  btnClose.toggleAttribute("data-visible");
  //body.toggleAttribute("scrolling");
});

btnClose.addEventListener("click", () => {
  nav.toggleAttribute("data-visible");
  navBackground.toggleAttribute("data-visible");
  btnClose.toggleAttribute("data-visible");
});

//destination text change

const planetImage = document.querySelector("#planet-image");
const planetName = document.querySelector("#planet-name");
const planetDescription = document.querySelector("#planet-description");
const distance = document.querySelector("#distance");
const travelTime = document.querySelector("#travel-time");

const mars = document.getElementById("mars");
const moon = document.getElementById("moon");
const europa = document.getElementById("europa");
const titan = document.getElementById("titan");

if (moon) {
  moon.toggleAttribute("active");

  mars.addEventListener("click", function changeText() {
    moon.removeAttribute("active");
    europa.removeAttribute("active");
    titan.removeAttribute("active");
    mars.toggleAttribute("active");

    planetImage.src = "assets/destination/image-mars.png";
    planetName.innerHTML = "MARS";
    planetDescription.innerHTML =
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    distance.innerHTML = "225 MIL. KM";
    travelTime.innerHTML = "9 MONTHS";
  });

  moon.addEventListener("click", function changeText() {
    mars.removeAttribute("active");
    europa.removeAttribute("active");
    titan.removeAttribute("active");
    moon.toggleAttribute("active");

    planetImage.src = "assets/destination/image-moon.png";
    planetName.innerHTML = "MOON";
    planetDescription.innerHTML =
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    distance.innerHTML = "384,400 KM";
    travelTime.innerHTML = "3 DAYS";
  });

  europa.addEventListener("click", function changeText() {
    mars.removeAttribute("active");
    moon.removeAttribute("active");
    titan.removeAttribute("active");
    europa.toggleAttribute("active");

    planetImage.src = "assets/destination/image-europa.png";
    planetName.innerHTML = "EUROPA";
    planetDescription.innerHTML =
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    distance.innerHTML = "628 MIL. KM";
    travelTime.innerHTML = "3 YEARS";
  });

  titan.addEventListener("click", function changeText() {
    mars.removeAttribute("active");
    moon.removeAttribute("active");
    europa.removeAttribute("active");
    titan.toggleAttribute("active");

    planetImage.src = "assets/destination/image-titan.png";
    planetName.innerHTML = "TITAN";
    planetDescription.innerHTML =
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    distance.innerHTML = "1.6 BIL. KM";
    travelTime.innerHTML = "7 YEARS";
  });
}
// Crew content change

const crewImage = document.querySelector("#crew-person");
const crewTitle = document.querySelector("#crew-title");
const crewName = document.querySelector("#crew-name");
const crewDescription = document.querySelector("#crew-description");

const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");
const dot4 = document.querySelector("#dot4");

if (dot1) {
  dot1.toggleAttribute("dot-active");

  dot1.addEventListener("click", function changeContent() {
    dot2.removeAttribute("dot-active");
    dot3.removeAttribute("dot-active");
    dot4.removeAttribute("dot-active");
    dot1.toggleAttribute("dot-active");

    crewImage.src = "assets/crew/image-douglas-hurley.png";
    crewTitle.innerHTML = "COMMANDER";
    crewName.innerHTML = "DOUGLAS HURLEY";
    crewDescription.innerHTML =
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
  });

  dot2.addEventListener("click", function changeContent() {
    dot1.removeAttribute("dot-active");
    dot3.removeAttribute("dot-active");
    dot4.removeAttribute("dot-active");
    dot2.toggleAttribute("dot-active");

    crewImage.src = "assets/crew/image-mark-shuttleworth.png";
    crewTitle.innerHTML = "MISSION SPECIALIST";
    crewName.innerHTML = "MARK SHUTTLEWORTH";
    crewDescription.innerHTML =
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
  });

  dot3.addEventListener("click", function changeContent() {
    dot1.removeAttribute("dot-active");
    dot2.removeAttribute("dot-active");
    dot4.removeAttribute("dot-active");
    dot3.toggleAttribute("dot-active");

    crewImage.src = "assets/crew/image-victor-glover.png";
    crewTitle.innerHTML = "PILOT";
    crewName.innerHTML = "VICTOR GLOVER";
    crewDescription.innerHTML =
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
  });

  dot4.addEventListener("click", function changeContent() {
    dot1.removeAttribute("dot-active");
    dot3.removeAttribute("dot-active");
    dot2.removeAttribute("dot-active");
    dot4.toggleAttribute("dot-active");

    crewImage.src = "assets/crew/image-anousheh-ansari.png";
    crewTitle.innerHTML = "FLIGHT ENGINEER";
    crewName.innerHTML = "ANOUSHEH ANSARI";
    crewDescription.innerHTML =
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
  });
}
