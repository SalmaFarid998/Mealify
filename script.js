// console.log('Hi')

var root= document.querySelector(':root');
// var rootStyles = getComputedStyle(root);
// var mainColor = rootStyles.getPropertyValue('--main-color')

function darkMode(){
    root.style.setProperty('--main-color', 'white');
    root.style.setProperty('--background-main', 'black');
    root.style.setProperty('--accent-color', 'hsl(35,72%,44%,1)');
    root.style.setProperty('--background-secondary', '#252525');
    root.style.setProperty('--opposite-color', 'black');
    root.style.setProperty('--muted-color', '#9F9F9F');
    root.style.setProperty('--p-color', '#9F9F9F');
    document.getElementById("dark-mode-toggle").className = 'fa-solid fa-sun';
    console.log('icon');
    document.getElementById("dark-mode-toggle").setAttribute('onclick','lightMode()');
}
function lightMode(){
    root.style.setProperty('--main-color', 'black');
    root.style.setProperty('--background-main', 'white');
    root.style.setProperty('--accent-color', 'hsl(0, 84%, 44%)');
    root.style.setProperty('--background-secondary', 'hsl(0, 0%, 93%)');
    root.style.setProperty('--opposite-color', 'white');
    root.style.setProperty('--muted-color', '#7f7f90');
    root.style.setProperty('--p-color', 'rgb(79, 79, 90)');

    document.getElementById("dark-mode-toggle").className= "fa-solid fa-moon";
    document.getElementById("dark-mode-toggle").setAttribute('onclick','darkMode()');
    
}

//   --accent-color: hsl(0, 84%, 44%);
//   --background-main: white;
//   --opposite-color: white;
//   --background-secondary: hsl(0, 0%, 93%);
//   --muted-color: #7f7f90;
//   --p-color: rgb(79, 79, 90);
