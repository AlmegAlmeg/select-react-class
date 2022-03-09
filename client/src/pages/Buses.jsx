import { useState } from "react";
import { useEffect } from "react";
import Line from "../components/Line";
import { getAllLines, getLinesByCategory } from "../services/busService";

const Buses = () => {

    const [linesArr, setLinesArr] = useState([])

    useEffect(()=>{
        getAllLines().then(res => setLinesArr(res.data))
    },[])

    const getArea = e =>{
        const category = e.target.value
        getLinesByCategory(category)
            .then(res => setLinesArr(res.data))
    }

    return (
        <>
            <div>
                <label className="m-2">Select area:</label>
                <select onChange={(e) => getArea(e)}>
                    <option value="">All</option>
                    <option value="north">North</option>
                    <option value="center">Center</option>
                    <option value="south">South</option>
                </select>
            </div>
            <div className="global-grid pt-4">
                {linesArr.map((item, index)=>{
                    return <Line key={index} item={item}/>
                })}
            </div>
        </>
    );
}
 
export default Buses;