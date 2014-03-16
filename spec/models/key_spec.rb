require 'spec_helper'

describe Key do

  context "to have the following attributes" do
    it "has a keyboard Id and belongs to a keyboard" do
      key = Key.new(keyboard_id: 1)
      expect(key.keyboard_id).to eq(1)
    end
  end
end

