async function getData(){
    const res = await fetch("https://fakestoreapi.com/products", {
        cache: "no-store"
    });
    if(!res.ok){
        throw new Error("Failed to fetch data")
    }
    return res.json()
    
}

export default async function ProductPage(props: {params: {slug: string[]}}) {
    const {params} = props
    const products = await getData();
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center p-5 gap-2">
            {products.length > 0 && products.map((product: any) => (
                

<div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
    <a href="#">
        <img className="p-8 rounded-t-lg object-cover h-96 w-full" src={product.image} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{product.title}</h5>
        </a>
        
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>

            ))}
           
        </div>
    );
}