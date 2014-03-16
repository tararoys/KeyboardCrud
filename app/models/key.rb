class Key < ActiveRecord::Base
  belongs_to :keyboard
  validates :frequency, :wave, :panner, :delay, :note_filter, :volume, :key_code, :presence => true

  validates :frequency, numericality: { greater_than_or_equal_to: 50.00, less_than_or_equal_to: 5000.00  }
end