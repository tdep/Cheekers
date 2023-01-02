class Player < ApplicationRecord
  has_many :pieces
  has_many :tiles
end
