import { Piece } from "./Piece.js";
export class Bishop extends Piece {
    constructor(data) {
        console.log('Rook: constructor:', data);
        super(data);
        this.getAvailableMoves = () => {
            console.log('Bishop: getAvailableMoves:', this.state.row, this.state.col);
            let resultTiles = [];
            let colIndex = this.columns.indexOf(this.state.col) + 1;
            let rowIndex = this.rows.indexOf(this.state.row) + 1;
            let distance = Math.max(8 - colIndex, 8 - rowIndex, colIndex - 1, rowIndex - 1);
            for (let i = 0; i < distance; i++) {
                if (colIndex + i <= this.columns.length) {
                    if (colIndex + i <= this.columns.length) {
                        if (rowIndex + i <= this.columns.length) {
                            if (resultTiles.indexOf(this.columns[colIndex + i] + this.rows[rowIndex + i]) === -1) {
                                console.log('move type 1: ', colIndex + i, rowIndex + i, this.columns[colIndex + i] + this.rows[rowIndex + i]);
                                resultTiles.push(this.columns[colIndex + i] + this.rows[rowIndex + i]);
                            }
                        }
                        if (rowIndex - i >= 1) {
                            if (resultTiles.indexOf(this.columns[colIndex + i] + this.rows[rowIndex - i]) === -1) {
                                console.log('move type 2: ', this.columns[colIndex + i] + this.rows[rowIndex - i]);
                                resultTiles.push(this.columns[colIndex + i] + this.rows[rowIndex - i]);
                            }
                        }
                    }
                    if (colIndex - i >= 1) {
                        if (rowIndex - i >= 1) {
                            if (resultTiles.indexOf(this.columns[colIndex - i] + this.rows[rowIndex - i]) === -1) {
                                console.log('move type 3: ', this.columns[colIndex - i] + this.rows[rowIndex - i]);
                                resultTiles.push(this.columns[colIndex - i] + this.rows[rowIndex - i]);
                            }
                        }
                        if (rowIndex + i <= this.rows.length) {
                            if (resultTiles.indexOf(this.columns[colIndex - i] + this.rows[rowIndex + i]) === -1) {
                                console.log('move type 4: ', this.columns[colIndex - i] + this.rows[rowIndex + i]);
                                resultTiles.push(this.columns[colIndex - i] + this.rows[rowIndex + i]);
                            }
                        }
                    }
                }
            }
            console.log('Bishop: Result tiles: ', resultTiles);
            return resultTiles;
        };
    }
    ;
}
//# sourceMappingURL=Bishop.js.map