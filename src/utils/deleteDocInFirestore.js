import { deleteDoc } from 'firebase/firestore';

const deleteDocInFirestore = async(reference) => {
    try {
        await deleteDoc(reference)
        alert(`se eliminó correctamente`)
    } catch (e) {
        alert(`hubo un error al intentar eliminar, consulte la consola`)
        console.log(e)
    }
}

export default deleteDocInFirestore