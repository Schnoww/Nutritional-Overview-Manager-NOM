// library import
import { useState } from "react";
// style import
import { Trash2, Filter, Search } from "lucide-react";
import InnerCard from "../components/common/InnerCard";
import MealTable from "../components/common/MealTable";
import PageStarter from "../components/common/PageStarter";

// TODO: fix width of bottom border bar

export default function FavoritesPage(){
    const [searchTerm, setSearchTerm] = useState("");

    return(
        <PageStarter title={"Favorites"}>
            <InnerCard>
                {/* sets the button distance from each other and aligns image with text horizontally */}
                <div className="flex items-center gap-x-3">
                    <button className="flex items-center text-white bg-gray-600 hover:bg-gray-400 rounded-md p-2 indent-2"><Trash2/> Delete</button>
                    <button className="flex items-center text-white bg-gray-600 hover:bg-gray-400 rounded-md p-2 indent-2"><Filter/> Filter</button>
                    {/* div needed to group the image before the search bar */}
                    <div className="group flex items-center text-white bg-gray-600 hover:bg-gray-400 rounded-md p-2">
                        <Search/>
                        <input className="bg-gray-600 indent-2 group-hover:bg-gray-400 group-hover:placeholder:text-black focus:outline-none"
                            type="text" 
                            placeholder="Search" 
                            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    </div>
                </div>
                {/* Food list */}
                <table className="mt-4 w-auto text-white">
                    <thread>
                        <tr className="border-b-2 border-b-gray-600">
                            {/* This stuff needs to be fixed so that it spans the entire width */}
                            <th>Name</th>
                            <th className="indent-5">Food Item</th>
                        </tr>
                    </thread>
                    <tbody>
                        {/* What displays the favorited food items */}
                        <MealTable dataType={"favorite"} searched={searchTerm}/>
                    </tbody>
                </table>
            </InnerCard>
        </PageStarter>
    )
}