class CreateKeys < ActiveRecord::Migration
  def change
    create_table :keys do |t|
      t.integer :keyboard_id
      t.integer :oscillator
      t.string :frequency
      t.integer :wave
      t.integer :panner
      t.integer :delay
      t.integer :filter
      t.integer :volume
      t.integer :key_code

      t.timestamps
    end
  end
end