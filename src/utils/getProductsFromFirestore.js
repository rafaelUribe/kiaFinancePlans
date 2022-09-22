import { getDocs } from 'firebase/firestore';

const getDocsFromFirestore = async(reference) => {
    try {
        const { docs } = await getDocs(reference)
        const docsArray = docs.map(doc => ({...doc.data(), id: doc.id }))
        console.log(docsArray)
        return docsArray
    } catch (e) {
        alert('algo salió mal, verifica tu conexión')
    }
}

export default getDocsFromFirestore