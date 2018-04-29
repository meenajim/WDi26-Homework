class MoviesController < ApplicationController
  def index
    @movies = Movie.all.order(:created_at)
  end

  def new
    @movie = Movie.new
  end

  def create
    movie = Movie.create movie_params
    redirect_to movie
  end

  def edit
    @movie = Movie.find params[:id]
  end

  def update
    movie = Movie.find params[:id]
    movie.update movie_params
    redirect_to movie
  end

  def destroy
    movie = Movie.find params[:id]
    movie.destroy
    redirect_to movies_path

  end
  def show
    @movie = Movie.find params[:id]
  end
end

private
def movie_params
  params.require(:movie).permit(:name, :year, :director, :rating, :image)
end
