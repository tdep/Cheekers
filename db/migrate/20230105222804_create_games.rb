class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.integer :player_one_id
      t.integer :player_two_id
      t.boolean :completed

      t.timestamps
    end
  end
end
