describe "Tara Learning Stuff" do 
    context "Activerecord model attributes" do 
      it "Does the new command let me add fields that are not listed in the migration? Answer: no." do 
        expect{Keyboard.new(lala:"the keyboard")}.to raise_error(ActiveRecord::UnknownAttributeError)
      end

      it "Does the new command create a keyboard id?"

      it "Can objects exist without being inserted into the database?"

      it "Why does the new command let objects exist without being inserted into the database?"

      it "how do I test if an attribute is a float?"
      #http://stackoverflow.com/questions/1034418/determine-if-a-string-is-a-valid-float-value  is not very useful
    end

    context "activerecord validations" do
      it "Why does create! raise an error when attempting to insert invalid data into the database?" do
        expect{Keyboard.create!()}.to raise_error(ActiveRecord::RecordInvalid)
      end

      xit "Why does create not raise an error when attempting to insert invalid data into the database?" do
        expect{Keyboard.create()}.to raise_error(ActiveRecord::RecordInvalid)
      end

    end
end

