class ProductManager { 

    constructor(){ 
        this.products= [] ;
        this.id = this.products.length ;
        
    }

    addProduct(code,title,description,price,thumbail,stock = 1){
    
        

        const product = { 
            id: this.id,
            code,
            title,
            description,
            price,
            thumbail,
            stock
        }

        const productFilter= this.products.find(prod=> prod.code ===  product.code)

        if(!productFilter){ 
            this.products.push(product);
            this.id++;
            return `Producto creado con id ${this.id}, code ${product.code}`
        } else{ 
            return `El producto con code ${product.code} ya existe`
        }

    
    }

    getProducts(){ 

        return this.products;

    }


    getProductById(id){ 

        const prodById = this.products.find(prod=> prod.id === id)
        
        if(prodById){ 
           return `Producto con id ${id} y ${prodById}`
        } else{
            return `Not Found id ${id}`
        }

    }


}


const codePrubea = 1;
const titlePrueba= "Camisa";
const descPrueba = "Camisa de color azul";
const precioPrueba = 450;
const imgPrueba ="Imagen vacio";
const stockPrueba=500;


const codePrubea2 = 1;
const titlePrueba2= "Camisa";
const descPrueba2 = "Camisa de color roja";
const precioPrueba2 = 300;
const imgPrueba2 ="Imagen vacio";
const stockPrueba2=10;

const codePrubea3 = 2;
const titlePrueba3= "Pantalon";
const descPrueba3 = "Mezquilla negro";
const precioPrueba3 = 999;
const imgPrueba3 ="Imagen vacio";



const prueba= new ProductManager()
prueba.addProduct(codePrubea,titlePrueba,descPrueba,precioPrueba,imgPrueba,stockPrueba)
prueba.addProduct(codePrubea2,titlePrueba2,descPrueba2,precioPrueba2,imgPrueba2,stockPrueba2)
prueba.addProduct(codePrubea3,titlePrueba3,descPrueba3,precioPrueba3,imgPrueba3)

console.log( prueba.getProducts())
console.log(prueba.getProductById(1))
console.log(prueba.getProductById(4))