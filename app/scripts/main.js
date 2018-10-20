// Inicializamos componentes Materialize
M.AutoInit();

// Self Invoked Function (contexto privado)
(function () {
  // Expresión regular que comprueba una URL válida
  const urlRegExp = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm);

  // Card para pintar
  const card = `<div class="col s12 m6 l4">
  <div class="card">
    <div class="card-content">
      <span class="card-title">Card Title</span>
      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require
        little markup to use effectively.</p>
    </div>
    <div class="card-action">
      <a href="#" class="blue-text">This is a link</a>
    </div>
  </div>
</div>`;

  const $actionBtn = document.querySelector("#action-btn");
  const $creationArea = document.querySelector("#creation-area");
  const $closeCreationArea = document.querySelector("#close-creation-area");
  const $createWesiteForm = document.querySelector("#create-website-form");
  const $websitesGrid = document.querySelector("#websites-grid");
  const $urlWebsite = document.querySelector("#url-website");
  const $submitWebsiteBtn = document.querySelector("#submit-website-btn");

  let isSendingWebsite = false;


  ////////////////////////////////////
  //// Helper functions
  ////

  function clearCreationArea() {
    $urlWebsite.value = "";

    isSendingWebsite = false;

    $closeCreationArea.classList.remove("loading");
    $submitWebsiteBtn.classList.remove("disabled");
    $urlWebsite.classList.add("validate");
    $urlWebsite.removeAttribute("disabled");

    $creationArea.classList.remove("open");
  }

  function websiteCreationSuccess() {
    // Limpiamos y cerramos el área de creación
    clearCreationArea();

    $websitesGrid.innerHTML += card;
  }

  function websiteCreationFail() {
    // Limpiamos y cerramos el área de creación
    clearCreationArea();

    M.toast({
      html: "Algo ha ido mal en tu envío",
      classes: "red-text text-lighten-3"
    });
  }


  ////////////////////////////////////
  //// Handlers
  ////

  // Click para abrir zona de creación
  $actionBtn.addEventListener("click", e => {
    $creationArea.classList.add("open");
  });

  // Click para cerrar zona de creación
  $closeCreationArea.addEventListener("click", e => {
    if (!isSendingWebsite) {
      $creationArea.classList.remove("open");
      clearCreationArea();
    }
  });

  // Control del submit del formulario de creación
  $createWesiteForm.addEventListener("submit", e => {
    e.preventDefault();

    // 1. Validar el texto como url válida
    if (!urlRegExp.test($urlWebsite.value)) {
      return;
    }

    isSendingWebsite = true;

    $closeCreationArea.classList.add("loading");
    $submitWebsiteBtn.classList.add("disabled");
    $urlWebsite.classList.remove("validate");
    $urlWebsite.setAttribute("disabled", "disabled");

    return;
  });
})();
