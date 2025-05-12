import ListCard from "./ListCard"

function List() {
    return (
        <div className="flex items-center justify-center flex-wrap w-full gap-2 mx-auto px-36 py-6">
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
        </div>
    )
}

export default List