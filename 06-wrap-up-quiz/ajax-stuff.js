

  const firstIngredient = document.querySelector('#first-ingredient')

  fetch('https://api.github.com/users/charlottedevs')
    .then(data => data.json())
    .then(data => {
      firstIngredient.innerHTML = `<a href="${data.url}" target="_blank">Find Charlotte Devs on Github</a>`;
    })
    .catch(() => {
      firstIngredient.innerHTML = `<a href="" target="blank">Flour</a>`;
    });
