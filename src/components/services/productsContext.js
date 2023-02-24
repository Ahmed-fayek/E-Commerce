import { useEffect, useState } from "react";
import { createContext } from "react";

export const Productcontext = createContext();
function ProductProvider(props) {
    const [products, setproduscts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/product').then((res) => res.json()).then((data) => setproduscts(data))
    }, [])
    return (
        <Productcontext.Provider value={products}>
            {props.children}
        </Productcontext.Provider>
    )
}
export default ProductProvider;