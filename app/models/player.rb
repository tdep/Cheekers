class Player < ApplicationRecord
  has_many :messages
  has_many :pieces
end
