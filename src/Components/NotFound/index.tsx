import './notFound.scss';

const NotFound = () => {
  return (
    <div className='container-fluid notFoundContainer'>
      <div className='notFoundBox'>
        <h1>I can't go for that page!</h1>
        <iframe width='560' height='315' src='https://www.youtube.com/embed/ccenFp_3kq8' title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
      </div>
    </div>
  )
}

export default NotFound;
