require 'spec_helper'

describe Keyboard do

  context "to have the following attributes" do
    it "has a name" do
      keyboard = Keyboard.new(name:"the keyboard")
      expect(keyboard.name).to eq("the keyboard")
    end



  end
end
