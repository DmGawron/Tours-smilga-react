import { useState } from "react";
import Tours from "./components/Tours";
import { useEffect } from "react";
import Loading from "./components/Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);

	function removeTour(id) {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	}

	async function fetchTours() {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			setTours(data);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	}

	useEffect(() => {
		fetchTours();
	}, []);

	if (isLoading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>No tours left</h2>
					<button
						style={{ marginTop: "2rem" }}
						className="btn"
						onClick={fetchTours}
					>
						Refresh
					</button>
				</div>
			</main>
		);
	}

	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	);
};
export default App;
