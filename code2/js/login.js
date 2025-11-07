// Login Form Handler
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const usuario = document.getElementById("usuario").value
  const contrasena = document.getElementById("contrasena").value

  if (usuario && contrasena) {
    window.location.href = "dashboard.html"
  } else {
    alert("Por favor, complete todos los campos")
  }
})

// Check if user is already logged in
if (sessionStorage.getItem("usuario") && window.location.pathname.includes("index.html")) {
  window.location.href = "dashboard.html"
}
