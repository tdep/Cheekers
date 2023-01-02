class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :number
      t.integer :number_pieces

      t.timestamps
    end
  end
end
