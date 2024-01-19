import { useState} from 'react'
import { useDispatch } from 'react-redux'
import { updateAvatar } from 'redux/auth/operation';

export function UpdatePage() {
    const [file, setFile] = useState(null)
    const dispatch = useDispatch();
    
    const handleChange = e => setFile(e.target.files[0])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateAvatar(file))
    }
    
    return <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange}/>
        <button>Update</button>
    </form>
    // return <div>update</div>
}