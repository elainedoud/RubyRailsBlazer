class Point < ApplicationRecord

    belongs_to :user
    belongs_to :question, optional: true

end
