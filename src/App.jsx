import { collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import './App.css';
import Menu from './components/Menu'
import Quotator from './components/Quotator';
import getDocsFromFirestore from './utils/getDocsFromFirestore';

function App() {

    const carsRef = collection(db, 'products');
    const [products, setProducts] = useState([]);

    const getCars = async () => {
        const carsArray = await getDocsFromFirestore(carsRef)
        setProducts(carsArray)
    }

    useEffect(() => {
        getCars()
    }, []);

    return ( 
        <div className= "App" >
            <Menu></Menu>
            {
                products.length > 0 &&
                <Quotator
                    products={products}
                />
            }

        </div>
    );
}

export default App;