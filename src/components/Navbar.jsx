import { Link } from "react-router-dom";

export default function Navbar({activeRoute}){
    return (
        <div className="flex px-12 py-4 w-[100vw] border-2">
            <div className="ml-auto flex gap-4">
                <Link to={"/"}>
                  <label className="text-blue-500 font-bold cursor-pointer hover:text-blue-700"
                   style={{color: (activeRoute === "/home" ? "black" : "")}}>Home</label>
                </Link>

                <Link to={"/teams"} t>
                    <label className="text-blue-500 font-bold cursor-pointer hover:text-blue-700"
                    style={{color: (activeRoute === "/teams" ? "black" : "")}}
                    >Team</label>
                </Link>

                <Link to={"/services"}>
                    <label className="text-blue-500 font-bold cursor-pointer hover:text-blue-700"
                    style={{color: (activeRoute === "/services" ? "black" : "")}}
                    >Services</label>
                </Link>
            </div>
        </div>
    )
}