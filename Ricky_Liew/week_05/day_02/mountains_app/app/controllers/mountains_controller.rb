class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new

  end

  def create
    #raise
    mountain = Mountain.create mountain_params
    redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mounntain.find params[:id]
    mountain.update mountain_params
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path  # index
  end


  private
  def planet_params
    params.require(:mountain).permit(:name, :continent, :peak_name, :peak_height, :pic_url)
  end


end
