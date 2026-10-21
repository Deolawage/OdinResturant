const menuLinks =[
    {text: 'Home', href:'#home'},
    {text: 'About', href:'#about'},
    {text: 'Menu', href:'#menu'}

];

const navbar = document.createElement('nav');
navbar.className = 'navbar';

const navLink = document.createElement('ul');
navLink.className = "nav-link";

menuLinks.forEach((linkObject) => {
  
  const li = document.createElement('li');
  const a = document.createElement('a');
  
  a.textContent = linkObject.text;
  a.href = linkObject.href;
  
  
  li.appendChild(a);
  navLink.appendChild(li);
});


navbar.appendChild(navLink);

export default navbar.js;