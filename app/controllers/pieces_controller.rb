class PiecesController < ApplicationController

  def index
    render json: Piece.all
  end

  def update
    piece = Piece.find_by!(id: params[:id])
    piece.update(selected: params[:selected])
    render json: piece
  end
end
