# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tile.create(x_coordinate: 1, y_coordinate: 1)
Tile.create(x_coordinate: 2, y_coordinate: 1)
Tile.create(x_coordinate: 3, y_coordinate: 1)
Tile.create(x_coordinate: 4, y_coordinate: 1)
Tile.create(x_coordinate: 1, y_coordinate: 2)
Tile.create(x_coordinate: 2, y_coordinate: 2)
Tile.create(x_coordinate: 3, y_coordinate: 2)
Tile.create(x_coordinate: 4, y_coordinate: 2)
Tile.create(x_coordinate: 1, y_coordinate: 3)
Tile.create(x_coordinate: 2, y_coordinate: 3)
Tile.create(x_coordinate: 3, y_coordinate: 3)
Tile.create(x_coordinate: 4, y_coordinate: 3)
Tile.create(x_coordinate: 1, y_coordinate: 4)
Tile.create(x_coordinate: 2, y_coordinate: 4)
Tile.create(x_coordinate: 3, y_coordinate: 4)
Tile.create(x_coordinate: 4, y_coordinate: 4)




# player_id = player.id
player1 = Player.create(name: 'Blorp', number: 1)
player2 = Player.create(name: 'Goorb', number: 2)


Piece.create(tile_id: 2, player_id: 1)
Piece.create(tile_id: 4, player_id: 2)

