import { useState } from "react";

function Tour({ tour, removeTour }) {
	const [readMore, setReadMore] = useState(false);
	const { id, info, image, name, price } = tour;
	const collapseText = `${info.substring(0, 200)}... `;

	function handleReadMore() {
		setReadMore(!readMore);
	}

	return (
		<article className="single-tour">
			<img src={image} alt={name} className="img" />
			<span className="tour-price">${price}</span>
			<div className="tour-info">
				<h5>{name}</h5>
				<p>
					{readMore ? info : collapseText}

					<button className="info-btn" onClick={handleReadMore}>
						{readMore ? " show less" : " Read more"}
					</button>
				</p>
				<button
					className="btn btn-block delete-btn"
					onClick={() => removeTour(id)}
				>
					not interested
				</button>
			</div>
		</article>
	);
}
export default Tour;
