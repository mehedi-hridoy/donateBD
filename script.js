let donationAmount = 12000;




let totalDonated = 0;

document.addEventListener("DOMContentLoaded", () => {
  const donateBtn = document.getElementById("d_button");
  const inputField = document.getElementById("donationField");
  const donationDisplay = document.getElementById("right_h2");

  donateBtn.addEventListener("click", () => {
    const value = parseInt(inputField.value);

    if (!isNaN(value) && value > 0 && value <= donationAmount) {
      totalDonated += value;
      donationAmount -= value;

      donationDisplay.textContent = `${totalDonated} BDT`;
      inputField.value = ""; // clear input
    } else {
      alert("Enter a valid amount (positive number, less than or equal to remaining funds).");
    }
  });
});

 
