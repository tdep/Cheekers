# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

tile1 = Tile.create(occupied: false, x_coordinate: 1, y_coordinate: 1)
tile2 = Tile.create(occupied: true, x_coordinate: 2, y_coordinate: 1)
tile3 = Tile.create(occupied: false, x_coordinate: 3, y_coordinate: 1)
tile4 = Tile.create(occupied: true, x_coordinate: 4, y_coordinate: 1)


piece1 = Piece.create(active: true, king: false, x_coordinate: 2, y_coordinate: 1)
piece2 = Piece.create(active: true, king: false, x_coordinate: 4, y_coordinate: 1)

player1 = Player.create(name: 'Jorb', number: 1, number_pieces: 1)
player2 = Player.create(name: 'Plorp', number: 2, number_pieces: 1)