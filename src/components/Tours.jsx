import Tour from "./Tour";

function Tours({ tours, removeTour }) {
	return (
		<section>
			<div className="title">
				<h2>our Tours</h2>
				<div className="title-underline"></div>
			</div>
			<div className="tours">
				{tours.map((tour) => {
					// console.log(tour);
					return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
				})}
			</div>
		</section>
	);
}
export default Tours;
