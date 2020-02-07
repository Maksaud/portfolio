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

