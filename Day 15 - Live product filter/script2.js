const inputSearch = document.getElementById('filterInput');
inputSearch.addEventListener('keydown', filterInputSearch)

function filterInputSearch(){
  const inputSearchValue = document.getElementById('filterInput').value.trim().toLowerCase()
  const productList = document.querySelectorAll('.product')
  productList.forEach((product) =>{
      const productName = product.querySelector('.product__name').textContent.trim().toLowerCase()
      const productPrice = product.querySelector('.product__price').textContent.trim().toLowerCase()
      if(productName.includes(inputSearchValue) || productPrice.includes(inputSearchValue)){
          product.classList.remove("hide");
      }
      else{
        product.classList.add("hide");
      }
  });
}

const debouncedFilterInputSearch = debounce(filterInputSearch, 200);
console.log(debouncedFilterInputSearch)
document.getElementById('filterInput').addEventListener('input', debouncedFilterInputSearch);

function debounce(func, delay) {
  let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
      };
}