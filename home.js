const body = document.body;
const catagories = ['fiction', 'nonfiction', 'science', 'horror', 'fantasy'];
const fictionContainer = document.getElementById('fiction');
const nonfictionContainer = document.getElementById('nonfiction');
const scienceContainer = document.getElementById('science');
const horrorContainer = document.getElementById('horror');
const fantasyContainer = document.getElementById('fantasy');
const categoryContainer = [fictionContainer, nonfictionContainer, scienceContainer, horrorContainer, fantasyContainer];


//Adding hamberger menu
function hamberger() {
  document.getElementsByClassName('dropdown-menu')[0].style.display = "none";
  if (window.innerWidth <= 770) {
    const bars = document.getElementsByClassName('bars')[0];
    const cross = document.getElementsByClassName('close')[0];
    const link = document.getElementById('link');
    const nav = document.getElementsByClassName('nav');
    if (bars.style.display === "none") {
      cross.style.display = "none";
      bars.style.display = "block";
      link.style.display = "none";
    }
    else {
      bars.style.display = "none";
      cross.style.display = "block";
      link.style.display = "flex";
      link.style.justifyContent = "flex-end";
      link.style.position = "absolute";
      link.style.height = "100vh";
      link.style.background = "rgba(0, 0, 0, 0.8)";
      document.getElementsByClassName('dropdown-menu')[0].style.display = "block";
    }
  }
}

//Adding Animations cascading effect
const nav_item = document.getElementsByClassName('fade-in');
for (let i = 0; i < nav_item.length; i++) {
  const element = nav_item[i];
  element.style.animationDelay = (i < 7) ? `${(i + 1) / 10}s` : '1s';
}

//Creating a dropdown in Categories
document.getElementsByClassName('Categories')[0].addEventListener('click', function (e) {
  e.preventDefault();
  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});

const text = "PageNest";
let index = 0;
const speed = 200;

function typeText() {
  if (index < text.length) {
    document.getElementById("type-writer").innerText += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  } else {
    setTimeout(() => {
      document.getElementById("type-writer").innerText = "";
      index = 0;
      typeText();
    }, 500);
  }
}

typeText();

window.addEventListener("scroll", function () {
  let navbar = document.querySelector("#navbar");

  if (window.scrollY > 50)
    navbar.style.background = "#23282f";
  else
    navbar.style.background = "transparent";
});

//Adding books
let i = 0;
function AddBook(catagory, Container) {
  books.forEach(book => {
    if (book.category == catagory) {
      Container.innerHTML += `
      <div class="bookCard"  id="${i}">
        <img src="${book.image}" alt="">
      
      <div class="overlay">
        <a href="" class="bookmark"><svg xmlns="http://www.w3.org/2000/svg" height="18px"
                          viewBox="0 -960 960 960" width="24px" fill="#fff">
                          <path
                              d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                      </svg></a>
          <h3>${book.title}</h3>
          <p>-${book.author}</p>
          <div class="buttons">
              <button class="details">Details</button>
              <button>Buy</button>
          </div>
          <button class="remove">Remove</button>
      </div>
      </div>
      `;
      i++;
    }
  });
};

for (let i = 0; i < catagories.length; i++) {
  AddBook(catagories[i], categoryContainer[i]);
}

function add_read_more() {
  const read_more_btn = document.getElementsByClassName('details');
  for (let i = 0; i < read_more_btn.length; i++) {
    const element = read_more_btn[i];
    element.addEventListener('click', () => {
      let book = books[element.parentElement.parentElement.parentElement.id];
      console.log(book)
      const modal = document.createElement('div');
      modal.className = 'modal';

      modal.innerHTML = `
          <div class="modal-content">
                <div class="modal-book-image">
                    <img src="${book.image}" alt="">
                </div>
                <div class="modal-desc">
                    <h2 class="modal-title">${book.title}</h2>
                    <h4 class="modal-author">${book.author}</h4>
                    <p class="modal-book-desc">${book.about}</p>
                </div>
                <div class="close-modal">
                    <span onclick="closeModal()">&times;</span>
                </div>
            </div>
          `;

      body.append(modal);
      modal.style.display = 'flex';
    })
  }
};

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
  modal.remove()
}

add_read_more()
RemoveBooks()

function RemoveBooks() {
  const remove_btn = document.getElementsByClassName('remove');
  for (let index = 0; index < remove_btn.length; index++) {
    const element = remove_btn[index];
    element.addEventListener('click', () => {
      element.parentElement.parentElement.remove();
    })
  }
}