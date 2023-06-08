export class Piece {
    id: number;
    team: '';
    type: string;
    state: {
        col: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
        row: '1' |  '2' | '3' | '4' | '5' | '6' | '7' | '8';
        x: number;
        y: number;
    };
    columns: ['a','b', 'c', 'd', 'e', 'f', 'g', 'h'];
    rows: ['1', '2', '3', '4', '5', '6', '7', '8'];

    constructor( data:any ){
        console.log('Piece: constructor:', data);
        this.id = data.id;
        this.team = data.team;
        this.type = data.type;
        this.state = {
            col: data.col,
            row: data.row,
            x: data.x,
            y: data.y,
        }

        this.columns = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
    }

    updatePosition = ( x:number, y: number, row:any, col:any ) => {
        console.log('Piece: updatePosition:');
        this.state = ({
            col: col,
            row: row,
            x: x,
            y: y
        });
    };

    getAvailableMoves = ():string[] => {
        console.log('Piece: getAvailableMoves:');
        let resultTiles = [];
        return resultTiles;
    }
}