import { addDoc } from 'firebase/firestore';

const addDocToFirestore = async(reference, doc, callbackSuccess, callBackError) => {
    try {
        await addDoc(reference, doc)
        callbackSuccess()
    } catch (e) {
        callBackError()
        console.log(e)
    }
}

export default addDocToFirestore