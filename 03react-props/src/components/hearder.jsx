
function Header() {
    return (
    <div>
        <nav className="bg-green-200">
            <ul className="flex gap-10 text-xl font-medium  ">
                <li className="hover:bg-green-400 cursor-pointer rounded-md m-2 p-2">Home</li>
                <li className="hover:bg-green-400 cursor-pointer rounded-md m-2 p-2">About</li>
                <li className="hover:bg-green-400 cursor-pointer rounded-md m-2 p-2">Contact Us</li>
            </ul>
        </nav>
    </div>
    )
}

export default Header