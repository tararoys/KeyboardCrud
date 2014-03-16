class KeysController < ApplicationController
  
  def new
  	@keyboard = Keyboard.find(params[:keyboard_id])
    @owner = User.find(@keyboard.user_id)
    @key = Key.new  
    render "keys/_new"
  end

  def create
    @keyboard = Keyboard.find(params[:keyboard_id])
    @key = @keyboard.keys.new(key_params)
    
    
    
    if @key.save
      flash[:notice] = "Key created"
      redirect_to "/users/#{@keyboard.user_id}/keyboards/#{@keyboard.id}"
    else
      @errors = @key.errors.messages
      flash[:notice] = "Fuck off"
      render "keys/_new"
    end
  end

  def show
    @key = Key.find(params[:id])
    @keyboard = Keyboard.find(@key.keyboard_id)
    @user = User.find(@keyboard.user_id)
    render partial: "keys/show", locals: {k: @key, index: @key.id, user: @user, keyboard: @keyboard  }
  end

  def edit
    @key = Key.find(params[:id])
    @keyboard = Keyboard.find(@key.keyboard_id)
    @owner = User.find(@keyboard.user_id)
    render partial: "keys/edit", locals: {:key => @key}

  end

  def update
    @key = Key.find(params[:id])
    @keyboard = Keyboard.find(@key.keyboard_id)
    @key.update_attributes(key_params)
    redirect_to "/users/#{@keyboard.user_id}/keyboards/#{@keyboard.id}"
  end

  def destroy
    @key = Key.find(params[:id])
    @keyboard = Keyboard.find(@key.keyboard_id)
    @key.destroy
    redirect_to "/users/#{@keyboard.user_id}/keyboards/#{@keyboard.id}"
  end

  private

  def key_params
    params.require(:key).permit(:frequency, :wave, :panner, :delay, :note_filter, :volume, :key_code)
  end
end