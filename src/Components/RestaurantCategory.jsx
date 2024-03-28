import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const handleClick = () => {
          setShowIndex();
    }

    return (
    <div className="w-6/12 m-auto my-4 p-4 bg-gray-100 shadow-lg">
        {/* accordiane header */}
        <div className="justify-between flex">
        <span className="text-lg font-bold cursor-pointer" onClick={handleClick}> {data.title}  ({data.itemCards.length}) </span>
        <span className="cursor-pointer" onClick={handleClick}>{"▼"}</span>
        </div>

        {/* accodiance body */}
        { showItems && <ItemList items = {data.itemCards} />}
    </div>
    )
}

export default RestaurantCategory;