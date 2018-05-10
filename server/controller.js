module.exports ={
    getProducts: (req,res,next) => {
        const dbInstance = req.app.get('db')

        dbInstance.getProducts().then(products => {console.log(products);res.status(200).send(products)})
        .catch(err => {console.log(err);
        res.status(500).send(err)})
    }
}