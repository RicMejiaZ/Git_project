document.getElementById("downloadBtn").addEventListener("click", async () => {
  const rawUrl = "https://raw.githubusercontent.com/RicMejiaZ/Git_project/master/document/Ricardo_Mejia.pdf";
  
  try {
    // 1. Descargamos los datos del archivo
    const response = await fetch(rawUrl);
    if (!response.ok) throw new Error("Error al descargar el archivo");
    
    const blob = await response.blob();
    
    // 2. Creamos una URL local para ese Blob
    const localUrl = URL.createObjectURL(blob);
    
    // 3. Creamos el enlace temporal y lo activamos
    const a = document.createElement("a");
    a.href = localUrl;
    a.setAttribute("download", "Ricardo_Mejia.pdf");
    document.body.appendChild(a);
    a.click();
    
    // 4. Limpieza
    document.body.removeChild(a);
    URL.revokeObjectURL(localUrl); // Libera la memoria
  } catch (error) {
    console.error("Hubo un problema con la descarga:", error);
    // Opción de respaldo: si falla Fetch, al menos abrir el link
    window.open(rawUrl, "_blank");
  }
});
