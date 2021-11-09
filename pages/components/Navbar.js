import Link from "next/link";

const Navbar = (props) => {
	return (
		<nav className="w-screen h-20 p-3 bg-gray-100 flex justify-between">
			<h1 className="p-3 font-semibold text-2xl">Dashboard</h1>
			<ul className="flex p-3">
				<li className="px-3">Home</li>
				<li className="px-3">Overdue</li>
			</ul>
		</nav>
	);
};

export default Navbar;
