class CreatePieces < ActiveRecord::Migration[6.1]
  def change
    create_table :pieces do |t|
      t.boolean :active
      t.boolean :king
      t.integer :tile_id
      t.string :player_id

      t.timestamps
    end
  end
end
