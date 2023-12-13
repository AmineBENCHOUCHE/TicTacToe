//import { useState } from "react";

const GameBoard = ({ onSelectSquare, board }) => {
	// const [gameBoard, setGameBoard] = useState(initialGameboard);
	// const handleSelectSquare = (rowIndex, colIndex, activePlayerSymbol) => {
	// 	setGameBoard((prevGameBoard) => {
	// 		const updateBoard = [
	// 			...prevGameBoard.map((innerArray) => [...innerArray]),
	// 		];
	// 		updateBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updateBoard;
	// 	});
	// 	onSelectSquare();
	// };

	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									disabled={playerSymbol !== null}
									onClick={() => onSelectSquare(rowIndex, colIndex)}
									// onClick={() =>
									// 	handleSelectSquare(rowIndex, colIndex, activePlayerSymbol)
									// }
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
};
export default GameBoard;
