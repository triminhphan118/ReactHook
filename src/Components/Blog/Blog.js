import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../Funct/Fetch";
import './blog.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { useState, useEffect } from "react";
import AddNewBlog from "./AddNewBlog";



const Blog = () => {
    const { data : dataBlog , loading, isErr} = useFetch('https://jsonplaceholder.typicode.com/posts', false);
    const [ blog, setBlog ] = useState([]);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect( () => {
        if(dataBlog) {
            setBlog(dataBlog)
        }
    }, [dataBlog])
 
    const handleAddNewBlog = () => {
        navigate('/addnewblog');
    }

    const updateBlog = (blogup) => {
        let newData = blog;
        newData.unshift(blogup);
        handleClose(true)
        setBlog(newData);
    }

    const handleDelete = (id) => {
        let newData = blog.filter( data => data.id !== id);
        setBlog(newData);
    }
    return (
        <>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add New Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddNewBlog
                    updateBlog = {updateBlog}
                />
            </Modal.Body>
        </Modal>
        <div className="list__blogs">
            <h4 className="heading"> List Blogs</h4>
            <div className="addnew">
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>
                {/* <button 
                    className="btn"
                    onClick={handleAddNewBlog}
                >+ Add New Blog</button> */}
            </div>
        {
            loading  && isErr.isError === false && 
            <div>Loading ....</div>
        }

        {
            loading === false  && isErr.isError === true && 
            <div>{isErr.message}</div>
        }
        {
            loading === false && isErr.isError === false &&
            blog.map( (blog, index) => {
                return (
                    <div className="card__blog" key={blog.id}>
                        <span className="stt">#{index}</span>
                        <h3 className="card__title">{blog.title}</h3>
                        <button className="btn">
                            <Link  className="btn__link" to={`/posts/${blog.id}`}>
                                View more
                            </Link>
                        </button>
                        <button 
                            className="btn mt-4"
                            onClick={() => handleDelete(blog.id)}
                            >
                            Delete Blog
                        </button>
                    </div>
                )
            })
        }
        </div>
        </>
    )
}

export default Blog;