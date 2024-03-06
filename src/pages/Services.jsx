import Navbar from "../components/Navbar";

export default function ServicesPage(){

return (
    <div className="h-[100vh] w-[100vw]">
    <Navbar activeRoute={"/services"} />
    <div className="flex items-center justify-around h-[90vh] w-[100vw]">
        <h1 className="font-bold text-2xl">This is my Services Page</h1>
    </div>
    </div>
 )
}