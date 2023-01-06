class Game < ApplicationRecord
  has_many :players
  has_many :tiles
  has_many :pieces, through: :players

  

end
