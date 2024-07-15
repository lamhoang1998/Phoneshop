import css from "./Card.module.css";
import Text from "./Text";

function Card({ name, price, image, id, onChangePhoneDetail, onAddProduct }) {
	return (
		<>
			<div className={css.card}>
				<div className={css["card-img"]}>
					<img src={image} />
				</div>

				<div className={css["card-content"]}>
					<Text as={"h2"}>{name}</Text>

					<Text as="p">{price}$</Text>

					<div className={css["card-footer"]}>
						<button onClick={onChangePhoneDetail} className="btn btn-dark">
							Xem chi tiết
						</button>

						<button onClick={onAddProduct} className="btn btn-dark">
							Thêm vào giỏ hàng
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
