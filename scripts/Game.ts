// Data
import GameData, { PieceData, TileData } from "../data/data.js";

// Imports
import { Tile } from "./Tile.js";
import { Piece } from "./Piece.js";
import { Rook } from "./Rook.js";
import { Bishop } from "./Bishop.js";

/**
 * @class Game
 */
export default class Game {
    data: object;
    boardSize: number;
    gridSize: number;
    tiles: Tile[];
    tilesData: object[];
    pieces: Piece[];
    piecesData: object[];

    constructor(){
        this.tilesData = GameData.tiles;
        this.piecesData = GameData.pieces;
    }

    generateTiles = () => {
        console.log('Game: generateTiles: ');
        this.tiles = this.tilesData.map((tileData: TileData) => {
            return new Tile( tileData );
        });
    };

    generatePieces = () => {
        console.log('Game: generatePieces: ');
        this.pieces = this.piecesData.map((pieceData: PieceData) => {
            this.updateTileOccupants( pieceData.id, pieceData.col + pieceData.row);

            let piece: any = null
            switch (pieceData.type) {
                case 'rook':
                    piece = new Rook( pieceData );
                    break;
                case 'bishop':
                    piece = new Bishop( pieceData );
                    break;
                default:
                    piece = new Piece( pieceData );
            }
            return piece;
        });
    };

    updateTileOccupants = ( pieceId: number, tileRef: string ) => {
        console.log('Game: updateTileOccupants: ');
        let tileOptions = null;
        if ( pieceId ){
            tileOptions = { occupied: true, occupant: pieceId }
        }
        else {
            tileOptions = { occupied: false, occupant: null }
        }

        this.updateTileData(tileRef, tileOptions);
    };

    updateTileData = ( tileRef, options ) => {
        console.log('Game: updateTileData: ');
        this.tilesData.map((data: TileData) => {
            if ( tileRef === data.col + data.row ){
                Object.assign( data, options );
            }
        });

        // TODO: Update the generated tiles array using the latest data - either remove this or the generate tiles in the app function
        this.generateTiles(); 
    };

    exportGameData = () => {
        console.log('Game: exportGameData: ');
        console.log('Game: Tiles: ', this.tilesData);
        console.log('Game: Pieces: ', this.piecesData);
    }

    // TEST FUNCTIONS
    testMove = () => {
        this.pieces.forEach((piece: Piece) => {
            if ( piece.id === 2 ){
                let allowedMoves = piece.getAvailableMoves();

                this.tiles.map((tile: Tile) => {
                    let currentTile = tile.col + tile.row;
                    allowedMoves.find(( tileLabel ) => {
                        if ( tileLabel === currentTile ){
                            tile.state.isInteractive = true;
                        }
                    });

                    // console.log('tile: ', tile.col + tile.row, tile.state.occupied, tile.state.occupant, tile.state.isInteractive );
                });
                
            }
        });
    }
}