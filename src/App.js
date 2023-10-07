import React, { Fragment, useEffect, useState } from 'react';
import './App.css'
import 'animate.css'
import Maskabun from './assets/maskabun.png';
import Tea from './assets/tea.png';
import Maggie from './assets/noodle.png';

const App = () => {

	const spicyItemsOptions = "Sev/Sing/Wafers";

	const foodItems = [
		{
			name: "Tea",
			price: "10/20"
		},
		{
			name: "Coffee",
			price: "20"
		},
		{
			name: "Cold Coffee",
			price: "40"
		},
		{
			name: "Bourn Vita",
			price: "40"
		},
		{
			name: "Cold Bourn Vita",
			price: "40"
		},
		{
			name: "Water Bottle",
			price: "10/20"
		},
		{
			name: "Maskabun",
			price: "30"
		},
		{
			name: "Pineapple Jam",
			price: "30"
		},
		{
			name: "Mango Jam",
			price: "30"
		},
		{
			name: "Strawberry Jam",
			price: "30"
		},
		{
			name: "Mix Fruits Jam",
			price: "30"
		},
		{
			name: "TutiFruti Jam",
			price: "35"
		},
		{
			name: "Chocolate Maskabun",
			price: "40"
		},
		{
			name: "Double Chocolate Maskabun",
			price: "45"
		},
		{
			name: "Chocolate + Pineapple",
			price: "45"
		},
		{
			name: "Chocolate + Fruit Jam",
			price: "45"
		},
		{
			name: "Chocolate + Strawberry",
			price: "45"
		},
		{
			name: "Chocolate + Mango",
			price: "45"
		},
		{
			name: "Milkybar (Rabdi) + Maskabun",
			price: "45"
		},
		{
			name: "Double Milkybar",
			price: "50"
		},
		{
			name: "Milkybar + Pineapple",
			price: "45"
		},
		{
			name: "Milkybar + Fruit Jam",
			price: "45"
		},
		{
			name: "Milkybar + Strawberry",
			price: "45"
		},
		{
			name: "Mikybar + Mango",
			price: "45"
		},
		{
			name: "Choco Milky Mix",
			price: "45"
		},
		{
			name: "Double Choco Milky Mix",
			price: "50"
		},
		{
			name: "Choco + Milky Dry Fruit",
			price: "70"
		},
		{
			name: "Nutella Maskabun",
			price: "90"
		},
		{
			name: "Double Nutella",
			price: "110"
		},
		{
			name: "Nutella + Dry Fruit",
			price: "120"
		},
		{
			name: "Lotus Biscoff",
			price: "110"
		},
		{
			name: `Green Chutney + ${spicyItemsOptions}`,
			price: "40"
		},
		{
			name: `Cheese Grren + ${spicyItemsOptions}`,
			price: "50"
		},
		{
			name: "Double Cheese Chutney Maskabun",
			price: "60"
		},
		{
			name: "Tandoori Maskabun + " + spicyItemsOptions,
			price: "50"
		},
		{
			name: "Tandoori + Cheese + " + spicyItemsOptions,
			price: "60"
		},
		{
			name: "Garlic Mayo + " + spicyItemsOptions,
			price: "50"
		},
		{
			name: "Garlic Mayo + Cheese + " + spicyItemsOptions,
			price: "60"
		},
		{
			name: "Chiptole Maskabun + " + spicyItemsOptions,
			price: "50"
		},
		{
			name: "Chiptole + Cheese + " + spicyItemsOptions,
			price: "60"
		},
		{
			name: "Mint Mayonnaise Maskabun + " + spicyItemsOptions,
			price: "50"
		},
		{
			name: "Mint Mayonnaise + Cheese + " + spicyItemsOptions,
			price: "60"
		},
		{
			name: "Chiptole + Mint Mayonnaise + " + spicyItemsOptions,
			price: "50"
		},
		{
			name: "Chiptole + Mint Mayonnaise + Cheese + " + spicyItemsOptions,
			price: "60"
		},
		{
			name: "Schezwan Maskabun + " + spicyItemsOptions,
			price: "50"
		},
		{
			name: "Schezwan + Cheese + " + spicyItemsOptions,
			price: "60"
		},
		{
			name: "BBQ + " + spicyItemsOptions,
			price: "50"
		},
		{
			name: "BBQ + Cheese + " + spicyItemsOptions,
			price: "60"
		},
		{
			name: "Honey Mustard + " + spicyItemsOptions,
			price: "50"
		},
		{
			name: "Hone Mustard + Cheese + " + spicyItemsOptions,
			price: "60"
		},
		{
			name: "Sweet Onion + " + spicyItemsOptions,
			price: "50"
		},
		{
			name: "Sweet Onion + Cheese + " + spicyItemsOptions,
			price: "60"
		},
		{
			name: "Veg Mayo + " + spicyItemsOptions,
			price: "50"
		},
		{
			name: "Veg Mayo + Cheese + " + spicyItemsOptions,
			price: "60"
		},
		{
			name: "Special Spicy Maskabun",
			price: "50"
		},
		{
			name: "Special Spicy + Cheese",
			price: "60"
		},
		{
			name: "Special Spicy + Mayonnaise",
			price: "55"
		},
		{
			name: "Special Spicy + Mayonnaise + Cheese",
			price: "65"
		},
		{
			name: "Special Mayonnaise Maskabun",
			price: "90"
		},
		{
			name: "Special Maynnaise + Cheese",
			price: "100"
		},
		{
			name: "Masala Maggie",
			price: "40"
		},
		{
			name: "Masala + Butter",
			price: "50"
		},
		{
			name: "Masala + Cheese",
			price: "60"
		},
		{
			name: "Masala + Butter + Cheese",
			price: "70"
		},
		{
			name: "Veg Maggie",
			price: "60"
		},
		{
			name: "Veg Maggie + Butter",
			price: "70"
		},
		{
			name: "Veg Maggie + Cheese",
			price: "80"
		},
		{
			name: "Veg Maggie + Butter + Cheese",
			price: "90"
		},
		{
			name: "Schezwan Maggie",
			price: "60"
		},
		{
			name: "Schezwan + Butter",
			price: "70"
		},
		{
			name: "Schezwan + Cheese",
			price: "80"
		},
		{
			name: "Schezwan + Butter + Cheese",
			price: "90"
		},
		{
			name: "Peri Peri Maggie",
			price: "60"
		},
		{
			name: "Peri Peri + Butter",
			price: "70"
		},
		{
			name: "Peri Peri + Cheese",
			price: "80"
		},
		{
			name: "Peri Peri + Butter + Cheese",
			price: "90"
		},
		{
			name: "Tadka Maggie",
			price: "90"
		},
		{
			name: "Tadka + Cheese",
			price: "110"
		},
		{
			name: "Simple Hot Maskabun",
			price: "40"
		},
		{
			name: "Veg Masala Bun",
			price: "100"
		},
		{
			name: "Green Chutney + " + spicyItemsOptions,
			price: "55"
		},
		{
			name: "Cheese Green + " + spicyItemsOptions,
			price: "65"
		},
		{
			name: "Double Cheese Chutney Maskabun",
			price: "75"
		},
		{
			name: "Tandoori Maskabun + " + spicyItemsOptions,
			price: "65"
		},
		{
			name: "Tandoori + Cheese + " + spicyItemsOptions,
			price: "75"
		},
		{
			name: "Garlic Mayo + " + spicyItemsOptions,
			price: "65"
		},
		{
			name: "Garlic Mayo + Cheese + " + spicyItemsOptions,
			price: "75"
		},
		{
			name: "Chiptole Maskabun + " + spicyItemsOptions,
			price: "65"
		},
		{
			name: "Chiptole + Cheese + " + spicyItemsOptions,
			price: "75"
		},
		{
			name: "Mint Mayonnaise Maskabun + " + spicyItemsOptions,
			price: "65"
		},
		{
			name: "Mint Mayonnaise + Cheese + " + spicyItemsOptions,
			price: "75"
		},
		{
			name: "Chiptole + Mint Mayonnaise + " + spicyItemsOptions,
			price: "65"
		},
		{
			name: "Chiptole + Mint Mayonnaise + Cheese + " + spicyItemsOptions,
			price: "75"
		},
		{
			name: "Schezwan Maskabun + " + spicyItemsOptions,
			price: "65"
		},
		{
			name: "Schezwan Maskabun + Cheese + " + spicyItemsOptions,
			price: "75"
		},
		{
			name: "BBQ + " + spicyItemsOptions,
			price: "65"
		},
		{
			name: "BBQ + Cheese + " + spicyItemsOptions,
			price: "75"
		},
		{
			name: "Honey Mustard + " + spicyItemsOptions,
			price: "65"
		},
		{
			name: "Honey Mustard + Cheese + " + spicyItemsOptions,
			price: "75"
		},
		{
			name: "Sweet Onion + " + spicyItemsOptions,
			price: "65"
		},
		{
			name: "Sweet Onion + Cheese + " + spicyItemsOptions,
			price: "75"
		},
		{
			name: "Veg Mayo + " + spicyItemsOptions,
			price: "65"
		},
		{
			name: "Veg Mayo + Cheese + " + spicyItemsOptions,
			price: "75"
		},
		{
			name: "Special Spicy Maskabun",
			price: "65"
		},
		{
			name: "Special Spicy Maskabun + Cheese",
			price: "75"
		},
		{
			name: "Special Spicy Maskabun + Mayonnaise",
			price: "70"
		},
		{
			name: "Special Spicy Maskabun + Mayonnaise + Cheese",
			price: "80"
		},
		{
			name: "Special Mayonnaise Maskabun",
			price: "105"
		},
		{
			name: "Special Mayonnaise + Cheese",
			price: "115"
		}
	]

	const [searchedItems, setSearchedItems] = useState([]);
	const [backupMenuItems, setBackupMenuItems] = useState(foodItems);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (search === "") {
			setSearchedItems(backupMenuItems);
		}
		else {
			const filteredItems = backupMenuItems.filter((value) => {
				return value.name.includes(search) === true;
			});
			console.log("Printing filtered items", filteredItems);
			setSearchedItems(filteredItems)
		}
	}, [search])

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000)
	}, [])

	return (
		<Fragment>
			<main>
				{
					loading === true && <Fragment>
						<div className='loading_outer'>
							<h1 className='animate__animated animate__backInUp'>Mahadev Maskabun</h1>
							<div className="shuffling_food_items">
								<img src={Maskabun} alt="Maskabun" style={{ width: "20px" }} />
								<img src={Tea} alt="Tea" style={{ width: "20px" }} />
								<img src={Maggie} alt="Maggie" style={{ width: "20px" }} />
							</div>
						</div>
					</Fragment>
				}
				{
					loading === false &&
					<Fragment>
						<div className='header_outer animate__animated animate__flipInX'>
							<h1>Mahadev Maskabun</h1>
						</div>
						<div className='search_outer animate__animated animate__bounceIn'>
							<input
								type="search"
								value={search}
								onChange={(e) => {
									setSearch(e.target.value);
								}}
								placeholder='Quick Search...'
							/>
						</div>
						<div className='list_outer'>
							{
								searchedItems.map((value, index) => {
									return (
										<div className='card_detail animate__animated animate__fadeInUp' key={index}>
											<span className='menu_item_name'>{value.name}</span>
											<h4 className='menu_item_price'>Rs. {value.price}</h4>
										</div>
									)
								})
							}
						</div>
					</Fragment>
				}
			</main>
		</Fragment>
	)
};

export default App;