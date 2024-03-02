console.log("connected");
const categoryBtnContainer = document.getElementById("category-btn-container");
const cardContainer = document.getElementById("card-container");
let selectedCategory = 1000;
let sortByView = false;

const fetchCategories = async () => {
  const url = "https://openapi.programming-hero.com/api/videos/categories";
  toggleSpinner(true);
  const response = await fetch(url);
  const data = await response.json();
  const categories = data.data;
  categories.forEach(({ category, category_id }) => {
    const newCategoryBtn = document.createElement("button");
    newCategoryBtn.classList.add(
      "btn",
      "text-gray-700",
      "hover:bg-red-600",
      "px-5",
      "hover:text-white",
      "border-0",
      "category-btn"
    );
    newCategoryBtn.innerText = category;
    newCategoryBtn.addEventListener("click", () => {
      fetchSpecificCategory(category_id, sortByView);
      newCategoryBtn.parentElement.childNodes.forEach((btnEle) => {
        btnEle.className =
          "btn text-gray-700 hover:bg-red-600 px-5 hover:text-white border-0 category-btn";
      });
      newCategoryBtn.className =
        "btn text-white hover:bg-red-600 bg-red-600 px-5 border-0 category-btn";
    });

    categoryBtnContainer.appendChild(newCategoryBtn);
  });
  toggleSpinner(false);
};

const fetchSpecificCategory = async (id, sortByView) => {
  selectedCategory = id;
  const url = `https://openapi.programming-hero.com/api/videos/category/${selectedCategory}`;
  toggleSpinner(true);
  const response = await fetch(url);
  const data = await response.json();
  const category = data.data;
  cardContainer.innerHTML = "";
  if (sortByView) {
    category.sort((a, b) => {
      const previousCardViews = parseFloat(a.others.views);
      const currentCardViews = parseFloat(b.others.views);
      return currentCardViews - previousCardViews;
    });
  }
  if (category.length) {
    cardContainer.className =
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-6";
    category.forEach((categoryObj) => {
      const card = document.createElement("div");
      card.classList.add("card", "bg-base-100", "shadow-xl");
      card.innerHTML = `
    <figure class= "h-52 w-full">
        <img class="h-full w-full object-cover"
            src="${categoryObj.thumbnail}"
            alt="Shoes"
        />
    </figure>
    <div class="card-body">
    <div class="justify-between gap-3 flex">
        <div class="w-10 h-10 mt-2">
        <img class="w-10 h-10 rounded-full" src=${
          categoryObj.authors[0].profile_picture
        } alt="" />
        </div>
        <div class="flex-1 space-y-3">
        <h2 class="font-bold text-base">
            ${categoryObj.title}
        </h2>
        <div class="grid grid-cols-2">
            <p>${categoryObj.authors[0].profile_name}</p>
            ${verificationCheck(categoryObj.authors[0].verified)}
        </div>
        <p>${categoryObj.others.views} views</p>
        </div>
    </div>
    </div>
    `;
      cardContainer.appendChild(card);
    });
  } else {
    cardContainer.className = "flex justify-center";
    cardContainer.innerHTML = `
    <div  class="flex items-center flex-col gap-5 mt-5">
        <div><img src="./images/sorry.svg" alt="" /></div>
        <h4 class="lg:text-3xl text-2xl font-bold">
          Oops!! Sorry, There is no content here
        </h4>
    </div>
    `;
  }

  toggleSpinner(false);
};

const toggleSpinner = (isLoading) => {
  const loadingGif = document.getElementById("loading-gif");
  isLoading
    ? loadingGif.classList.replace("hidden", "flex")
    : loadingGif.classList.replace("flex", "hidden");
};

const verificationCheck = (isVerified) =>
  isVerified ? '<img src="./images/fi_10629607.svg" alt="" />' : "";

const handleSortByViewClick = () => {
  sortByView ? (sortByView = false) : (sortByView = true);
  fetchSpecificCategory(selectedCategory, sortByView);
};

fetchCategories();
fetchSpecificCategory(selectedCategory, sortByView);
