const loadData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data))
}
loadData()

const displayData = (countries) =>{
    const divCountries = document.getElementById('countries')
    countries.forEach(country =>{
        // console.log(country.name)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick = "countryDetails('${country.name.common}')">Details</button>
        `
        // const h3 = document.createElement('h3')
        // const p = document.createElement('p')
        // h3.innerText = country.name.common;
        // p.innerText = country.capital;
        // div.appendChild(h3)
        // div.appendChild(p)

        divCountries.appendChild(div)
    })
}

const countryDetails = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data[0]))
}

const countryDetail = document.getElementById('countrydetails');
const div = document.createElement('div')
const displayDetails = (data) =>{
    console.log(data)
    div.innerHTML = `
        <img src = "${data.flags.png}"
        <h3>${data.name.common}</h3>
        <h3>${data.flag}</h3>
    `
    countryDetail.appendChild(div)
}
