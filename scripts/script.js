const show = (width) => {
  navItems = document.getElementById("nav-all_items");
  if (width == "250"){
    console.log('this is working');
    navItems.style.display = "block";
    return navItems;
  } else if(width == "0"){
    console.log('this is working');
    navItems.style.display = "none";
    return navItems;
  }
}

const openOrCloseNav = (open) => {
  let element = document.getElementById("mySidenav");
  if(open == 'open'){
    element.style.width = "250px";
    setTimeout(show("250"), 1000);
    return element;
  }else if(open == 'close'){
    element.style.width = "0";
    setTimeout(show("0"), 1000);
    return element;
  }
}

window.onscroll = () =>{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("nav").classList.add('nav');
  } else {
    document.getElementById("nav").classList.remove('nav');
  }
}

$("#projectButton").click(function(){
  $("#Projects").show();
  $("#tools").hide();
  $("#concepts").hide();
  $("#workflow").hide();
});

$("#toolsButton").click(function(){
  $("#tools").show();
  $("#Projects").hide();
  $("#concepts").hide();
  $("#workflow").hide();
});

$("#conceptButton").click(function(){
  $("#concepts").show();
  $("#Projects").hide();
  $("#tools").hide();
  $("#workflow").hide();
});

$("#workflowButton").click(function(){
  $("#workflow").show();
  $("#Projects").hide();
  $("#concepts").hide();
  $("#tools").hide();
});

// $("#show").click(function(){
//   $("p").show();
// });