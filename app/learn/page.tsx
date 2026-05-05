import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";

export default function Learnpage() {
    return (
        <div className="bg-white h-screen flex items-center justify-center flex items-between justify between">
        <div className="bg-purple-200 h-60 w-60 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
            <div className="flex gap-4">
                <img src="/palette.svg"/>
                <p>Design</p>
            </div>
            <div>
                <h1 className="text-3xl font-bold">Figma</h1>
                <p>8 hours ago</p>

            </div>
        </div>

        <div className="h-screen flex items-center justify-center">
                <div className="flex gap-4 px-4"> 
                    <div className="flex-col justify-between"> 

                    </div>
                </div>
            </div>

<div className="bg-white h-screen flex items-center justify-center">
        <div className="bg-orange-200 h-60 w-60 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
            <div className="flex gap-4">
                <img src="/code.svg"/>
                <p>Codding</p>
            </div>
            <div>
                <h1 className="text-3xl font-bold">Python</h1>
                <p>2 day ago</p>
        </div>
        </div>

        <div className="h-screen flex items-center justify-center">
                <div className="flex gap-4 px-4"> 
                </div>
            </div>

<div className="bg-white h-screen flex items-center justify-center">
        <div className="bg-red-200 h-60 w-60 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
            <div className="flex gap-4">
                <img src="/palette.svg"/>
                <p>Design</p>
            </div>
            <div>
                <h1 className="text-3xl font-bold">skecth</h1>
                <p>4 days ago</p>

        </div>
    </div>

    <div className="h-screen flex items-center justify-center">
                <div className="flex gap-4 px-4"> 
                </div>
            </div>

            <div className="bg-white h-screen">
                <div className="bg-blue-200 h-70 w-100 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
                    <div className="flex gap-4">
                        <img src="/palette.svg"/>
                        <p>Design</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Adobe Photoshop</h1>
                        <p>in 3 days</p>
                    </div>
                </div>
            
                    </div>

                </div>

            </div>
</div>


     

        
        
    );
}