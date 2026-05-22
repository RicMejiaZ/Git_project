//Attach the document Ricardo_Mejia.pdf to the download link

document.getElementById("dl").addEventListener("click", () => {
	const a = document.createElement("a");
	a.href = "https://ricmejiaz.github.io/Git_project/document/Ricardo_Mejia.pdf";
	a.setAttribute("download", "Ricardo_Mejia.pdf"); // suggested filename
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
});
