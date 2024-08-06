// responsif navbar
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

// active navbar
let nav = document.getElementById("navbar");
let btns = nav.getElementsByClassName("nav-link");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// get data menus from json
const API_BASE_URL = "https://be-2-surabaya-20-production.up.railway.app";

async function fetchMenus() {
  const menuContainer = document.getElementById("menu-container");
  try {
    const respon = await fetch(`${API_BASE_URL}/menus`);
    const menus = await respon.json();

    const menuContent = menus.map((item) => {
      return `
      <div class="box">
      <div class="icons">
        <a href="#" class="fas fa-shopping-cart"></a>
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-eye"></a>
      </div>
      <div class="image">
        <img src="${item.image}" alt="GambarBiryani" />
      </div>
      <div class="content">
        <h3>${item.name}</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="price">Rp ${item.price} <span>Rp ${item.originalPrice}</span></div>
      </div>
    </div>
      `;
    });

    menuContainer.innerHTML = menuContent;
  } catch (error) {
    throw error;
  }
}
fetchMenus();

// create post customers contact/feedback form
async function createCustomers() {
  const name = document.getElementById("contact-users").value;
  const email = document.getElementById("contact-email").value;
  const phone = document.getElementById("contact-phone").value;
  const message = document.getElementById("contact-message").value;
  try {
    if (name !== "" && email !== "" && phone !== "" && message == "") {
      alert("Semua form wajib diisi terlebih dahulu");
    } else {
      await fetch(`${API_BASE_URL}/customers`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      alert("Submit is Successfully, Thankyou for contact or feedback");
      name = "";
      email = "";
      phone = "";
      message = "";
    }
  } catch (error) {
    throw error;
  }
}

// Function to open login modal
function toggleForms() {
  var loginForm = document.getElementById("loginForm");
  var registerForm = document.getElementById("registerForm");

  if (loginForm.style.display === "block") {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  } else {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  }
}

// Function to open login modal
function openLoginModal() {
  document.getElementById("loginModal").style.display = "block";
  // Initially show the login form and hide the register form
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
}

// Function to close modal
function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

// Function to handle login (replace this with your actual login logic)
function login() {
  alert("Login logic goes here");
  closeModal();
}

// Function to handle registration (replace this with your actual registration logic)
function register() {
  alert("Registration logic goes here");
  closeModal();
}
