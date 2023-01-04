class CreatePieces < ActiveRecord::Migration[6.1]
  def change
    create_table :pieces do |t|
      t.boolean :active, default: true
      t.boolean :king, default: false
      t.boolean :selected, default: false
      t.integer :tile_id
      t.string :player_id

      t.timestamps
    end
  end
end
