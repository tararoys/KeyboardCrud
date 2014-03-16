describe "Tara Learning Stuff" do 
    context "Activerecord model attributes" do 
      it "Does the new command let me add fields that are not listed in the migration? Answer: no." do 
        expect{Keyboard.new(lala:"the keyboard")}.to raise_error(ActiveRecord::UnknownAttributeError)
      end
    end
end