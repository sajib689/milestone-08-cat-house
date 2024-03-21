import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const detail = useLoaderData();
  console.log(detail);
  const {firstName,image,age, bloodGroup} = detail
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {firstName}</h2>
        <h1>Age: {age}</h1>
        <p>Blood Group: {bloodGroup}</p>
        <div className="card-actions justify-start">
          <Link to='/' className="btn btn-primary">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
