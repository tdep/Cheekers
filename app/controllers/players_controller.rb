class PlayersController < ApplicationController

  def index
    render json: Player.all
  end

  def create 
    render json: Player.create!(name: params[:name])
  end
  

end
