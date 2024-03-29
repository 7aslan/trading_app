import { createContext } from "react";
import { useState } from "react";

export const WatchListContext = createContext()

export const WatchListContextProvider = (props) => {

    const [watchList, setWatchList] = useState(["GOGL", "MSFT", "AMZN"]);

    const addStock = (stock) => {
        if (watchList.indexOf(stock) === -1) {
            setWatchList([...watchList, stock])
        }
    }
    const deleteStock = (stock) =>{
        setWatchList(watchList.filter((el) =>{
            return el !== stock
        }))
    }

    return (<WatchListContext.Provider value={{ watchList, addStock, deleteStock }}>
        {props.children}

    </WatchListContext.Provider>
    );
}

