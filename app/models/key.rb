class Key < ActiveRecord::Base
  belongs_to :keyboard
  validates :frequency, :wave, :panner, :delay, :note_filter, :volume, :key_code, :presence => true
end