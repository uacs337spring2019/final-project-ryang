"use strict";

( function () {
    
    let type = null;
    window.onload = function() {
        document.getElementById("tops-button").onchange = checker;
        document.getElementById("short-button").onchange = checker;
        document.getElementById("pants-button").onchange = checker;
        document.getElementById("access-button").onchange = checker;
        document.getElementById("shoes-button").onchange = checker;
        document.getElementById("shop-all").onclick = function() {
            offProductPage("category1");
        }
        let typesClicker = document.querySelectorAll(".clicker-women");
                for (let i = 0; i < typesClicker.length; i++) {
                    typesClicker[i].addEventListener('click', function() {
                    offProductPage(this.id);
                    });
                }
        let typesClickerMen = document.querySelectorAll(".clicker-men");
                for (let i = 0; i < typesClickerMen.length; i++) {
                    typesClickerMen[i].addEventListener('click', function() {
                    offProductPageMen(this.value);
                    });
                }
        
        
        
    };
   
    
    function populateWomen(type) {
        let contentArea = document.getElementById("block1-products")
        contentArea.innerHTML = "";
        let url = "http://localhost:3000?gen=female&type=" + type;
        console.log("working");
        fetch(url)
            .then(checkStatus)
            .then(function(responseText) {
                let resp = JSON.parse(responseText);
                if (type === "tops") {
                    let button = document.getElementById("tops-button");
                    button.checked = true;
                }else if (type === "skirts") {
                    let button = document.getElementById("short-button");
                    button.checked = true;
                }else if (type === "shoes") {
                    let button = document.getElementById("shoes-button");
                    button.checked = true;
                }else if (type === "pants") {
                    let button = document.getElementById("pants-button");
                    button.checked = true;
                }else if (type === "accessories") {
                    let button = document.getElementById("access-button");
                    button.checked = true;
                }
                
                for(let i = 0; i < resp.product.length; i++) {
                    if(type === resp.product[i].type) {
                        let productSquare = document.createElement("div");
                        productSquare.className = "squares";
                        let img = document.createElement("img");
                        let desc = document.createElement("h6");
                        desc.className = "descriptions";
                        let price = document.createElement("h7");
                        desc.innerHTML = resp.product[i].description;
                        price.innerHTML = resp.product[i].price;
                        
                        img.className = "productImage";
                        img.src = "..\\women\\products\\" + resp.product[i].image + ".jpg";
                        productSquare.appendChild(img);
                        productSquare.appendChild(desc);
                        productSquare.appendChild(price);
                        contentArea.appendChild(productSquare);
                    }
                }
                
                console.log(resp.product[0].image);
            })
       console.log("Yurr");
        
    }
    function populateMen(type) {
        let contentArea = document.getElementById("block1-products")
        contentArea.innerHTML = "";
        let url = "http://localhost:3000?gen=men&type=" + type;
        console.log("working");
        fetch(url)
            .then(checkStatus)
            .then(function(responseText) {
                let resp = JSON.parse(responseText);
                console.log(resp);
                if (type === "tops") {
                    let button = document.getElementById("tops-button");
                    button.checked = true;
                }else if (type === "shorts") {
                    let button = document.getElementById("short-button");
                    button.checked = true;
                }else if (type === "shoes") {
                    let button = document.getElementById("shoes-button");
                    button.checked = true;
                }else if (type === "pants") {
                    let button = document.getElementById("pants-button");
                    button.checked = true;
                }else if (type === "accessories") {
                    let button = document.getElementById("access-button");
                    button.checked = true;
                }
                
                for(let i = 0; i < resp.product.length; i++) {
                    if(type === resp.product[i].type) {
                        let productSquare = document.createElement("div");
                        productSquare.className = "squares";
                        let img = document.createElement("img");
                        let desc = document.createElement("h6");
                        desc.className = "descriptions";
                        let price = document.createElement("h7");
                        desc.innerHTML = resp.product[i].description;
                        price.innerHTML = resp.product[i].price;
                        
                        img.className = "productImage";
                        img.src = "..\\men\\products\\" + resp.product[i].image + ".jpg";
                        productSquare.appendChild(img);
                        productSquare.appendChild(desc);
                        productSquare.appendChild(price);
                        contentArea.appendChild(productSquare);
                    }
                }
                
                console.log(resp.product[0].image);
            })
       console.log("Yurr");
        
    }
    
    function offProductPage(value) {
        document.getElementById("contentAll").innerHTML = "";
        document.getElementById("content-products-women").style.display = "block";
        if (value === "category1") {
            let button = document.getElementById("tops-button");
            button.checked = true;
            populateWomen("tops")
        }else if(value === "category2") {
            let button = document.getElementById("short-button");
            button.checked = true;
            populateWomen("skirts")
        }else if(value === "category3") {
            let button = document.getElementById("pants-button");
            button.checked = true;
            populateWomen("pants")
        }else if(value === "category4") {
            let button = document.getElementById("access-button");
            button.checked = true;
            populateWomen("accessories")
        }else if(value === "category5") {
            let button = document.getElementById("shoes-button");
            button.checked = true;
            populateWomen("shoes")
        }else if(value === "all") {
            let button = document.getElementById("tops-button");
            button.checked = true;
            populateWomen("all");
        }
    }
    function offProductPageMen(value) {
        document.getElementById("contentAll").innerHTML = "";
        document.getElementById("content-products-men").style.display = "block";
        if (value === "category1") {
            let button = document.getElementById("tops-button");
            button.checked = true;
            populateMen("tops")
        }else if(value === "category2") {
            let button = document.getElementById("short-button");
            button.checked = true;
            populateMen("shorts")
        }else if(value === "category3") {
            let button = document.getElementById("pants-button");
            button.checked = true;
            populateMen("pants")
        }else if(value === "category4") {
            let button = document.getElementById("access-button");
            button.checked = true;
            populateMen("accessories")
        }else if(value === "category5") {
            let button = document.getElementById("shoes-button");
            button.checked = true;
            populateMen("shoes")
        }else if(value === "all") {
            let button = document.getElementById("tops-button");
            button.checked = true;
            populateMen("all");
        }
    }
    
    function checker() {
        if(this.value === "all" || this.value === "tops" || this.value === "skirts" || this.value === "pants" || this.value === "shoes" || this.value === "accessories") {
            populateWomen(this.value);
        }else if(this.value === "shorts-men") {
            populateMen("shorts")
        }else if(this.value === "pants-men") {
            populateMen("pants")
        }else if(this.value === "accessories-men") {
            populateMen("accessories")
        }else if(this.value === "tops-men") {
            populateMen("tops")
        }else if(this.value === "shoes-men") {
            populateMen("shoes")
        }
    }
    
    
    
    function checkStatus(response) {  
        if (response.status >= 200 && response.status < 300) {  
            return response.text();
        } else if (response.status == 404) {
            return Promise.reject(new Error("Sorry, we couldn't find that page")); 
        } else {  
            return Promise.reject(new Error(response.status+": "+response.statusText)); 
        } 
    } 
    
})();