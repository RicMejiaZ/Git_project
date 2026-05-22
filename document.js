document.getElementById("downloadBtn").addEventListener("click", () => {
  const repo = "ricmejiaz/Git_project"; // tu usuario/repositorio
  const path = "document/Ricardo_Mejia.pdf"; // ruta dentro del repo
  const branch = "main"; // o la rama que usas

  const cdnUrl = `https://cdn.jsdelivr.net/gh/${repo}@${branch}/${path}`;
  const a = document.createElement("a");
  a.href = cdnUrl;
  a.setAttribute("download", "Ricardo_Mejia.pdf");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
