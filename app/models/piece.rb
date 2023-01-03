class Piece < ApplicationRecord
  belongs_to :tile
  belongs_to :player
end
