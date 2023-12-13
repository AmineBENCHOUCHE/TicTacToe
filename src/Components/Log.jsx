const Log = ({ turns }) => {
	return (
		<ol id="log">
			{turns.map(({ player, square }, index) => (
				<div key={`${square.row}, ${square.col}`}>
					<li>
						{player} selected {square.row}, {square.col}
					</li>
				</div>
			))}
		</ol>
	);
};
export default Log;
