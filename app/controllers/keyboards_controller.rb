class KeyboardsController < ApplicationController

  def index
    @keyboards = Keyboard.all
  end

  def new
    @keyboard = Keyboard.new
  end

  def create
    @keyboard = current_user.keyboards.new(keyboard_params)
    
    if @keyboard.save
      flash[:notice] = "New keyboard #{@keyboard.name} successfully created!"
      redirect_to @keyboard  
    else
      @errors = @keyboard.errors.messages
      render "new"
    end
  end

  def show
    @keyboard = Keyboard.find(params[:id])
    @keys = Key.where(keyboard_id: @keyboard.id).all
    @owner = User.find(@keyboard.user_id)
  end

  def edit
    @keyboard = Keyboard.find(params[:id])
    @keys = Key.where(keyboard_id: @keyboard.id).all
    @owner = User.find(@keyboard.user_id)
  end

  def update
    @key = Key.find(params[:key_id])
    @keyboard = Keyboard.find(params[:keyboard_id])
    @owner = User.find(@keyboard.user_id)
    @key.update_attributes(key_params)
    redirect_to("/users/#{@owner.id}/keyboards/#{@keyboard.id}")
  end

  private

  def key_params
    params.required(:key).permit(:frequency, :wave, :panner, :delay, :note_filter, :volume, :key_code)
  end
  def keyboard_params
    params.require(:keyboard).permit(:name)
  end
end
#<%= link_to "Add a key", new_keyboard_key_path(@keyboard) %>