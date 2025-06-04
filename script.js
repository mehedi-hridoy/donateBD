let total_amount = document.getElementById("total_amount").innerHTML;
let t = Number(total_amount);

document
  .getElementById("donationForm1")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const donationAmount = Number(
      document.getElementById("noakhali_donation").value
    );

    if (donationAmount >= 0 && donationAmount < total_amount) {
      let updatedAmount = t - donationAmount;
      document.getElementById("total_amount").innerHTML = updatedAmount;

      t = updatedAmount;

      /*showing the message */
      document.getElementById("confirmationModal").classList.remove("hidden");
    } else if (total_amount < donationAmount) {
      alert("No amount Left to Donate");
    } else {
      alert("Enter a Valid Donation Amount");
    }

    document
      .getElementById("closeModal")
      .addEventListener("click", function () {
        document.getElementById("confirmationModal").classList.add("hidden");
      });
  });

document
  .getElementById("donationForm2")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const donationAmount = Number(
      document.getElementById("feni_donation").value
    );

    if (donationAmount >= 0 && donationAmount < total_amount) {
      let updatedAmount = t - donationAmount;
      document.getElementById("total_amount").innerHTML = updatedAmount;

      t = updatedAmount;
      /*showing the message */
      document.getElementById("confirmationModal").classList.remove("hidden");
    } else if (total_amount < donationAmount) {
      alert("No amount Left to Donate");
    } else {
      alert("Enter a Valid Donation Amount");
    }
    document
      .getElementById("closeModal")
      .addEventListener("click", function () {
        document.getElementById("confirmationModal").classList.add("hidden");
      });
  });

document
  .getElementById("donationForm3")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const donationAmount = Number(
      document.getElementById("quota_donation").value
    );

    if (donationAmount >= 0 && donationAmount < total_amount) {
      let updatedAmount = t - donationAmount;
      document.getElementById("total_amount").innerHTML = updatedAmount;

      t = updatedAmount;
      /*showing the message */
      document.getElementById("confirmationModal").classList.remove("hidden");
    } else if (total_amount < donationAmount) {
      alert("No amount Left to Donate");
    } else {
      alert("Enter a Valid Donation Amount");
    }
    document
      .getElementById("closeModal")
      .addEventListener("click", function () {
        document.getElementById("confirmationModal").classList.add("hidden");
      });
  });

/* Updating money on cart */
let noakhali;

document
  .getElementById("donationForm1")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const donationAmount = Number(
      document.getElementById("noakhali_donation").value
    );

    noakhali = Number(document.getElementById("noakhalir_taka").innerHTML);

    const updated_taka = noakhali + donationAmount;

    document.getElementById("noakhalir_taka").innerHTML = updated_taka;

    //saving donation history
    const history = JSON.parse(localStorage.getItem("donationHistory")) || [];
    const newEntry = `Donated ${donationAmount} taka to Noakhali`;
    history.push(newEntry);
    localStorage.setItem("donationHistory", JSON.stringify(history));

    noakhali = updated_taka;
  });

let feni;

document
  .getElementById("donationForm2")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const donationAmount = Number(
      document.getElementById("feni_donation").value
    );

    feni = Number(document.getElementById("fenir_taka").innerHTML);

    const updated_taka = feni + donationAmount;

    document.getElementById("fenir_taka").innerHTML = updated_taka;

    //saving donation history
    const history = JSON.parse(localStorage.getItem("donationHistory")) || [];
    const newEntry = `Donated ${donationAmount} taka to Feni`;
    history.push(newEntry);
    localStorage.setItem("donationHistory", JSON.stringify(history));

    feni = updated_taka;
  });

let quota;

document
  .getElementById("donationForm3")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const donationAmount = Number(
      document.getElementById("quota_donation").value
    );

    quota = Number(document.getElementById("quotar_taka").innerHTML);

    const updated_taka = quota + donationAmount;

    document.getElementById("quotar_taka").innerHTML = updated_taka;

    //saving donation history
    const history = JSON.parse(localStorage.getItem("donationHistory")) || [];
    const newEntry = `Donated ${donationAmount} taka to Quota Movement`;
    history.push(newEntry);
    localStorage.setItem("donationHistory", JSON.stringify(history));

    quota = updated_taka;
  });
