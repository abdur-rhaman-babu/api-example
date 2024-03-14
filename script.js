const loadData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data))
}
loadData()

const displayData = (countries) =>{
    const divCountries = document.getElementById('countries')
    countries.forEach(country =>{
        // console.log(country.name.common)
        const div = document.createElement('div')
        div.classList.add('country')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        h3.innerText = country.name.common;
        p.innerText = country.capital;
        div.appendChild(h3)
        div.appendChild(p)
        divCountries.appendChild(div)
    })
}