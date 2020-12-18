const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

bodyRef.classList.add(Theme.LIGHT);

const toggleBackground = () => {
    // bodyRef.classList.toggle(Theme.LIGHT);
    // bodyRef.classList.toggle(Theme.DARK);
    // event.preventDefault();

    if (inputRef.getAttribute("checked") !== true) {
        bodyRef.classList.toggle(Theme.DARK);
        bodyRef.classList.toggle(Theme.LIGHT);
        console.log(inputRef.checked);
    } else {
        bodyRef.classList.toggle(Theme.LIGHT);
        bodyRef.classList.toggle(Theme.DARK);
        console.log(inputRef.checked);
    };

    // if (inputRef.getAttribute("checked") === true) {
    //     bodyRef.classList.toggle(Theme.LIGHT);
    //     bodyRef.classList.toggle(Theme.DARK);
    //     console.log(inputRef.checked);
    // } else {
    //     bodyRef.classList.toggle(Theme.DARK);
    //     bodyRef.classList.toggle(Theme.LIGHT);
    //     console.log(inputRef.checked);
    // };
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

// if (inputRef.checked === true) {
    //     bodyRef.classList.remove(Theme.LIGHT);
    //     bodyRef.classList.add(Theme.DARK);
    // } else {
    //     bodyRef.classList.remove(Theme.DARK);
    //     bodyRef.classList.add(Theme.LIGHT);
    // };

    // if (inputRef.checked !== true) {
    //   inputRef.checked = true;
    // } else {
    //     inputRef.checked = false;
    // };
