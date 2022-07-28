import axios from "axios"

let catalog = [
    {
        id: 1,      
        title: "Dog Collar",
        price: 15.00,
        imageUrl: "collar.jpg",
        category: "accessories",
        discount: "10% off 2 items",
        inStock: 20
    },
    {
        id: 2,
        title: "Dog Leash",
        price: 20.00,
        imageUrl: "leash.jpeg",
        category:"accessories",
        discount: "10% off 2 items",
        inStock: 20
    },
    {
        id: 3,
        title: "Portable Poop Bags",
        price: 7.00,
        imageUrl: "poopbags.jpeg",
        category:"extras",
        discount: "10% off 2 items",
        inStock: 50
    },
    {
        id: 4,
        title: "Feeder Bowl",
        price: 12.00,
        imageUrl: "foodbowl.jpeg",
        category:"extras",
        discount: "10% off 2 items",
        inStock: 30
    },
    {
        id: 5,
        title: "Water Bowl",
        price: 12.00,
        imageUrl: "combobowl.jpeg",
        category:"extras",
        discount: "10% off 2 items",
        inStock: 30
    },
    {
        id: 6,
        title: "2 cup Feed Scoop",
        price: 5.00,
        imageUrl: "2cupscoop.jpg",
        category:"extras",
        discount: "10% off 2 items",
        inStock: 50
    },
    {
        id: 7,
        title: "Dog Bed",
        price: 20.00,
        imageUrl: "bed.jpeg",
        category:"accessories",
        discount: "10% off 2 items",
        inStock: 25
    },
    {
        id: 8,
        title: "Dog Blanket",
        price: 15.00,
        imageUrl: "blanket.jpg",
        category:"accessories",
        discount: "10% off 2 items",
        inStock: 35
    },
    {
        id: 9,
        title: "Dog Toy",
        price: 7.00,
        imageUrl: "toy.jpeg",
        category:"accessories",
        discount: "10% off 2 items",
        inStock: 40
    }]

    class DataService {
        serverURL = "http://127.0.0.1:5000"
        async getCatalog(){
            let response = await axios.get(this.serverURL + "/api/products");
            return response.data;
            //   return catalog;
        }
        async saveProduct (prod) {
            // send prod to server
            let response = await axios.post(this.serverURL + "/api/products", prod);
            console.log(response.data);
        }   
    }
    
    export default DataService;