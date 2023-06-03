
function Gallery(props) {
    return (
        <section className='gallery-section'>
            <div className='grid container'>
                {props.gallery.map(img => (
                    <div className='img-box'>
                        <img className='img' key={img.id} src={img.url} />
                        <p className='course-info'>{img.info}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery;