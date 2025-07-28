document.addEventListener("turbo:load", () => {
  const priceInput = document.getElementById("item-price");
  const taxOutput = document.getElementById("add-tax-price");
  const profitOutput = document.getElementById("profit");

  if (!priceInput) return;

  priceInput.addEventListener("input", () => {
    const price = parseInt(priceInput.value);

    if (isNaN(price) || price < 300 || price > 9999999) {
      taxOutput.innerHTML = '';
      profitOutput.innerHTML = '';
      return;
    }

    const tax = Math.floor(price * 0.1);
    const profit = price - tax;

    taxOutput.innerHTML = tax;
    profitOutput.innerHTML = profit;
  });
});