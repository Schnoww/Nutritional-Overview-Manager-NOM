import { motion } from "framer-motion"

export default function InnerCard({ children }){
    return(
        
        <div className="justify-items-center py-6">
            <motion.div 
                className='bg-gray-900 rounded-xl p-2 w-auto border border-gray-700'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative h-auto rounded-md bg-black bg-opacity-10 p-2">
                    <div className="mx-auto justify-items-center">
                        {children}
                    </div>
                </div>
            </motion.div>
        </div>
        // // container needs to stay to not fuck with the header
        // <div className="flex-1 overflow-auto">
		// 	<Header title={title}/>
        //     {/* Action buttons & search */}
        //     {/* outter card container and places it in the center of screen */}
        //     <div className="justify-items-center py-6">
        //         {/* curves the edges and cuts the box to half the screen width */}
        //         <div className='bg-gray-900 rounded-xl p-2 w-auto border border-gray-700'>
        //             {/* inner black box, curved edges */}
        //             <div className='relative h-auto rounded-md bg-black bg-opacity-10 p-2'>
        //                 {/* places items horizontally */}
        //                 <div className="mx-auto justify-items-center">
        //                     {children}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}