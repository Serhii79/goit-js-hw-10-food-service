const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

bodyRef.classList.add(Theme.LIGHT);

const toggleBackground = () => {
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);
    // inputRef.removeAttribute("checked");
    
    // if (inputRef.checked !== true) {
    //   inputRef.checked = true;
    // } else {
    //     inputRef.checked = false;
    // };

    // inputRef.setAttribute("checked", true);
};

inputRef.addEventListener('change', toggleBackground);

// const checkedTheme = () => {
//     if (bodyRef.Theme.DARK = true) {
//         inputRef.setAttribute("checked", true);
//     };
// };
// function change() {
//     if (document.getElementById("check").checked !== true) {
//       document.getElementById("check").checked = true;
//     } else {
//       document.getElementById("check").checked = false;
//     }
// }
