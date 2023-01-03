class PiecesController < ApplicationController

  def index
    render json: Piece.all
  end
end
