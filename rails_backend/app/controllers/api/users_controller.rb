class Api::UsersController < ApplicationController
  
  def index
    @users = User.order(created_at: :desc)
    render json: @users
  end
 
  def create
    respond_with User.create(user_params)
  end

  def show
    respond_with User.find(params[:id])
  end
  
  private
  def users_params
    params.permit(:first_name, :last_name, :email, :password)
  end
  
end

const questions = ["Name?","Sex?","Age?"]
const answers = []
console.log(questions[answers.length])
answers.push("Francis")
console.log(questions[answers.length])
answers.push("Male")
console.log(questions[answers.length])
answers.push("34")
question = {text:"Name?", type:"text", range:null}
question = {text:"Sex?", type:"select", range:['m','f','o']}
question = {text:"Age?", type:"number", range:[19,99]}
type === select && 
<select>
  range.map(val => <option value="val">Name of val</option>)
</select>
type === text &&
  <input type="text"/>