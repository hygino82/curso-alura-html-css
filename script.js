let curtidas = 0;

const botaoCurtir = () => {
  curtidas++;
  console.log(`Curtidas: ${curtidas}`);
  document.getElementById("resultado-curtidas").innerHTML =
    `<p>${curtidas} curtidas</p>`;
};
