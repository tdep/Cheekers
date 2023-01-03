class Tile < ApplicationRecord
  has_many :pieces
  has_many :players, through: :pieces
end
