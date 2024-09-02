const { context } = require('./button.config.json');

const button = () => {
  document.querySelectorAll(".button").forEach((btn)=>{
    btn.addEventListener("click", () => {
      alert(`${context.text} clicked`);
    });
  })
};

export default button;