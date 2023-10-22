document.addEventListener("DOMContentLoaded", function() {
    const inputBusqueda = document.getElementById("inputBusqueda");
    const resultadoBusqueda = document.getElementById("resultadoBusqueda");

    const enlaces = {
      "Las olas del tiempo perdido": "card_1.html",
      "El Amor en los tiempos del cólera": "card_2.html",
      "Yo antes de ti/ Me Before You": "card_3.html",
      "Bajo la misma estrella": "card_4.html",
      "El libro del amor": "card_5.html",
      "El niño con el pijama de rayas": "card_6.html",
      "Harry Potter Y La Piedra Filosofal": "card_7.html",
      "Las Cronicas de Narnia: The Chronicles of Narnia": "card_8.html",
      "Cuento de hadas": "card_9.html",
      "It": "card_10.html",
      "El resplandor Edición Kindle": "card_11.html",
      "Doctor Sueño": "card_12.html",
      // Aqui puedes agregar mas paginas para el buscadorr
    };
  
    // Esto solo oculta el contenedor al cargar la pagina
    resultadoBusqueda.style.display = "none";
  
    inputBusqueda.addEventListener("input", function() {
      const valorBusqueda = inputBusqueda.value.trim().toLowerCase();
      resultadoBusqueda.innerHTML = "";
  
      // Si no hay nada en el campo de búsqueda, no mostramos resultados
      if (valorBusqueda === "") {
        resultadoBusqueda.style.display = "none";
        return; // Salimos de la función para evitar procesar mas datsos
      }
  
      // Crea una lista ul para los enlaces
      const ul = document.createElement("ul");
      for (const palabra in enlaces) {
        if (palabra.toLowerCase().startsWith(valorBusqueda)) {
          const enlace = enlaces[palabra];
          // Crea un elemento de lista li para cada enlace
          const li = document.createElement("li");
          const link = document.createElement("a");
          link.href = enlace;
          link.textContent = palabra;


           // Agrega el elemento de lista a la lista para la busqueda
          li.appendChild(link);
         
          ul.appendChild(li);
        }
      }
      // Agrega la lista de los enlaces al contenedor resultadoBusqueda paa mostrarlos y si no hay resutados se ocultan el container
      if (ul.children.length > 0) {
        resultadoBusqueda.appendChild(ul);
        resultadoBusqueda.style.display = "block";
      } else {
        resultadoBusqueda.style.display = "none";
      }
    });
  

    // Funciones para oculater la busqueda de container_busqueda al scrullear y al darle click a un campo aleatrio :)))
    document.addEventListener("scroll", function() {
      resultadoBusqueda.style.display = "none";
    });
  
    document.addEventListener("click", function(event) {
      if (event.target !== resultadoBusqueda && event.target !== inputBusqueda) {
        resultadoBusqueda.style.display = "none";
      }
    });

  });//terminar aqui ijijij
  