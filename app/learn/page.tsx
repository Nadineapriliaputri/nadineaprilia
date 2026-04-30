import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";

export default function Learnpage() {
    return (
        <div className="bg-white h-screen">
        <div className="bg-purple-300 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
            <div className="flex gap-4">
                <img src="/palette.svg"/>
                <p>Design</p>
            </div>
            <div>
                <h1 className="text-4xl font-bold">Figma</h1>
                <p>8 hours ago</p>
            </div>
        </div>

<div className="bg-white h-screen">
        <div className="bg-orange-300 h-72 w-96 flex flex-col justify-between p-12 rounded-4xl text-blue-950">
            <div className="flex gap-4">
                <img src="/palette.svg"/>
                <p>Coding</p>
            </div>
            <div>
                <h1 className="text-4xl font-bold">Python</h1>
                <p>2 day ago</p>
        </div>
        </div>

<div className="bg-white h-screen">
        <div className="bg-red-300 h-72 w-96 flex flex-col justify-between p-16 rounded-4xl text-blue-950">
            <div className="flex gap-4">
                <img src="/palette.svg"/>
                <p>Design</p>
            </div>
            <div>
                <h1 className="text-4xl font-bold">css</h1>
                <p>8 hours ago</p>
        </div>
        </div>
        </div>
        </div>
        </div>

        
        
    )
}


