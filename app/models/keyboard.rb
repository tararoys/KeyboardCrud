class Keyboard < ActiveRecord::Base
  belongs_to :user
  has_many :keys
  validates :name, :presence => true
end