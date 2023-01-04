class TilesController < ApplicationController

  def index
    render json: Tile.all
  end

  def show
    render json: Tile.find_by!(id: params[:id])
  end
  
  def update
    tile = Tile.find_by!(id: params[:id])
    tile.update(occupied: params[:occupied])
    tile.update(selected: params[:selected])
    render json: tile
  end
end
