import products_data from "../model/product.js";

// export const create = async (req,res) => {
//     try{
//         const products_data = JSON.parse(fs.readFileSync(`${__dirname}/../data/products(1).json`));

//         for(var i=0;i<products_data.length;i++){

//         var name, price,Quantity, instock, description, category;
//         name = products_data[i]["name"];
//         price = products_data[i]["price"];
//         Quantity = products_data[i]["Quantity"];
//         instock = products_data[i]["instock"];
//         description = products_data[i]["description"];
//         category = products_data[i]["category"];

//         var newproduct = {
//             "name":name,
//             "description":description,
//             "Qunatity": Quantity,
//             "instock": instock,
//             "price": price,
//             "category": category
//         };

        // products.create(newproduct);
        // await newproduct.save();
        // return res.send(products_data.toString());
// }

//     }catch(err){
//         return res.send(err);
//     }
// }



export const create = async (req,res) => {
    try{
        const {name, price, Quantity, instock, description, category} = req.body;

        if(!name) return res.send("name is require");
        if(!price) return res.send("price is require");
        if(!Quantity) return res.send("Quantity is require");
        if(!instock) return res.send("instock is require");
        if(!description) return res.send("description is require");
        if(!category) return res.send("category is require");

        const response = await products_data.find({}).exec();
        
        const newproduct = new products_data({
            name,price,Quantity,instock,description,category
        });

        await newproduct.save();
        return res.send("product added successfully");

    }catch(err){
        return res.send(err);
    }
}

export const getTotalProducts = async(req,res) => {
    try{
        const response = await products_data.find({}).exec();

        if(!response.length) return res.send("products not found");

        return res.status(200).json({'total number of products': response.length, response} );
    
    }catch(err){
        return res.send(err);
    }
}


export const filterbycategory = async (req,res) => {
    try{
        const {category} = req.body;

        const response = await products_data.find({category}).exec();
        
        return res.status(200).json({'filter by category':response.length, response});

    }catch(err){
        return res.send(err);
    }
}


export const filterbyPriceRange = async (req,res) => {
    try{
        const {price1, price2} = req.body;

        const response = await products_data.find({}).exec();

            const check = response.filter(key => key.price >= price1 && key.price <= price2);

        if(check){
            return res.status(200).json({'total products found':check.length, check})
        }else{
            return res.send("products not found");
    }
    }catch(err){
        return res.send(err);
    }
}


export const filterby_category_price = async(req,res) => {
    try{
        const {category, price1, price2} = req.body;

        const response = await products_data.find({category}).exec();
        if(response.length){
            const pricerange = response.filter(key => key.price >= price1 && key.price <= price2);

            if(pricerange){
                return res.status(200).json({'total products:':pricerange.length, pricerange})
            }else{
                return res.send("product not found in this price range");
            }
        }else{
            return res.send("p n found");
        }
    }catch(err){
        return res.send(err);
    }
}


export const pagination = async (req,res) => {
    try{
        const {page} = req.body;
    
        const limit = 3;
        const skip = (page-1)*limit;
        const response = await products_data.find({}).skip(skip).limit(limit);
        return res.send(response);
    }catch(err){
        return res.send(err);
    }
}


