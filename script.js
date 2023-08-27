const wrapper = document.querySelector(".wrapper"),
      select_btn = wrapper.querySelector(".select-btn"), 
      options = wrapper.querySelector(".options"),
      searchInput = wrapper.querySelector("input");

let countries = [
    "Australia",
    "America",
    "Bretainia",
    "Sweaden",
    "Germany",
    "Yemen",
    "Egypt",
    "China",
    "Russia",
    "Malysia",
];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}

addCountry();

function updateName(selectedLi) {
    searchInput.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    select_btn.firstElementChild.innerText = selectedLi.innerText;
}

searchInput.addEventListener("keyup", () => {
    let arr = [];
    let searchVal = searchInput.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr;
});

select_btn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});