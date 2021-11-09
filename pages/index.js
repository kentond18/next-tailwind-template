import Header from "./components/Header";

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			{/* Header */}
			<Header title="Login" />

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">
					Login to Client Managment 1.0
				</h1>
			</main>
		</div>
	);
};

export default Home;
