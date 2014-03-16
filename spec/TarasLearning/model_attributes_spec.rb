describe "Tara Learning Stuff" do 
    context "Activerecord model attributes" do 
      it "Does the new command let me add fields that are not listed in the migration? Answer: no." do 
        expect{Keyboard.new(lala:"the keyboard")}.to raise_error(ActiveRecord::UnknownAttributeError)
      end

      it "Does the new command create a keyboard id?"

      it "Can objects exist without being inserted into the database?"

    end
end