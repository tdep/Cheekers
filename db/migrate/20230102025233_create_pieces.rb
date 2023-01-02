class CreatePieces < ActiveRecord::Migration[6.1]
  def change
    create_table :pieces do |t|
      t.boolean :active, default: true
      t.boolean :king, default: false
      t.string :tile_id
      t.string :player_id
      t.integer :x_coordinate
      t.integer :y_coordinate

      t.timestamps
    end
  end
end
