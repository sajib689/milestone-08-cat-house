import { Link } from "react-router-dom";

const Meal = ({ user }) => {
  const {firstName,image,email,id}= user;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName}</h2>
        <p>Email: {email}</p>
        <div className="card-actions justify-start">
          <Link to={`details/${id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Meal;
