import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../Funct/Fetch";
import './blog.scss'
const BlogDetail = () => {
    const {id} = useParams();
    const history = useNavigate();

    const { data :dataBlogDetail, loading, isErr} = useFetch(`https://jsoffnplaceholder.typicode.com/posts/${id}`, false);
    const handelClick = () => {
        history('/posts');
    }
    return (
        <>
         {
            loading === false && isErr.isError === true &&
            <div>{isErr.message}</div>
         }
        {
            dataBlogDetail && 
            <div className="blog__detail">
                    <span>#IDBlog : { loading && isErr.isError === false ? 'Loading ....' : dataBlogDetail.id}</span>
                <div className="heading">
                    <h4 className="title"> {dataBlogDetail.title}</h4>
                    <p className="decs">
                        {dataBlogDetail.body}
                    </p>
                </div>
            </div>
        }
            <button 
                className="btn"
                onClick={handelClick}
            >
                Back To View Blog
            </button>
        </>
    )
}

export default BlogDetail;