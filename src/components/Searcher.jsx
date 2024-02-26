import Data from "../data/mock-data.json"
import { useState } from "react"


const Searcher = () => {

    const [query, setQuery] = useState("")

    return (
        <>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Stocks" />
            <div className="stocks">
            {
                Data.map((stock) => 
                    (<div key={stock.id} className="stock__container">
                        <p className="stock__symbol" id="symbol">{stock.symbol}</p>
                        <p className="stock__name" id="name">{stock.name}</p>
                        <p className="stock__sector" id="sector">{stock.sector}</p>
                    </div>)
                )
            }                
            </div>
        </>
    )
}


export default Searcher