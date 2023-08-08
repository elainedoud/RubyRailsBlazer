class QuestionsController < ApplicationController

    def index
        question = Question.find(params[:id])
        render json: question 
    end

    def show_all
        question = Question.all
        render json: question
    end

    def create
        question = Question.new(question_params)
        render json: question, status: :created
    end

    def question_params
        params.permit(:query, :option1, :option2, :option3, :answer)
    end

end
