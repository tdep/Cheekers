# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

x_coord = 1
y_coord = 1

#Tiles
64.times do
  Tile.create(x_coordinate: x_coord, y_coordinate: y_coord)
  if x_coord < 8
    x_coord += 1
  else 
    x_coord = 1
    y_coord += 1
  end
end


#Players
# player_id = player.id
player1 = Player.create(name: 'Blorp', number: 1)
player2 = Player.create(name: 'Goorb', number: 2)

#Pieces

tile_id = 1
player_id = 1


Piece.create(tile_id: 2, player_id: 2)
Piece.create(tile_id: 9, player_id: 2)
Piece.create(tile_id: 11, player_id: 2)
Piece.create(tile_id: 18, player_id: 2)
Piece.create(tile_id: 25, player_id: 2)
Piece.create(tile_id: 27, player_id: 2)
Piece.create(tile_id: 34, player_id: 2)
Piece.create(tile_id: 41, player_id: 2)
Piece.create(tile_id: 43, player_id: 2)
Piece.create(tile_id: 50, player_id: 2)
Piece.create(tile_id: 57, player_id: 2)
Piece.create(tile_id: 59, player_id: 2)

Piece.create(tile_id: 6, player_id: 1)
Piece.create(tile_id: 8, player_id: 1)
Piece.create(tile_id: 15, player_id: 1)
Piece.create(tile_id: 22, player_id: 1)
Piece.create(tile_id: 24, player_id: 1)
Piece.create(tile_id: 31, player_id: 1)
Piece.create(tile_id: 38, player_id: 1)
Piece.create(tile_id: 40, player_id: 1)
Piece.create(tile_id: 47, player_id: 1)
Piece.create(tile_id: 54, player_id: 1)
Piece.create(tile_id: 56, player_id: 1)
Piece.create(tile_id: 63, player_id: 1)



