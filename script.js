const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  //console.log('Enter!');
  this.classList.add('trigger-enter');
  setTimeout(() => { //value gets inherited from the parent function, if we use arrow. If not - it won't work as we desire it to.
      if(this.classList.contains('trigger-enter')){
         this.classList.add('trigger-enter-active') //to make sure content doesn't appear before the change.
      }
  }, 150);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  //console.log(dropdown);
  const dropdownCoords = dropdown.getBoundingClientRect();
  //console.log(dropdownCoords);
  const navCoords = nav.getBoundingClientRect();
  //console.log(navCoords);
  const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top, //important to draw a relationship with other possible elements placed.
      left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty('width',`${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform',`translate(${coords.left}px, ${coords.top}px`);
}

function handleLeave() {
  //console.log('Leave!');
  this.classList.remove('trigger-enter','trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));