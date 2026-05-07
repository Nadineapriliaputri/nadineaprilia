export default function holidaypage() {
    return (
        <div className="bg-gray-200 h-screen flex items-center justify-center flex items-between justify between">
            <div className="bg-white w-70 h-120 flex-flex-col flex justify-center rounded-4xl">
                <div className="">
                <img src= "kota.jpg" className="w-65 h-60 rounded-4xl mt-4"/>
                
                <div className="mt-4">
                <h1 className="text-2xl font-bold">San Francisco</h1>
                <div className="flex justify-start">
                <p>Premium economy</p>
                </div>
               
            
               <div className="flex gap-3 flex items-center mt-4">
                <img src="tag.svg"/>
                <p>from $240</p>
              

               <div className="flex  gap-3 items-end">
                    <img src="plane-tilt.svg"/>
                    <p>SFO</p>
                
               </div>

            </div>

            


            <div>

            </div>
                </div>
            </div>

            </div>
        </div>
       
    );
}