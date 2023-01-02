class Piece < ApplicationRecord
  belongs_to :player
  belongs_to :tile
end
