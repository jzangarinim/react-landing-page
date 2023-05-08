import React from "react";

export const cards = {
  puppy: {
    name: "Rex",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
    description: "Look at 'im!🥹",
  },
  kitty: {
    name: "Mauricio",
    imageUrl:
      "https://www.redfin.com/blog/wp-content/uploads/2021/07/Kitty1.jpg",
    description: "Nap time💤",
  },
  steve: {
    name: "Steve",
    imageUrl:
      "https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU=",
    description: "Employee of the month!",
  },
  maracaibo: {
    name: "Maracaibo",
    imageUrl:
      "https://media.istockphoto.com/id/584243712/es/foto/amanecer-zuliano.jpg?s=612x612&w=0&k=20&c=ljqMAFsTUj2xw3go6V4ebMZl-jIRuF2Y4zHfWozaESA=",
    description: "Based in Maracaibo, Zulia!",
  },
};

const Card = (props) => {
  return (
    <>
      <div className="card col-2 mt-3 me-3">
        <img
          src={props.chosenCard.imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.chosenCard.name}</h5>
          <p className="card-text">{props.chosenCard.description}</p>
          <a href="#" className="btn btn-primary mt-auto">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
