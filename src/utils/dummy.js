
const x =  (<div>
              <ul className="flex flex-wrap">{itemCards.map(item => 
            <li className="m-4 p-4 w-96 rounded-lg bg-gray-50 hover:bg-gray-200" key={item.card.info.id}>
                <img className="rounded-lg" src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} /> 
                <h2>{item.card.info.name} - ₹ {item.card.info.price/100}</h2> 
            </li> 
            )}
           </ul>
           </div>)