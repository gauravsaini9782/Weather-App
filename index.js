let target = "Jaipur";

function updateDom(temperate, city, localtime, imageLink, weatherType) {
  const dateField = document.querySelector(".weather2 span");
  const emojiField = document.querySelector(".weather3 img");
  const weratherField = document.querySelector(".weather3 span");
  const cityField = document.querySelector(".weather2 p");
  const temperateField = document.querySelector(".weather1");
  temperateField.innerHTML = temperate;
  cityField.innerHTML = city;
  dateField.innerHTML = localtime;
  emojiField.src = imageLink;
  weratherField.innerHTML = weatherType;
}
const fetchData = async () => {
  const url = `http://api.weatherapi.com/v1/current.json?key=2977709631824a53916111653242906&q=${target}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  updateDom(
    data.current.temp_c,
    data.location.name,
    data.location.localtime,
    data.current.condition.icon,
    data.current.condition.text
  );
};

fetchData();
