//Attach the document Ricardo_Mejia.pdf to the download link

document.getElementById("downloadBtn").addEventListener("click", () => {
	// Aquí irá tu lógica de descarga
	const url =
		"https://ricmejiaz.github.io/Git_project/document/Ricardo_Mejia.pdf";
	const a = document.createElement("a");
	a.href = url;
	a.setAttribute("download", "Ricardo_Mejia.pdf");
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
});
