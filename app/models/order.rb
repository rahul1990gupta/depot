class Order < ApplicationRecord
  # enum pay_type: { check: 1, credit_card: 2, purchase_order: 3 }
  validates :name, :address, :email, presence: true
  validates :pay_time, inclusion: [:check, :credit_card, :purchase_order]
  has_many :line_items, dependent: :destroy
end
