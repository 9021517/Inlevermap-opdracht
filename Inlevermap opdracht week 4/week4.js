document.getElementById("overschrijfForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const saldo = 1500; // Saldo van de betaalrekening
  const bedrag = parseFloat(document.getElementById("bedrag").value);
  const feedback = document.getElementById("feedback");

  // Valideer het bedrag
  if (isNaN(bedrag) || bedrag <= 0) {
      feedback.textContent = "Voer een geldig bedrag in.";
      feedback.className = "error";
      return;
  }

  if (bedrag > saldo) {
      feedback.textContent = "Onvoldoende saldo om deze overschrijving te voltooien.";
      feedback.className = "error";
      return;
  }

  // Succesvolle transactie
  feedback.textContent = `€${bedrag.toFixed(2)} is succesvol overgeschreven van Betaalrekening naar Spaarrekening.`;
  feedback.className = "success";
});
