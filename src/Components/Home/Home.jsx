import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Home = () => {
    const data = useLoaderData()
    const users = data.users
    return (
        <div className="grid grid-cols md:grid-cols-3 gap-5 mt-24">
            {
                users.map(user => <Meal key={user.id} user={user}></Meal>)
            }
        </div>
    );
};

export default Home;