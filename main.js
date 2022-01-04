//Toujours récuperer au bébut du script les éléments HTML nécéssaires dans des constates
const inputFrom = document.querySelector("#from");
const inpuTo = document.querySelector("#to");
const switchButton = document.querySelector(".switch");
const selectToCurrencies = document.querySelector("#to-currencies");
const selectFromCurrencies = document.querySelector("#from-currencies");
const submitInput = document.querySelector('[type="submit"]');
const form = document.querySelector("form");

const switchCurrencies = (event) => {
  event.preventDefault();
  //TODO : inverser les monnaies from et to
  console.log("le bouton swicth a été cliqué");
};

const submitForm = async (event) => {
  event.preventDefault();
  console.log("Le formulaire est validé");
  //TODO : récupére a valeur donner dans le chzmps from

  const fromValue = inputFrom.value;

  // récupérer la valeur du select from
  const currenciesFrom = selectFromCurrencies.value;
  // récupérer la valeur du select to

  const currenciesTo = selectToCurrencies.value;

  //TODO : verrifier que currenciefrom e currency to ne sont pas egaux
  if (currenciesFrom === currenciesTo) {
    alert(currenciesTo);
    return;
  }
  //TODO : afficher une valeur si le champ form est vide

  if (!fromValue) {
    alert("Vous n'avez pas rentrer de valeur !");
    return;
  }

  console.log("fromValue:", fromValue);
  //TODO : lancer la requete à l'API en lui fournissant la valeur tapé dans le form
  console.log(
    `https://api.frankfurter.app/latest?amount=${fromValue}&from=${currenciesFrom}&To=${currenciesTo}`
  );
  try {
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${fromValue}&from=${currenciesFrom}&to=${currenciesTo}`
    );
    const json = await response.json();
    console.log("réponse complète", json);

    console.log("résultat:", json.rates[currenciesTo]);
    inpuTo.value = json.rates[currenciesTo];
  } catch (error) {
    console.error("Erreur dans la requête:", error);
    alert("Oups ! Une erreur est arrivée, veuillez ré-essayer ultérieurement.");
  }
  //TODO : traité la réponse de l'API en lui fournissant
  //TODO
  //TODO
  //TODO
};
switchButton.addEventListener("click", switchCurrencies);
form.addEventListener("submit", submitForm);

// AJAX = Asynchronously JavaScript And XML
