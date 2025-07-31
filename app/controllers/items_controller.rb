class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:new, :create, :edit, :update]
  before_action :redirect_unauthorized_user, only: [:edit, :update, :destroy]

  def index
    @items = Item.includes(:user).order(created_at: :desc)
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    @item.user = current_user

    if @item.save
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
  end

  def edit
  end

  def update
    if @item.update(item_params)
      redirect_to item_path(@item)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @item.delete
    redirect_to root_path
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def redirect_unauthorized_user
    redirect_to root_path if current_user != @item.user
  end

  def item_params
    params.require(:item).permit(
      :image, :name, :info, :category_id, :condition_id, :shipping_fee_id, :prefecture_id, :scheduled_delivery_id, :price
    ).merge(user_id: current_user.id)
  end
end
