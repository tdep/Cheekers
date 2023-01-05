class PlayersController < ApplicationController

  def index
    render json: Player.all
  end

  def update 
    player = Player.find_by!(id: params[:id])
    player.update(name: params[:name])
    render json: player
  end
  
  def delete
    player = Player.find_by!(id: params[:id])
    player.destroy
  end

end
