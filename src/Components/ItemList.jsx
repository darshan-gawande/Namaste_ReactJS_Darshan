import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-4 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div className="w-9/12">
                    <div>
                    <span className="font-bold py-2">{item.card.info.name}</span>
                    <span > ₹ {item.card.info.price/100}</span>
                    </div>
                <p className="font-light text-xs">
                    {item.card.info.description}
                </p>
                </div>
                <div className="3/12 p-4">
                    <div className="absolute">
                        <button className="p-2 mx-4 my-10 rounded shadow-lg bg-white text-green-600">Add + </button>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} className="w-20"/>
                </div>
                </div>
                
            ))}
        </div>
    )
}

export default ItemList;