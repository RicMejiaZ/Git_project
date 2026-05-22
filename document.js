document.getElementById("downloadBtn").addEventListener("click", () => {
  const rawUrl =
    "https://raw.githubusercontent.com/RicMejiaZ/Git_project/master/document/Ricardo_Mejia.pdf";
  const a = document.createElement("a");
  a.href = rawUrl;
  a.setAttribute("download", "Ricardo_Mejia.pdf");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
