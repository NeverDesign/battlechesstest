import { Piece } from "./Piece.js";
export class Rook extends Piece {
    constructor(data) {
        console.log('Rook: constructor:', data);
        super(data);
        this.getAvailableMoves = () => {
            console.log('Rook: getAvailableMoves:', this.state.row, this.state.col);
            let resultTiles = [];
            let xDistance = 8;
            let yDistance = 8;
            let xBiDirectional = true;
            let yBiDrectional = true;
            this.columns.forEach((column, index) => {
                if (column === this.state.col) {
                    this.rows.forEach((row) => {
                        if (row !== '' + this.state.row) {
                            resultTiles.push(column + row);
                        }
                    });
                }
                else {
                    resultTiles.push(column + this.state.row);
                }
            });
            return resultTiles;
        };
    }
    ;
}
//# sourceMappingURL=Rook.js.map