import { useQuery } from "@apollo/client"
import ListCard from "./ListCard"
import { GET_ALL_COUNTRIES } from "@/graphql/queries"
import { Country } from "@/types"

function List() {

    const { data, loading, error } = useQuery(GET_ALL_COUNTRIES)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className="flex items-center justify-center flex-wrap w-full gap-2 py-6">
            {data.countries.map((country: Country) => (
                <ListCard key={country.id} id={country.id} code={country.code} name={country.name} emoji={country.emoji} />
            ))}
        </div>
    )
}

export default List