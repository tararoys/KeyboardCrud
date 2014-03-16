class CreateKeys < ActiveRecord::Migration
  def change
    create_table :keys do |t|
      t.integer :keyboard_id
      t.float   :frequency
      t.string  :wave
      t.integer :panner
      t.integer :delay
      t.integer :note_filter
      t.float   :volume
      t.integer :key_code

      t.timestamps
    end
  end
end