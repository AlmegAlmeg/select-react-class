import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='text-center'>
            <h2 className="text-danger">Wrong path, mate</h2>
            <Link to='/'>Back to Homepage</Link>
        </div>
    );
}
 
export default PageNotFound