// const products = document.querySelectorAll('.product__detail')
// const searchInput = document.querySelector('.search-input')

// function getAllProductInfo(){
//   const arrayProductResult = Array.from(products).map(function(product){
//     const productList = {
//       name: product.querySelector('.product__name').textContent.trim() , 
//       price: product.querySelector('.product__price').textContent.trim()
//     }
//     return productList
//   })
// return  arrayProductResult
// }

// searchInput.addEventListener('keydown',filterProduct(searchInput.value.trim()));

// function filterProduct(value) {
//     const productListInfo = getAllProductInfo();
//     productListInfo.forEach(function(product,index){
//         if(!product.name.includes(value) && !product.price.includes(value)){
//           products[index].classList.add("hide");
//           console.log(1);
//         }
//         else{
//           products[index].classList.remove("hide");
//           console.log(2);
//         }
//     })
//   }

document.getElementById('filterInput').addEventListener('keydown', filterProducts);

function filterProducts() {
    const filterValue = document.getElementById('filterInput').value.trim().toLowerCase();
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const productName = product.querySelector('.product__name').textContent.trim().toLowerCase();
        const productPrice = product.querySelector('.product__price').textContent.trim().toLowerCase();
        console.log(filterValue);
        if (productName.includes(filterValue) || productPrice.includes(filterValue)) {
            product.classList.remove("hide");
        } else {
          product.classList.add("hide");

        }
    });
}
const debouncedFilterProducts = debounce(filterProducts, 200);
console.log(debouncedFilterProducts)
document.getElementById('filterInput').addEventListener('input',debouncedFilterProducts)


function debounce(func,delay){
  let timeout;
  return function(...args){
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this,args), delay)
  }
}