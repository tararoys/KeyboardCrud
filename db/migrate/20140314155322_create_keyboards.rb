class CreateKeyboards < ActiveRecord::Migration
  def change
    create_table :keyboards do |t|
      t.integer :user_id
      t.string :name

      t.timestamps
    end
  end
end