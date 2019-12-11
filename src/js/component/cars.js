import React, { useContext } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

import { Context } from "../store/appContext";

const Cars = () => {
	const { store } = useContext(Context);
	return (
		<div>
			{store.cars.map((item, index) => {
				return (
					<Card key={index}>
						<CardImg top width="100%" src={item.acf.image} alt="Card image cap" />

						<CardBody>
							<CardTitle>{item.acf.model}</CardTitle>
							<CardSubtitle>Card subtitle</CardSubtitle>
							<CardText>
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</CardText>
							<Button>Button</Button>
						</CardBody>
					</Card>
				);
			})}
		</div>
	);
};

export default Cars;
