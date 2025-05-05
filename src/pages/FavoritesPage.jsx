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
                <div className="flex items-center justify-center w-auto gap-x-3">
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
                <table className="mt-4 flex items-center justify-center w-auto text-white">
                <thead>
                <tr className="border-b-2 flex items-center justify-center border-b-gray-600">
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Image</th>
                    <th className="px-4 py-2 text-left">Food Item</th>
                    <th className="px-4 py-2 text-left"></th> {/* empty for chevron */}
                </tr>
                <tbody>
                        {/* What displays the favorited food items */}
                        <MealTable dataType={"favorite"} searched={searchTerm}/>
                    </tbody>
                </thead>
                </table>
            </InnerCard>
        </PageStarter>
    )
}
