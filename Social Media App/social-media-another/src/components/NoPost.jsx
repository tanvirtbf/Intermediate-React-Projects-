const NoPost = ({onFetchPost}) => {
  return (
    <div className='noPost'>
      <h1>Sorry! No Post Here</h1>
      <button type="button" className="btn btn-primary" onClick={onFetchPost}>Fetch More Posts</button>
    </div>
  )
}


export default NoPost
