// const lists = document.querySelectorAll("ul")
// console.log(lists)
// lists.length 



// const list1 = document.querySelector("[data-list1]")
// console.log(list1)

// const list2 = document.querySelector("[data-list2]")
// console.log(list2.firstElementChild.textContent)

// const list3 = document.querySelector("[data-list3]")
// console.log(list3.children)

/////task 2

const ingredientsList = document.getElementById("ingredients")
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

  const updateList = ingredients.map((ingredient) => {
    const item = document.createElement("li")
    item.textContent = ingredient
    ingredientsList.append(item)
  });