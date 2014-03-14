class Key < ActiveRecord::Base
  belongs_to :keyboard
  validates :oscillator, :frequency, :wave, :panner, :delay, :filter, :volume, :key_code, presence => true
end