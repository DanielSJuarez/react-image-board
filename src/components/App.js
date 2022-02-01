import { useState } from 'react';
import '../App.css';
import AddImage from './addImage';
import SubImage from './subImage';
import { v4 as uuidv4 } from 'uuid';


const IMAGES = [{
  imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JlGSYa34-MYvjxFTddUSsAHaEl%26pid%3DApi&f=1',
  imgCap: 'Stealth FD3S',
  id: uuidv4(),
},
{
  imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EPFC-RYOnsfewbS3wUVcvwHaGq%26pid%3DApi&f=1',
  imgCap: 'Blue FD3S',
  id: uuidv4(),
},
];

function App(prop) {
  const [images, setImage] = useState(IMAGES);
  const imageAdd = images.map((image) => (
    <AddImage key={image.id} {...image} />
  ));

  const submitImg = (imgUrl, imgCap, id) => {
    const newImg = {
      imgUrl,
      imgCap,
      id,
    }
    setImage([...images, newImg])
  }

  return (
    <div>
      <section>
        <SubImage submitImg={submitImg} />
      </section>
      <section>
        {imageAdd}
      </section>
    </div>
  );
}

export default App;
