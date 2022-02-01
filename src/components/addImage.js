function AddImage({ imgUrl, imgCap, id }) {
    return (
        <figure className='imgBlock'>
            <img src={imgUrl} alt='photo' />
            <figcaption className='caption'>{imgCap}</figcaption>
        </figure>
    );
};

export default AddImage;