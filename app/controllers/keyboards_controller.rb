class KeyboardsController < ApplicationController

  def index
    # @keyboard = Keyboard.find(params[:id])
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

  def select
    if request.xhr?
      if params[:selection] == "0"
        render "_low_c_keyboard", :layout => false
      elsif params[:selection] == "1"
        render "_middle_c_keyboard", :layout => false
      elsif params[:selection] == "2"
        render "_middle_high_c_keyboard", :layout => false
      elsif params[:selection] == "3"
        render "_high_c_keyboard", :layout => false
      end
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
