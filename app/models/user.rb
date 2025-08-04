class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :items
  has_many :orders

  # ニックネーム必須
  validates :nickname, presence: true

  # パスワード半角英数字混合 + 6文字以上
  VALID_PASSWORD_REGEX = /\A(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+\z/
  validates :password, format: { with: VALID_PASSWORD_REGEX, message: 'は半角英数字混合で入力してください' },
                       length: { minimum: 6 },
                       if: :password_required?

  # 本人確認情報のバリデーション
  with_options presence: true do
    validates :last_name, format: { with: /\A[ぁ-んァ-ン一-龥々ーヶヵ]+\z/, message: 'は全角（漢字・ひらがな・カタカナ）で入力してください' }
    validates :first_name, format: { with: /\A[ぁ-んァ-ン一-龥々ーヶヵ]+\z/, message: 'は全角（漢字・ひらがな・カタカナ）で入力してください' }
    validates :last_name_kana, format: { with: /\A[ァ-ヶー－]+\z/, message: 'は全角カタカナで入力してください' }
    validates :first_name_kana, format: { with: /\A[ァ-ヶー－]+\z/, message: 'は全角カタカナで入力してください' }
    validates :birth_date
  end

  private

  def password_required?
    password.present? || password_confirmation.present?
  end
end
