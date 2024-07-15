import { Fragment, useState } from "react";
import { mockData } from "./mockdata";
import Details from "./Details";
import Card from "./Card";
import Cart from "./Cart";

function PhoneShop() {
	const [products, setProducts] = useState([]);
	const [phoneDetail, setPhoneDetail] = useState(mockData[0]);

	const transformProduct = (item) => {
		return {
			id: item.maSP,
			name: item.tenSP,
			price: item.giaBan,
			amount: 1,
		};
	};

	const handleChangePhoneDetail = (phone) => {
		setPhoneDetail(phone);
	};

	const handleAddProduct = (product) => {
		product = transformProduct(product);

		const newProduct = [...products];

		const item = newProduct.find((i) => i.id === product.id);

		if (item) {
			item.amount += 1;
		} else {
			newProduct.push(product);
		}

		setProducts(newProduct);
	};

	const handleDelete = (id) => {
		const newProduct = products.filter((product) => product.id !== id);

		setProducts(newProduct);
	};

	const handleIncrease = (id) => {
		const product = products.find((product) => product.id === id);

		if (product) {
			product.amount += 1;
		}

		setProducts([...products]);
	};

	const handleDecrease = (id) => {
		const product = products.find((product) => product.id === id);

		if (product) {
			if (product.amount === 1) {
				handleDelete(id);
				return;
			}
			product.amount -= 1;
		}

		setProducts([...products]);
	};

	return (
		<>
			<div className="container">
				<Cart
					onIncrease={handleIncrease}
					onDecrease={handleDecrease}
					products={products}
					onDelete={handleDelete}
				/>
			</div>

			<div
				style={{
					display: "flex",
					gap: 30,
					justifyContent: "center",
				}}
			>
				{mockData.map((item) => {
					return (
						<Fragment key={item.maSP}>
							<Card
								name={item.tenSP}
								price={item.giaBan}
								image={item.hinhAnh}
								onChangePhoneDetail={() => handleChangePhoneDetail(item)}
								onAddProduct={() => {
									handleAddProduct(item);
								}}
							/>
						</Fragment>
					);
				})}
			</div>

			<div>
				<Details
					name={phoneDetail.tenSP}
					img={phoneDetail.hinhAnh}
					manHinh={phoneDetail.manHinh}
					cameraSau={phoneDetail.cameraSau}
					cameraTruoc={phoneDetail.cameraTruoc}
					heDieuHanh={phoneDetail.heDieuHanh}
					ram={phoneDetail.ram}
					rom={phoneDetail.rom}
				/>
			</div>
		</>
	);
}

export default PhoneShop;
