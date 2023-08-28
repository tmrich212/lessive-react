const productsArray = [
    {
        id: '1',
        title: 'Laundry',
        service: 'per load',
        image: 'https://images.pexels.com/photos/6850576/pexels-photo-6850576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 10.00
    },
    {
        id: '2',
        title: 'Dry Cleaning',
        service: "per item",
        image: 'https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 3.00
    }
]


function getProducts(id) {
    const products = productsArray.find(product => product.id === id);

    if(products === undefined){
        console.log("Product data does not exist")
        return undefined;
    }

    return products;
}

export { productsArray, getProducts };