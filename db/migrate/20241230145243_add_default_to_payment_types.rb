class AddDefaultToPaymentTypes < ActiveRecord::Migration[8.0]
  def change
    change_column :orders, :pay_type, :integer, default: 0
  end
end
