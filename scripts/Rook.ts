import { Piece } from "./Piece.js";

export class Rook extends Piece {
    constructor( data: any ){
        console.log('Rook: constructor:', data);
        super( data );
    };

    getAvailableMoves = ():string[] => {
        console.log('Rook: getAvailableMoves:', this.state.row, this.state.col);
        let resultTiles = [];
        let xDistance = 8;
        let yDistance = 8;
        let xBiDirectional = true;
        let yBiDrectional = true;

        this.columns.forEach(( column: string, index: number ) => {
            if ( column === this.state.col ){
                this.rows.forEach(( row: string ) => {
                    if ( row !== '' + this.state.row ){
                        resultTiles.push(column + row);
                    }
                }); 
            }
            else {
                resultTiles.push(column+this.state.row);
            }
        });

        return resultTiles;
    };
}