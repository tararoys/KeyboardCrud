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

    it "has a waveform that is a string" do
      key = Key.new(wave: "0")
      expect(key.wave).to eq ("0")
    end

    it "need to decide if we want the wave to be a string or an integer"
  end
end

