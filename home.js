//Adding hamberger menu
  function hamberger() {
    document.getElementsByClassName('dropdown-menu')[0].style.display = "none";
    if(window.innerWidth<=770){
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
    element.style.animationDelay = (i<7)?`${(i+1)/10}s`:'1s';
  } 

//Creating a dropdown in Categories
document.getElementsByClassName('Categories')[0].addEventListener('click', function (e) {
  e.preventDefault();
  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});

//Changing the Category types when clicked in the dropdown menu
function changeCategory(event) {
  let new_category = event.id;
  document.getElementById('Categories').innerText = new_category;
}
  