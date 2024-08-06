const { title } = require('./button.config.json');

const button = () => {
  document.querySelector(".button").addEventListener("click", () => {
    alert(title);
  });
};

export default button;