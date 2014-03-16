require 'spec_helper'

describe Key do


  context "to have the following attributes" do
    it "has a keyboard Id and belongs to a keyboard" do
      key = Key.new(keyboard_id: 1)
      expect(key.keyboard_id).to eq(1)
    end

    it "has a frequency that is a float" do
      key = Key.new(frequency: 1000.22)
      expect(key.frequency).to eq(1000.22)
    end
  end
end

