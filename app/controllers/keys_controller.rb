class KeysController < ApplicationController
  
  def new
  	@keyboard = Keyboard.find(params[:keyboard_id])
    @key = Key.new  
  end

  def create
    @keyboard = Keyboard.find(params[:keyboard_id])
    @key = @keyboard.keys.new(key_params)
    
    p @key
    
    if @key.save
      flash[:notice] = "Key created"
      redirect_to keyboard_path(@keyboard)
    else
      @errors = @key.errors.messages
      flash[:notice] = "Fuck off"
      render "new"
    end
  end

  private

  def key_params
    params.require(:key).permit(:frequency, :wave, :panner, :delay, :note_filter, :volume, :key_code)
  end
end