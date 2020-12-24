const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
// const divRef = document.querySelector('.theme-switch__marker');

// bodyRef.classList.add(Theme.LIGHT);
// if (bodyRef.classList.contains(Theme.LIGHT) = true) {
//     divRef.checked = true;
// }
const toggleBackground = () => {
    // if
    //     (bodyRef.classList.contains(Theme.LIGHT) inputRef.checked) {
        
    // }
    // bodyRef.classList.toggle(Theme.DARK);
    // event.preventDefault();

    if (inputRef.getAttribute("checked") !== true) {
        bodyRef.classList.toggle(Theme.DARK);
        bodyRef.classList.toggle(Theme.LIGHT);
    } else {
        bodyRef.classList.toggle(Theme.LIGHT);
        bodyRef.classList.toggle(Theme.DARK);
    };
};

inputRef.addEventListener('change', toggleBackground);
