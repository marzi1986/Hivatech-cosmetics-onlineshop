const searchName= document.getElementById("search-input");
console.dir(searchName);

const products=document.querySelectorAll(".product-item");
console.dir(products);

const buttons=document.querySelectorAll(".filter");
console.dir(buttons);

const searchPrice= document.getElementById("search-price");
console.dir(searchPrice);

const btnSearchPrice= searchPrice.querySelector("button");
console.dir(btnSearchPrice);

//Search Name Input Text
const searchNameHandler=(event)=>{
   const searchNameText=event.target.value.toLowerCase().trim();

    products.forEach((product)=>{
        const productName= product.children[1].innerText.toLowerCase().trim();
        
        if (productName.includes(searchNameText))
            product.style.display="block"
        else
            product.style.display="none";

            })

}

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
    
     if(buttonUser === productCategory || buttonUser==="All")
        product.style.display="block";
    else
        product.style.display="none";

    }))
      
}

//Price Search
const searchPriceHandler=(event)=>{
   const txtSearchPrice= +event.target.parentElement.children[0].value;
    console.dir(txtSearchPrice);

    products.forEach((product)=>{
        const productPrice= product.children[2].innerText;
        const fProductPrice= +productPrice.split(" ")[1];
       console.log(fProductPrice);

       if(txtSearchPrice === fProductPrice || !txtSearchPrice)
        product.style.display="block";
    else
        product.style.display="none";
    })

}


const windowHandlers= ()=>{
searchName.addEventListener("keyup", searchNameHandler);

buttons.forEach((button=>{

    button.addEventListener("click", filterButtonHandler);
}))

btnSearchPrice.addEventListener("click", searchPriceHandler);


};

window.addEventListener("load", windowHandlers);