import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4()

function SubImage({submitImg}) {

    const [imgUrl, setImgUrl] = useState('');
    const [imgCap, setImgCap] = useState('');

    const completeSubmit = (e) => {
        e.preventDefault();
        if(imgUrl.trim().length === 0){
          return;
        } 
        submitImg(imgUrl, imgCap, id);
        setImgUrl('');
        setImgCap('');
        id();
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
            <h1>Add to the collection</h1>
            <div>
                <input className= 'subField'type='text' placeholder='Image URL' value={imgUrl} onChange={imgValueUrl}></input>
                <input className= 'subField' type='text' placeholder='Image Caption' value={imgCap} onChange={imgValueCap}></input>
            </div>
            <div>
                <button type='button' onClick={clearField}>CANCEL</button>
                <button type='submit'>ADD IMAGE</button>
            </div>
        </form>
    );
};

export default SubImage