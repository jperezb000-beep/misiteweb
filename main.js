// año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// formulario a FormSubmit (sin backend propio)
const form = document.getElementById('formContacto');
const msgExito = document.getElementById('msgExito');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const data = new FormData(form);
  // Cambia la siguiente URL por la que te dé https://formsubmit.co después de registrar tu email
  const action = "https://formsubmit.co/ajax/tucorreo@example.com"; 
  await fetch(action, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" }
  });
  form.reset();
  msgExito.classList.remove('oculto');
  setTimeout(() => msgExito.classList.add('oculto'), 5000);
});

