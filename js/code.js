const searchName= document.getElementById("search-input");
console.dir(searchName);

const products=document.querySelectorAll(".product-item");
console.dir(products);

const buttons=document.querySelectorAll(".filter");
console.dir(buttons);

//Search Name Input Text
const searchNameHandler=(event)=>{
    searchNameText=event.target.value.toLowerCase().trim();

    products.forEach((product)=>{
        const productName= product.children[1].innerText.toLowerCase().trim();
        console.log(productName);
        if (productName.includes(searchNameText))
            product.style.display="block"
        else
            product.style.display="none";

            })

}
searchName.addEventListener("keyup", searchNameHandler);

//Button Category

const filterButtonHandler=(event)=>{
    const buttonUser= event.target.dataset.category;
   
    buttons.forEach((btn)=>{
        if(buttonUser === btn.dataset.category)
            btn.classList.add("selected-button")
            else
                btn.classList.remove("selected-button");
        
    })


    products.forEach((product=>{
        const productCategory= product.dataset.category;
    console.log(productCategory);

     if(buttonUser === productCategory || buttonUser==="All")
        product.style.display="block";
    else
        product.style.display="none";

    }))
    

   
}

buttons.forEach((button=>{

    button.addEventListener("click", filterButtonHandler);
}))

//change button theme

