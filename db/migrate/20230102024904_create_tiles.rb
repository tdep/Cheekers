class CreateTiles < ActiveRecord::Migration[6.1]
  def change
    create_table :tiles do |t|
      t.boolean :occupied
      t.integer :x_coordinate
      t.integer :y_coordinate

      t.timestamps
    end
  end
end