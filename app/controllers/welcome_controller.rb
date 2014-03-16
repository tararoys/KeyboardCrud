class WelcomeController < ApplicationController
  def index
    @keyboards = Keyboard.all
  end
end
