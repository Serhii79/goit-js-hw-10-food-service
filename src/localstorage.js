const refs = {
    body: document.querySelector('body')
};
console.log(refs.body);

const savedTheme = localStorage.getItem('variable-theme');

const returnLocalStorage = () => {
    if (savedTheme) {
        refs.body.className = savedTheme;
        console.log(refs.body.className);
    } else {
        console.log('Hello!');//Тимчасово для перевірки
    };
};

returnLocalStorage();

refs.body.addEventListener('change', handleBodyTheme);

function handleBodyTheme(event) {
    const variableTheme = refs.body.className;
    localStorage.setItem('variable-theme', variableTheme);
}