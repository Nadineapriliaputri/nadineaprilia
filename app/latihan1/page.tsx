export default function latihan1 () {
    return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center">

     
      <div className="bg-white w-90 h-100 rounded-4xl p-6">

       
        <div className="flex justify-between items-center">
          <h1 className="text-1xl">Client details</h1>
          <p className="text-2xl cursor-pointer">×</p>
        </div>

        
        <div className="border-b border-gray-500 mt-3"></div>

        
        <div className="flex items-center gap-4 mt-8">

         
          <img
            src="/avatar1.jpg"
            className="w-10 h-10 rounded-full object-cover"
          />

        
          <div>
            <h1 className="text-1xl font-bold">
              Kim taehyung
            </h1>

           <div className="bg-red-500 w-25 h-6 flex items-center justify-center rounded-4xl text-white"> wanted </div>
          </div>

        </div>

        
        <div className="bg-purple-100 w h-30 rounded-3xl p-8 mt-10">

          <h1 className="text-1xl font-bold mb-6">
            Projects
          </h1>

          <div className="flex justify-around text-center">

            
            <div>
              <p className="text-1xl">Ongoing</p>
              <p className="text-1xl">2 (Rp 2.5)</p>
            </div>

            
            <div>
              <p className="text-1xl">Ongoing</p>
              <p className="text-1xl">2 (Rp 2.5)</p>
            </div>

          </div>
        </div>

       
        <div className="mt-10 space-y-8">

        
          <div className="flex justify-between">
            <p className="font-bold text-1xl">
              Location
            </p>

            <p className="text-1xl">
              United States, New York
            </p>
          </div>

         
          <div className="flex justify-between">
            <p className="font-bold text-1xl">
              With Us
            </p>

            <p className="text-1xl">
              6 Jan 2024
            </p>
          </div>

        </div>

        
        <div className="flex items-center gap-6 mt-12">

          
          <div className="w-20 h-20 rounded-full border border-black flex items-center justify-center text-4xl">
            ⋮
          </div>

          
          <button className="bg-indigo-700 text-white flex-1 py-5 rounded-full text-2xl font-bold">
            Message
          </button>

        </div>

      </div>

    </div>
  );
}

       
   