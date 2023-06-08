export class Tile {
    isDark: boolean = false;
    id: number;
    col: string;
    row: number;
    state: {
        active: boolean,
        occupied: boolean,
        occupant: any,
        isInteractive: boolean
    }

    constructor( data:any ){
        // console.log('Tile: constructor:', data);
        this.id = data.id;
        this.col = data.col;
        this.row = data.row;
        this.state = {
            active: false,
            occupied: data.occupied,
            occupant: data.occupant,
            isInteractive: false
        }
        this.isDark = data.isDark;
    }
}