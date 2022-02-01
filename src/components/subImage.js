import { useState } from 'react';
function SubImage({submitImg}) {

    const [imgUrl, setImgUrl] = useState('');
    const [imgCap, setImgCap] = useState('');

    const completeSubmit = (e) => {
        e.preventDefault();
        if(imgUrl.trim().length === 0){
          return;
        } 
        submitImg(imgUrl, imgCap);
        setImgUrl('');
        setImgCap('');
    }

    const imgValueUrl = (e) => {
        setImgUrl(e.target.value);
      }

    const imgValueCap = (e) => {
        setImgCap(e.target.value);
      }

    const clearField = (e) => {
        setImgUrl('');
        setImgCap('');
    }
      

    return (
        <form onSubmit={completeSubmit}>
            <div>
                <input type='text' placeholder='Image URL' value={imgUrl} onChange={imgValueUrl}></input>
                <input type='text' placeholder='Image Caption' value={imgCap} onChange={imgValueCap}></input>
            </div>
            <div>
                <button type='button' onClick={clearField}>CANCEL</button>
                <button type='submit'>ADD IMAGE</button>
            </div>
        </form>
    );
};

export default SubImage