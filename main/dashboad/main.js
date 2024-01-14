document.getElementById("openNav").addEventListener("click", function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
});

document.getElementById("closeNav").addEventListener("click", function closeNav() {
    document.getElementById("mySidenav").style.left = "-300px";
});

// function openLeftMenu() {
//      document.getElementById("mySidenav").style.display = "block";
//  }
//  function closeLeftMenu() {
//      document.getElementById("mySidenav").style.display = "none";
//  }