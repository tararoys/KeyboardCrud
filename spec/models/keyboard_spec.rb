require 'spec_helper'

describe Keyboard do

  context "to have the following attributes" do
    it "has a name" do
      keyboard = Keyboard.new(name:"the keyboard")
      expect(keyboard.name).to eq("the keyboard")
    end

    it "has a user_id" do 
      keyboard = Keyboard.new(user_id: 1)
      expect(keyboard.user_id).to eq(1)
    end
  end
end
