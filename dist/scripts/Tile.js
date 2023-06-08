export class Tile {
    constructor(data) {
        this.isDark = false;
        this.id = data.id;
        this.col = data.col;
        this.row = data.row;
        this.state = {
            active: false,
            occupied: data.occupied,
            occupant: data.occupant,
            isInteractive: false
        };
        this.isDark = data.isDark;
    }
}
//# sourceMappingURL=Tile.js.map