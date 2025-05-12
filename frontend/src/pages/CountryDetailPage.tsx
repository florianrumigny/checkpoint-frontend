import { GET_COUNTRY_BY_CODE } from "@/graphql/queries"
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"

function CountryDetailPage() {

    const { code } = useParams()

    const { data, loading, error } = useQuery(GET_COUNTRY_BY_CODE, {
        variables: { code }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className="flex flex-col items-center justify-start w-full mx-auto h-screen">
            <h1 className=" text-8xl py-12">{data.country.emoji}</h1>
            <p className=" pb-3">Name: {data.country.name} ({data.country.code})</p>
            <p>Continent: {data.country.continent.name}</p>
        </div>
    )
}

export default CountryDetailPage