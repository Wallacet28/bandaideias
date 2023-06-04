// Scroll suave ao clicar nos links do menu
const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const sectionId = link.getAttribute("href");
    const section = document.querySelector(sectionId);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Validação e envio do formulário de agendamento
const formAgendamento = document.getElementById("form-agendamento");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");

formAgendamento.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obter dados do formulário
  const nome = formAgendamento.nome.value;
  const email = formAgendamento.email.value;
  const data = formAgendamento.data.value;
  const local = formAgendamento.local.value;



  // Validar dados
  if (!nome || !email || !data || !local) {
    errorMsg.textContent = "Preencha todos os campos.";
    successMsg.textContent = "";
  } else {
    // Limpar mensagens de erro
    errorMsg.textContent = "";
    successMsg.textContent = "";

    // Enviar dados para servidor (simulação)
    setTimeout(() => {
      successMsg.textContent = "Agendamento realizado com sucesso!";
      formAgendamento.reset();
    }, 2000);
  }
});