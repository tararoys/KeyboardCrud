class KeyboardsController < ApplicationController

  def index
    @keyboard = Keyboard.find(params[:id])
  end

  def new
    @keyboard = Keyboard.new
  end

  def create
    @keyboard = current_user.keyboards.new(keyboard_params)
    
    if @keyboard.save
      flash[:notice] = "New keyboard created"
      redirect_to @keyboard     
    else
      @errors = @keyboard.errors.messages
      render "new"
    end
  end

  def show
    @keyboard = Keyboard.find(params[:id])
  end

  private

  def keyboard_params
    params.require(:keyboard).permit(:name)
  end
end
