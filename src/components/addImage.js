function AddImage({ imgUrl, imgCap }) {
    return (
        <figure className='imgBlock'>
            <img src={imgUrl} alt='photo' />
            <figcaption>{imgCap}</figcaption>
        </figure>
    );
};

export default AddImage;