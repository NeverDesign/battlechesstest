export class Piece {
    constructor(data) {
        this.updatePosition = (x, y, row, col) => {
            console.log('Piece: updatePosition:');
            this.state = ({
                col: col,
                row: row,
                x: x,
                y: y
            });
        };
        this.getAvailableMoves = () => {
            console.log('Piece: getAvailableMoves:');
            let resultTiles = [];
            return resultTiles;
        };
        console.log('Piece: constructor:', data);
        this.id = data.id;
        this.team = data.team;
        this.type = data.type;
        this.state = {
            col: data.col,
            row: data.row,
            x: data.x,
            y: data.y,
        };
        this.columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
    }
}
//# sourceMappingURL=Piece.js.map