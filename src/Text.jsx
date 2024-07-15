function Text({ children, as: As = "span" }) {
	return (
		<>
			<As>{children}</As>
		</>
	);
}

export default Text;
