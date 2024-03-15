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
    .then(data=> displaySearchResult(data.meals))
})
const displaySearchResult = (meals) =>{
    const main = document.getElementById("main")
    meals.forEach((meal)=>{
        console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card" onclick = "mealIdDetail(${meal.idMeal})">
          <img src="${meal.strMealThumb
          }" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.
                strMeal
                }</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
          </div>
        </div>
        `
        main.appendChild(div)
    })
}

const mealIdDetail = mealId =>{
    console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => singleMealsDetails(data.meals[0]))
}

const searchDetails = document.getElementById('search-details')
const div = document.createElement('div')
const singleMealsDetails = details =>{
    console.log(details)
    div.classList.add('card')
    div.innerHTML = `
    <img src="${details.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${details.
        strMeal
        }</h5>
      <p class="card-text">${details.strInstructions.slice(0,150)}</p>
      <a href="${details.strYoutube
      }" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    searchDetails.appendChild(div)
}