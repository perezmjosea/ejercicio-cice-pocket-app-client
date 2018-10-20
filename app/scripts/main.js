// Inicializamos componentes Materialize
M.AutoInit();

// Self Invoked Function (contexto privado)
(function () {
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


  function clearCreationArea() {
    $urlWebsite.value = "";
    $creationArea.classList.remove("open");
  }




  // Click para abrir zona de creación
  $actionBtn.addEventListener("click", e => {
    $creationArea.classList.add("open");
  });

  // Click para cerrar zona de creación
  $closeCreationArea.addEventListener("click", e => {
    $creationArea.classList.remove("open");
  });

  // Control del submit del formulario de creación
  $createWesiteForm.addEventListener("submit", e => {
    e.preventDefault();

    // Limpiamos y cerramos el área de creación
    clearCreationArea();

    $websitesGrid.innerHTML += card;
  });
})();
