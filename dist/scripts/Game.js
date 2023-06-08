import GameData from "../data/data.js";
import { Tile } from "./Tile.js";
import { Piece } from "./Piece.js";
import { Rook } from "./Rook.js";
import { Bishop } from "./Bishop.js";
export default class Game {
    constructor() {
        this.generateTiles = () => {
            console.log('Game: generateTiles: ');
            this.tiles = this.tilesData.map((tileData) => {
                return new Tile(tileData);
            });
        };
        this.generatePieces = () => {
            console.log('Game: generatePieces: ');
            this.pieces = this.piecesData.map((pieceData) => {
                this.updateTileOccupants(pieceData.id, pieceData.col + pieceData.row);
                let piece = null;
                switch (pieceData.type) {
                    case 'rook':
                        piece = new Rook(pieceData);
                        break;
                    case 'bishop':
                        piece = new Bishop(pieceData);
                        break;
                    default:
                        piece = new Piece(pieceData);
                }
                return piece;
            });
        };
        this.updateTileOccupants = (pieceId, tileRef) => {
            console.log('Game: updateTileOccupants: ');
            let tileOptions = null;
            if (pieceId) {
                tileOptions = { occupied: true, occupant: pieceId };
            }
            else {
                tileOptions = { occupied: false, occupant: null };
            }
            this.updateTileData(tileRef, tileOptions);
        };
        this.updateTileData = (tileRef, options) => {
            console.log('Game: updateTileData: ');
            this.tilesData.map((data) => {
                if (tileRef === data.col + data.row) {
                    Object.assign(data, options);
                }
            });
            this.generateTiles();
        };
        this.exportGameData = () => {
            console.log('Game: exportGameData: ');
            console.log('Game: Tiles: ', this.tilesData);
            console.log('Game: Pieces: ', this.piecesData);
        };
        this.testMove = () => {
            this.pieces.forEach((piece) => {
                if (piece.id === 2) {
                    let allowedMoves = piece.getAvailableMoves();
                    this.tiles.map((tile) => {
                        let currentTile = tile.col + tile.row;
                        allowedMoves.find((tileLabel) => {
                            if (tileLabel === currentTile) {
                                tile.state.isInteractive = true;
                            }
                        });
                    });
                }
            });
        };
        this.tilesData = GameData.tiles;
        this.piecesData = GameData.pieces;
    }
}
//# sourceMappingURL=Game.js.map