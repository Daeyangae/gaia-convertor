const textbox = document.getElementById("textbox");
const resultbox = document.getElementById("resultbox");
const currency = document.getElementById("currency");

const currencyValue = currency.options[currency.selectedIndex].value;

document.getElementById("enter").addEventListener("click", function(){
  var val = textbox.value.replace(/,/g, '');
  console.log("CLICK! and "+val);
  console.log(currencyValue);

  const type = currency.options[currency.selectedIndex].value;

  if (type == 'plat') {
    document.getElementById("resultbox").textContent = `${Number(val*10000000).toLocaleString()}`;
  }
  else if (type == 'gold') {
    document.getElementById("resultbox").textContent = `${Number(val/10000000).toLocaleString()}`;
  }

})
