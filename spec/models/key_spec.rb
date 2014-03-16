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

    it "has a panner" do 
      key = Key.new(panner: -20)
      expect(key.panner).to eq ( -20 )
    end 

     it "has a delay" do 
      key = Key.new(delay: 3)
      expect(key.delay).to eq ( 3 )
    end 

    it "need to find out if the delay is in seconds or in milliseconds"

    it "has a node_filter" do 
      key = Key.new(note_filter: 10)
      expect(key.note_filter).to eq ( 10 )
    end

    it "need to find out what a note_filter is and why it is stored as an integer"

  end
end

