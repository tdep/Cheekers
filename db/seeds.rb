# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

tile1 = Tile.create(occupied: false, x_coordinate: 1, y_coordinate: 1)
tile2 = Tile.create(occupied: false, x_coordinate: 2, y_coordinate: 1)
tile3 = Tile.create(occupied: false, x_coordinate: 3, y_coordinate: 1)
tile4 = Tile.create(occupied: false, x_coordinate: 4, y_coordinate: 1)
tile5 = Tile.create(occupied: false, x_coordinate: 1, y_coordinate: 2)
tile6 = Tile.create(occupied: false, x_coordinate: 2, y_coordinate: 2)
tile7 = Tile.create(occupied: false, x_coordinate: 3, y_coordinate: 2)
tile8 = Tile.create(occupied: false, x_coordinate: 4, y_coordinate: 2)
tile9 = Tile.create(occupied: false, x_coordinate: 1, y_coordinate: 3)
tile10 = Tile.create(occupied: false, x_coordinate: 2, y_coordinate: 3)
tile11 = Tile.create(occupied: false, x_coordinate: 3, y_coordinate: 3)
tile12 = Tile.create(occupied: false, x_coordinate: 4, y_coordinate: 3)
tile13 = Tile.create(occupied: false, x_coordinate: 1, y_coordinate: 4)
tile14 = Tile.create(occupied: false, x_coordinate: 2, y_coordinate: 4)
tile15 = Tile.create(occupied: false, x_coordinate: 3, y_coordinate: 4)
tile16 = Tile.create(occupied: false, x_coordinate: 4, y_coordinate: 4)


Player.create(name: 'Jorb', number: 1, number_pieces: 1)
Player.create(name: 'Plorp', number: 2, number_pieces: 1)



Piece.create(tile_id: 2, player_id: 1)
Piece.create(tile_id: 4, player_id: 2)