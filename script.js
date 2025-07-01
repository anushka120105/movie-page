const API = 'https://jsonfakery.com/movies/paginated'

// let header = document.querySelector('header');
// window.addEventListener('scroll', () => {
//   header.classList.toggle('shadow', window.scroll)
// })
// script.js

// Toggle the navigation menu on small screens
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Optional: Smooth scroll behavior for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Optional: Newsletter form validation (simple)
const form = document.querySelector('.newsletter form');
form.addEventListener('submit', (e) => {
  const email = form.querySelector('.email');
  if (!email.value.includes('@')) {
    e.preventDefault();
    alert('Please enter a valid email address.');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const movies = [
    {
      title: "Venom",
      description: "A journalist gains superpowers from an alien symbiote.",
      poster: "/assets/m1.jpg",
      cast: [
        { name: "Tom Hardy", photo: "/assets/cast/tom.jpg" },
        { name: "Michelle Williams", photo: "/assets/cast/michelle.jpg" }
      ]
    },
    {
      title: "Dunkrek",
      description: "Allied soldiers are evacuated during a fierce World War II battle in Dunkirk.",
      poster: "/assets/m2.jpg",
      cast: [
        { name: "Fionn Whitehead", photo: "/assets/cast/fionn.jpg" },
        { name: "Harry Styles", photo: "/assets/cast/harry.jpg" }
      ]
    },
    {
      title: "Batman Vs Superman",
      description: "Two legendary heroes clash as Gotham’s vigilante takes on Metropolis’s savior.",
      poster: "/assets/m3.jpg",
      cast: [
        { name: "Ben Affleck", photo: "/assets/cast/ben.jpg" },
        { name: "Henry Cavill", photo: "/assets/cast/henry.jpg" }
      ]
    },
    {
      title: "John Wick 2",
      description: "John Wick is forced back into the criminal underworld with a debt to repay.",
      poster: "/assets/m4.jpg",
      cast: [
        { name: "Keanu Reeves", photo: "/assets/cast/keanu.jpg" },
        { name: "Common", photo: "/assets/cast/common.jpg" }
      ]
    },
    {
      title: "Aquaman",
      description: "Arthur Curry learns he is the heir to Atlantis and must step forward to lead.",
      poster: "/assets/m5.jpg",
      cast: [
        { name: "Jason Momoa", photo: "/assets/cast/jason.jpg" },
        { name: "Amber Heard", photo: "/assets/cast/amber.jpg" }
      ]
    },
    {
      title: "Black Panther",
      description: "T'Challa returns to Wakanda to become king, but faces enemies from within.",
      poster: "/assets/m6.jpg",
      cast: [
        { name: "Chadwick Boseman", photo: "/assets/cast/chadwick.jpg" },
        { name: "Lupita Nyong'o", photo: "/assets/cast/lupita.jpg" }
      ]
    },
    {
      title: "Thor",
      description: "Thor is banished from Asgard to Earth where he learns to be a true hero.",
      poster: "/assets/m7.jpg",
      cast: [
        { name: "Chris Hemsworth", photo: "/assets/cast/chris.jpg" },
        { name: "Natalie Portman", photo: "/assets/cast/natalie.jpg" }
      ]
    },
    {
      title: "Bumblebee",
      description: "A young woman discovers Bumblebee the Autobot and helps him hide on Earth.",
      poster: "/assets/m8.png",
      cast: [
        { name: "Hailee Steinfeld", photo: "/assets/cast/hailee.jpg" },
        { name: "John Cena", photo: "/assets/cast/cena.jpg" }
      ]
    },
    {
      title: "Mortal Engines",
      description: "In a post-apocalyptic world, cities roam the Earth and devour smaller towns.",
      poster: "/assets/m9.jpg",
      cast: [
        { name: "Hera Hilmar", photo: "/assets/cast/hera.jpg" },
        { name: "Robert Sheehan", photo: "/assets/cast/robert.jpg" }
      ]
    },
    {
      title: "Underworld Blood Wars",
      description: "Vampire death dealer Selene fends off brutal attacks from both Lycans and vampires.",
      poster: "/assets/m10.jpg",
      cast: [
        { name: "Kate Beckinsale", photo: "/assets/cast/kate.jpg" },
        { name: "Theo James", photo: "/assets/cast/theo.jpg" }
      ]
    }
  ];

  const movieBoxes = document.querySelectorAll('.movies-container .box');
  const popup = document.getElementById('moviePopup');
  const popupTitle = document.getElementById('popupTitle');
  const popupPoster = document.getElementById('popupPoster');
  const popupDescription = document.getElementById('popupDescription');
  const popupCast = document.getElementById('popupCast');
  const closeBtn = document.getElementById('closePopup');

  movieBoxes.forEach((box, index) => {
    box.addEventListener('click', () => {
      const movie = movies[index];
      if (!movie) return;

      popupTitle.textContent = movie.title;
      popupPoster.src = movie.poster;
      popupDescription.textContent = movie.description;

      popupCast.innerHTML = '';
      movie.cast.forEach(member => {
        popupCast.innerHTML += `
          <div class="cast-member">
            <img src="${member.photo}" alt="${member.name}">
            <p>${member.name}</p>
          </div>`;
      });

      popup.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});
