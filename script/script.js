// Openening and closing side navigation

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function clickNav() {
    document.getElementById("main").addEventListener("click", function(){
        document.getElementById("mySidenav").style.width = "0";
    });
}


function selectTab(tabIndex) {
  //Hides all sections
  document.getElementById('Tab1Content').style.display="none";
  document.getElementById('Tab2Content').style.display="none";
  document.getElementById('Tab3Content').style.display="none";
  document.getElementById('Tab4Content').style.display="none";
  document.getElementById('Tab5Content').style.display="none";
  document.getElementById('Tab6Content').style.display="none";
  document.getElementById('Tab7Content').style.display="none";
  document.getElementById('Tab8Content').style.display="none";
  document.getElementById('Tab9Content').style.display="none";
  document.getElementById('Tab10Content').style.display="none";
  document.getElementById('Tab12Content').style.display="none";
  document.getElementById('Tab13Content').style.display="none";
  document.getElementById('Tab14Content').style.display="none";

  
  //Shows the selected section
  document.getElementById('Tab' + tabIndex + 'Content').style.display="block";  
}


// Sticky nav //
window.onscroll = function() {stickyNav()}
let navbar = document.getElementsByClassName("nav-icon");
let sticky = navbar.offsetTop;

// Adds and removes the sticky class once in position 

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}