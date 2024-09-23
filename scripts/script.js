// Menu link data
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  //Part 1
  //1.    Select and cache the <main> element in a variable named mainEl.
  const mainEl = document.getElementsByTagName('main');
  console.log(mainEl[0]);
  
  // 2.   Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
  // Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
  mainEl[0].style.backgroundColor = 'var(--main-bg)';
  
  // 3.    Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
  mainEl[0].innerHTML = `<h1>DOM Manipulation</h1>`;
  
  // 4.    Add a class of flex-ctr to mainEl.
  // Hint: Use the Element.classList API.
  mainEl[0].classList.add(`flex-ctr`);
  
  //Part 2:
  // 1.   Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
  const topMenuEl = document.getElementById(`top-menu`);
  console.log(topMenuEl);
  
  // 2.   Set the height of the topMenuEl element to be 100%.
  topMenuEl.style.height = `100%`;
  
  // 3.   Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
  topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
  
  // 4.    Add a class of flex-around to topMenuEl.
  topMenuEl.classList.add('flex-around');
  
  
  
  //Part 3:
  // 1.   Iterate over the entire menuLinks array and for each "link" object:
  menuLinks.forEach((link)=>{
      // 2.   Create an <a> element.
      let newLink = document.createElement('a')
  
      // 3.   On the new element, add an href attribute with its value set to the href property of the "link" object.
      newLink.setAttribute('href', link.href)
  
      // 4.   Set the new element's content to the value of the text property of the "link" object.
      newLink.textContent = link.text
  
      // 5.   Append the new element to the topMenuEl element.
      topMenuEl.appendChild(newLink)
  })
  
 // (DOM P2) Part 3:

 //Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
  const subMenuEl = 
  document.getElementById('sub-menu');
  
  //Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
  subMenuEl.style.backgroundColor = 
  getComputedStyle(document.documentElement)
  .getPropertyValue('---sub-menu-bg');

  //Add the class of flex-around to the subMenuEl element.
  subMenuEl.classList.add('flex-around');




 /*Part4: Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
Attach a delegated 'click' event listener to topMenuEl.
The first line of code of the event listener function should call the event object's preventDefault() method.
The second line of code of the function should immediately return if the element clicked was not an <a> element.
Log the content of the <a> to verify the handler is working.*/
  const topMenuEl= 
  document.getElementById('top-menu');
  const topMenuLinks=
  topMenuEl.querySelectorAll('a');

  topMenuEl.addEventListener('click',function(event) {
          event.preventDefault ();
    const clickedLink = event.target;
    
    if (clickedLink.tagName !== 'A') return;

    console.log(clickedLink.textContent);
  });


/*The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
Hint: Removing a non-existent class from an element does not cause an error!*/
topMenuLinks.forEach(link => link.classList.remove('active'));
clickedLink.classList.add('active');
if (clickedLink.classList.contains(active)) {
    clickedLink.classList.remove('active');


}
  
//Part 5
/*Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
Otherwise, set the CSS top property of subMenuEl to 0.
Hint: Caching the "link" object will come in handy for passing its subLinks array later.*/
const linkData = menuLinks.find(link => link.text === clickedLink.textContent);

if (linkData.subLinks) {
    buildSubmenu(linkData.subLinks);
    subMenuEl.style.top = '100%';
}
else {
    subMenuEl.style.top = '0';
}


function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = ''; 

    subLinks.forEach(subLink => {
        const subLinkEl=
        document.createElement('a');
        subLinkEl.href = subLink.href;
        subLinkEl.textContent = subLink.text;
        subMenuEl.appendChild(subLinkEl);
    });
}

subMenuEl.addEventListener('click', function(event) {
    event.preventDefault();

    const clickedSubLink = event.target;
    
    if (clickedSubLink.tagName !== 'A')
        return;

    subMenuEl.style.top = '0';
    topMenuLinks.forEach(links => link.classList.remove('active'));

    const mainEl = document.querySelector('main');
   
})