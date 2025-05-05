import Header from "./Header"

export default function PageStarter({ children, title }){
    return(
        // What allows the title and page to span across the whole screen
        <div className="flex-1 overflow-auto text-white">
            <Header title={title}/>
            {children}
        </div>
    )
}