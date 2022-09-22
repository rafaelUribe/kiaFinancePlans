import { updateDoc } from 'firebase/firestore';

const updateDocInFirestore = async(reference, obj) => {
    try {
        await updateDoc(reference, obj)
        alert(`se actualizó correctamente ${obj.description || obj.name || ''}`)
    } catch (e) {
        alert(`hubo un error al intentar agregar, ${obj.description || obj.name || ''}, consulte la consola`)
        console.log(e)
    }
}

export default updateDocInFirestore