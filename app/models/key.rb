class Key < ActiveRecord::Base
  belongs_to :keyboard
  validates :frequency, :wave, :panner, :delay, :note_filter, :volume, :key_code, :presence => true

  validates :frequency, numericality: { greater_than_or_equal_to: 50.00, less_than_or_equal_to: 5000.00  }
  validates :wave, inclusion: { in: [0, 1, 2, 3], message: "%{value} is not a valid size" }
  validates :panner, numericality: { greater_than_or_equal_to: -3.00, less_than_or_equal_to: 3.00  }
  validates :delay, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 1 }
  validates :note_filter, numericality: { greater_than_or_equal_to: -4800, less_than_or_equal_to: 4800 }
  validates :volume, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 1 }

end