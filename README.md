#テーブル設計

### users テーブル（ユーザー情報）

| Column             | Type   | Options                        |
|--------------------|--------|--------------------------------|
| nickname           | string | null: false                    |
| email              | string | null: false, unique: true      |
| encrypted_password | string | null: false                    |
| last_name          | string | null: false                    |
| first_name         | string | null: false                    |
| last_name_kana     | string | null: false                    |
| first_name_kana    | string | null: false                    |
| birth_date         | date   | null: false                    |

#### Association
- has_many :items
- has_many :orders

### items テーブル（商品情報）

| Column                    | Type       | Options                         |
| ------------------------- | ---------- | ------------------------------- |
| name                      | string     | null: false                     |
| info                      | text       | null: false                     |
| price                     | integer    | null: false                     |
| category\_id              | integer    | null: false                     |
| status\_id                | integer    | null: false                     |
| shipping\_fee\_status\_id | integer    | null: false                     |
| prefecture\_id            | integer    | null: false                     |
| scheduled\_delivery\_id   | integer    | null: false                     |
| user                      | references | null: false, foreign\_key: true |

#### Association
- belongs_to :user
- has_one :order

### orders テーブル（購入情報）

| Column   | Type       | Options                        |
|----------|------------|--------------------------------|
| user     | references | null: false, foreign_key: true |
| item     | references | null: false, foreign_key: true |

#### Association
- belongs_to :user
- belongs_to :item
- has_one :address

### addresses テーブル（配送先）

| Column         | Type       | Options                         |
| -------------- | ---------- | ------------------------------- |
| postal\_code   | string     | null: false                     |
| prefecture\_id | integer    | null: false                     |
| city           | string     | null: false                     |
| address        | string     | null: false                     |
| building       | string     |                                 |
| phone\_number  | string     | null: false                     |
| order          | references | null: false, foreign\_key: true |

#### Association
- belongs_to :order

