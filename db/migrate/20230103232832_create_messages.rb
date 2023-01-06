class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.text :message
      t.integer :player_id
      t.string :name
      t.timestamps
    end
  end
end
