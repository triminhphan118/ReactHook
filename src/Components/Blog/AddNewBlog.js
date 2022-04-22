import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AddNewBlog = ({updateBlog}) => {
    const [ title , setTitle ]  = useState('');
    const [ desc , setDesc ]  = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!title) {
            alert('Input not empty.');
            return;
        }
        if (!desc) {
            alert('Input not empty.');
            return;
        }
       const data = {
            title: title,
            body: desc,
            userId: 1,
       }

       const res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
       if (res && res.data) {
           console.log(res.data)
           updateBlog(res.data);
       }
    }

    const backToBlogs = () => {
        navigate('/posts')
    }
    return (
        <div className="form">
            <h5 className="heading">Add New Blog</h5>
            <div className="form-group">
                <label>Title</label>
                <input 
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                
                />
            </div>
            <div className="form-group">
                <label>Decscription</label>
                <input 
                    className="form-control"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                />
            </div>

            <button 
                className="btn"
                onClick={handleSubmit}
            >Add New</button>

            {/* <button 
                className="btn"
                onClick={backToBlogs}
            >Back To Blog</button> */}
        </div>
    )
}

export default AddNewBlog;