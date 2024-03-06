import Navbar from "../components/Navbar";

export default function TeamPage(){

return (
    <div className="h-[100vh] w-[100vw]">
    <Navbar activeRoute={"/teams"} />
    <div className="flex items-center justify-around h-[90vh] w-[100vw]">
        <h1 className="font-bold text-2xl">This is my Team Page</h1>
    </div>
    </div>
 )
}