function ConvertToFahrenheit() {
    document.getElementById("result").innerHTML = "";
    const temp = parseFloat(document.getElementById("temperature").value);
    if (isNaN(temp)) {
      document.getElementById("result").innerHTML =
        "<span class='error'>Enter a valid number.</span>";
      document.getElementById("result").classList.add("show");
      return;
    }
    let fahrenheit = (temp * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).textContent = `${temp}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    document.getElementById("result").classList.add("show");
  }

  function ConvertToCelsius() {
    document.getElementById("result").innerHTML = "";
    const temp = parseFloat(document.getElementById("temperature").value);
    if (isNaN(temp)) {
      document.getElementById("result").innerHTML =
        "<span class='error'>Enter a valid number.</span>";
      document.getElementById("result").classList.add("show");
      return;
    }
    let celsius = ((temp - 32) * 5) / 9;
    document.getElementById(
      "result"
    ).textContent = `${temp}°F is equal to ${celsius.toFixed(2)}°C`;
    document.getElementById("result").classList.add("show");
  }