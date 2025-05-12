import { Country } from "@/types";
import { Link } from "react-router-dom";

function ListCard({ name, emoji, code, id }: Country) {
    return (
        <>
            <Link to={`/countries/${code}`} className="text-decoration-none">
                <div className="border border-gray-400 rounded-md py-2 px-6 text-center" id={id}>
                    <p className="">{name}</p>
                    <p className="text-xl">{emoji}</p>
                </div>
            </Link>
        </>
    )
}

export default ListCard