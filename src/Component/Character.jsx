/* eslint-disable react/prop-types */
import ImgNotFount from "../assets/ImgNotFount.png";

const Character = ({ nameCharacter, imgCharacter }) => {
  return (
    <div className="p-2 col d-flex flex-column ">
      <img
        src={imgCharacter ? imgCharacter : ImgNotFount}
        alt={`este la imagen del personaje ${nameCharacter}`}
        className="img-fluid rounded border-0 img-size3 rounded-circle m-auto"
      />
      <h6 className="text-center text-light my-2"> {nameCharacter}</h6>
    </div>
  );
};
export default Character;
