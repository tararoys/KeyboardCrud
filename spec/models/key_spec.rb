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

    it "has a waveform that is an integer" do
      key = Key.new(wave: 0)
      expect(key.wave).to eq(0)
    end

    it "need to decide if we want the wave to be a string or an integer"

    it "has a panner" do 
      key = Key.new(panner: -20)
      expect(key.panner).to eq ( -20 )
    end 

     it "has a delay" do 
      key = Key.new(delay: 3.0)
      expect(key.delay).to eq ( 3.0 )
    end 

    it "need to find out if the delay is in seconds or in milliseconds"

    it "has a node_filter" do 
      key = Key.new(note_filter: -4600.000)
      expect(key.note_filter).to eq ( -4600.000 )
    end

    it "need to find out what a note_filter is and why it is stored as an integer"

    it "has a volume" do 
      key = Key.new(volume: 0.5)
      expect(key.volume).to eq ( 0.5 )
    end

    it "has a keycode" do 
      key = Key.new(key_code: 32)
      expect(key.key_code).to eq ( 32 )
    end
  end

  context "validations" do
   it "test that frequency, wave, panner, delay, note_filter, volume, and keycode are is present. TEST ALL THE THINGS!" do 
      key = Key.create();
      expect(key.errors[:frequency][0]).to eq("can't be blank");
      expect(key.errors[:wave][0]).to eq("can't be blank");
      expect(key.errors[:panner][0]).to eq("can't be blank");
      expect(key.errors[:delay][0]).to eq("can't be blank");
      expect(key.errors[:note_filter][0]).to eq("can't be blank");
      expect(key.errors[:volume][0]).to eq("can't be blank");
      expect(key.errors[:key_code][0]).to eq("can't be blank");
    end 

    it "frequency is a floating point number between 50.00 and 5000.00" do 
      #This is approximately the range of notes on a piano.
      middle_c = Key.create(frequency: 261.626, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: 62)
      earsplitting = Key.create(frequency: 5200.00, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: 63)
      too_low = Key.create(frequency: 0, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: 64)
      expect(middle_c.valid?).to eq(true)
      expect(earsplitting.valid?).to eq(false)
      expect(too_low.valid?).to eq(false)
    end 

    it "wave is an integer between 0 and 4 inclusive" do 
      sine = Key.create(frequency: 261.626, wave: 0, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: 62)
      out_of_range_high = Key.create(frequency: 5200.00, wave: 5, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: 63)
      out_of_range_low = Key.create(frequency: 261.626, wave: -1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: 62)  
      float_is_wrong = Key.create(frequency: 5200.00, wave: 1.5, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: 63)
      string_is_wrong = Key.create(frequency: 5200.00, wave: "0", panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: 63)
      
      expect(sine.valid?).to eq(true);
      expect(out_of_range_high.valid?).to eq(false);
      expect(out_of_range_low.valid?).to eq(false);
      expect(float_is_wrong.valid?).to eq(false);
      expect(string_is_wrong.valid?).to eq(false);
    end

    it "panner is a float between -3 and 3" do
      left_pan           = Key.create(frequency: 261.626, wave: 1, panner: -3.0,  delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: 62)
      sorta_left_pan     = Key.create(frequency: 4000.00, wave: 1, panner: -2.29, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: 63)
      right_pan          = Key.create(frequency: 60,       wave: 1, panner:  3.0 ,delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: 64)
      left_out_of_range  = Key.create(frequency: 4000.00, wave: 1, panner: -5.29, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: 63)
      right_out_of_range = Key.create(frequency: 60,       wave: 1, panner:  5,    delay:0.1 , note_filter: -1000.00, volume: 0.5, key_code: 64)

      expect(left_pan.valid?).to eq(true)         
      expect(sorta_left_pan.valid?).to eq(true)    
      expect(right_pan.valid?).to eq(true)         
      expect(left_out_of_range.valid?).to eq(false) 
      expect(right_out_of_range.valid?).to eq(false)
     
    end

    it "delay is a float between 0 and 1" do 
      middle_c = Key.create(frequency: 261.626,  wave: 0, panner: 0, delay:    0, note_filter: 0, volume: 0.5, key_code: 15)
      c_sharp  = Key.create(frequency: 277.183,  wave: 0, panner: 0, delay:    1, note_filter: 0, volume: 0.5, key_code: 16)
      middle_d = Key.create(frequency: 293.665,  wave: 0, panner: 0, delay:  0.5, note_filter: 0, volume: 0.5, key_code: 17)
      d_sharp  = Key.create(frequency: 311.127,  wave: 0, panner: 0, delay:  1.1, note_filter: 0, volume: 0.5, key_code: 18)
      middle_e = Key.create(frequency: 329.628,  wave: 0, panner: 0, delay: -0.1, note_filter: 0, volume: 0.5, key_code: 19)

      expect(middle_c.valid?).to eq(true)
      expect(c_sharp.valid? ).to eq(true)
      expect(middle_d.valid?).to eq(true)
      expect(d_sharp.valid? ).to eq(false)
      expect(middle_e.valid?).to eq(false)
    end

    it "note_filter is a floating pint number between -4800 and 4800" do 
      high_edge_case    = Key.create(frequency: 261.626,  wave: 0, panner: 0, delay:    0, note_filter:   4800,  volume: 0.5, key_code: 15)
      low_edge_case     = Key.create(frequency: 277.183,  wave: 0, panner: 0, delay:    1, note_filter:  -4800,  volume: 0.5, key_code: 16)
      midrange          = Key.create(frequency: 293.665,  wave: 0, panner: 0, delay:  0.5, note_filter:    0.5,  volume: 0.5, key_code: 17)
      out_of_range_high = Key.create(frequency: 261.626,  wave: 0, panner: 0, delay:    0, note_filter:   4800.1, volume: 0.5, key_code: 15)
      out_of_range_low  = Key.create(frequency: 277.183,  wave: 0, panner: 0, delay:    1, note_filter:  -4800.1, volume: 0.5, key_code: 16)

      expect(high_edge_case.valid?).to eq(true)
      expect(low_edge_case.valid? ).to eq(true)
      expect(midrange.valid?).to eq(true)
      expect(out_of_range_high.valid? ).to eq(false)
      expect(out_of_range_low.valid?).to eq(false)
    end

    it "volume is a floating point number between 0 and 1" do 
      high_edge_case    = Key.create(frequency: 261.626,  wave: 0, panner: 0, delay:    0, note_filter:     0,  volume:    0, key_code: 15)
      low_edge_case     = Key.create(frequency: 277.183,  wave: 0, panner: 0, delay:    1, note_filter:     0,  volume:    1, key_code: 16)
      midrange          = Key.create(frequency: 293.665,  wave: 0, panner: 0, delay:  0.5, note_filter:     0,  volume:  0.5, key_code: 17)
      out_of_range_high = Key.create(frequency: 261.626,  wave: 0, panner: 0, delay:    0, note_filter:     0,  volume: -0.1, key_code: 15)
      out_of_range_low  = Key.create(frequency: 277.183,  wave: 0, panner: 0, delay:    1, note_filter:     0,  volume:  1.1, key_code: 16)

      expect(high_edge_case.valid?).to eq(true)
      expect(low_edge_case.valid? ).to eq(true)
      expect(midrange.valid?).to eq(true)
      expect(out_of_range_high.valid? ).to eq(false)
      expect(out_of_range_low.valid?).to eq(false)
    end


  end
end


