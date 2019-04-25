"use strict";

const express = require("express");
const app = express();

const fs = require("fs");

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let gen = req.query.gen;
    let type = req.query.type;
    if(gen === "men") {
        res.send(getMenProduct(type));
    }else if(gen === "female") {
        res.send(getWomenProduct(type));
    }
    

    
})

app.listen(process.env.PORT);


function getWomenProduct(type) {
    let file = fs.readFileSync("public\\women\\products\\productinfo.txt", 'utf8');
    let lines = file.split("\n");
    let product = {};
    let allproducts = [];
    for(let i = 0; i < lines.length; i++) {
        if(type === "tops") {
            let singleline = lines[i].split("::");
            let productEach = {};
            if (singleline[2] === "tops") {
                productEach["image"] = singleline[0];
                productEach["color"] = singleline[1];
                productEach["type"] = singleline[2];
                productEach["description"] = singleline[3];
                productEach["price"] = singleline[4];
                allproducts.push(productEach);
                product["product"] = allproducts;
            }
        }else if(type === "skirts") {
            let singleline = lines[i].split("::");
            let productEach = {};
            if (singleline[2] === "skirts") {
                productEach["image"] = singleline[0];
                productEach["color"] = singleline[1];
                productEach["type"] = singleline[2];
                productEach["description"] = singleline[3];
                productEach["price"] = singleline[4];
                allproducts.push(productEach);
                product["product"] = allproducts;
            }
        }else if(type === "pants") {
            let singleline = lines[i].split("::");
            let productEach = {};
            if (singleline[2] === "pants") {
                productEach["image"] = singleline[0];
                productEach["color"] = singleline[1];
                productEach["type"] = singleline[2];
                productEach["description"] = singleline[3];
                productEach["price"] = singleline[4];
                allproducts.push(productEach);
                product["product"] = allproducts;
            }
        }else if(type === "shoes") {
            let singleline = lines[i].split("::");
            let productEach = {};
            if (singleline[2] === "shoes") {
                productEach["image"] = singleline[0];
                productEach["color"] = singleline[1];
                productEach["type"] = singleline[2];
                productEach["description"] = singleline[3];
                productEach["price"] = singleline[4];
                allproducts.push(productEach);
                product["product"] = allproducts;
            }
        }else if(type === "accessories") {
            let singleline = lines[i].split("::");
            let productEach = {};
            if (singleline[2] === "accessories") {
                productEach["image"] = singleline[0];
                productEach["color"] = singleline[1];
                productEach["type"] = singleline[2];
                productEach["description"] = singleline[3];
                productEach["price"] = singleline[4];
                allproducts.push(productEach);
                product["product"] = allproducts;
            }
        }else if(type === "all") {
            let singleline = lines[i].split("::");
            let productEach = {};
            productEach["image"] = singleline[0];
            productEach["color"] = singleline[1];
                productEach["type"] = singleline[2];
            productEach["description"] = singleline[3];
            productEach["price"] = singleline[4];
            allproducts.push(productEach);
            product["product"] = allproducts;
        }
    }
    return product;

}

function getMenProduct(type) {
    let file = fs.readFileSync("public\\men\\products\\productinfo.txt", 'utf8');
    let lines = file.split("\n");
    let product = {};
    let allproducts = [];
    for(let i = 0; i < lines.length; i++) {
        if(type === "tops") {
            let singleline = lines[i].split("::");
            let productEach = {};
            if (singleline[2] === "tops") {
                productEach["image"] = singleline[0];
                productEach["color"] = singleline[1];
                productEach["type"] = singleline[2];
                productEach["description"] = singleline[3];
                productEach["price"] = singleline[4];
                allproducts.push(productEach);
                product["product"] = allproducts;
            }
        }else if(type === "shorts") {
            let singleline = lines[i].split("::");
            let productEach = {};
            if (singleline[2] === "shorts") {
                productEach["image"] = singleline[0];
                productEach["color"] = singleline[1];
                productEach["type"] = singleline[2];
                productEach["description"] = singleline[3];
                productEach["price"] = singleline[4];
                allproducts.push(productEach);
                product["product"] = allproducts;
            }
        }else if(type === "pants") {
            let singleline = lines[i].split("::");
            let productEach = {};
            if (singleline[2] === "pants") {
                productEach["image"] = singleline[0];
                productEach["color"] = singleline[1];
                productEach["type"] = singleline[2];
                productEach["description"] = singleline[3];
                productEach["price"] = singleline[4];
                allproducts.push(productEach);
                product["product"] = allproducts;
            }
        }else if(type === "shoes") {
            let singleline = lines[i].split("::");
            let productEach = {};
            if (singleline[2] === "shoes") {
                productEach["image"] = singleline[0];
                productEach["color"] = singleline[1];
                productEach["type"] = singleline[2];
                productEach["description"] = singleline[3];
                productEach["price"] = singleline[4];
                allproducts.push(productEach);
                product["product"] = allproducts;
            }
        }else if(type === "accessories") {
            let singleline = lines[i].split("::");
            let productEach = {};
            if (singleline[2] === "accessories") {
                productEach["image"] = singleline[0];
                productEach["color"] = singleline[1];
                productEach["type"] = singleline[2];
                productEach["description"] = singleline[3];
                productEach["price"] = singleline[4];
                allproducts.push(productEach);
                product["product"] = allproducts;
            }
        }else if(type === "all") {
            let singleline = lines[i].split("::");
            let productEach = {};
            productEach["image"] = singleline[0];
            productEach["color"] = singleline[1];
            productEach["type"] = singleline[2];
            productEach["description"] = singleline[3];
            productEach["price"] = singleline[4];
            allproducts.push(productEach);
            product["product"] = allproducts;
        }
    }
    return product;

}
