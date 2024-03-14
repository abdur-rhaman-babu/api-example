const searchButton = document.getElementById('button-search')
const searchFood = document.getElementById('search-food')
searchButton.addEventListener('click', ()=>{
    // console.log('click btn')
    const searchText = searchFood.value;
    searchFood.value = '';

    // fetch data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data=> console.log(data))
})