import { Link } from "react-router-dom";
import useFetch from "../../Funct/Fetch";
import './blog.scss';


const Blog = () => {
    const { data : dataBlog , loading, isErr} = useFetch('https://jsonplaceholder.typicode.com/posts', false);
    return (
        <>
        <div className="list__blogs">
            <h4 className="heading"> List Blogs</h4>
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
            dataBlog.map( (blog, index) => {
                return (
                    <div className="card__blog" key={blog.id}>
                        <span className="stt">#{index}</span>
                        <h3 className="card__title">{blog.title}</h3>
                        <button className="btn">
                            <Link  className="btn__link" to={`/posts/${blog.id}`}>
                                View more
                            </Link>
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