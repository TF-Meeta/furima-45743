class ChangeColumnsToItems < ActiveRecord::Migration[7.1]
  def change
    change_column_null :items, :name, false
    change_column_null :items, :info, false
    change_column_null :items, :category_id, false
    change_column_null :items, :condition_id, false
    change_column_null :items, :shipping_fee_id, false
    change_column_null :items, :prefecture_id, false
    change_column_null :items, :scheduled_delivery_id, false
    change_column_null :items, :price, false
  end
end
