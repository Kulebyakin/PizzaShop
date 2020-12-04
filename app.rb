require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, {adapter: "sqlite3", database: "pizzashop.db"}

class Product < ActiveRecord::Base
end

class Order < ActiveRecord::Base
end



get '/' do
  @products = Product.all
  erb :index
end

get '/about' do
  erb :about
end

post '/cart' do 
  @order_input = params[:orders]
  @items = parse_orders(@order_input)
  
  @items.each do |item|
    item[0] = Product.find(item[0])
  end

  if @items.length == 0
    return erb :emptycart
  end

  erb :cart
end

post '/order' do
  @o = Order.create params[:order]

  erb :order
end

get '/admin' do
  @orders = Order.order(id: :DESC)

  erb :admin
end

def parse_orders order_input
  s1 = order_input.split(/,/)
  arr = []

  s1.each do |x|
    s2 = x.split(/=/)
    s3 = s2[0].split(/_/)

    id = s3[1]
    count = s2[1]

    arr2 = [id, count]

    arr.push arr2
  end

  return arr
end

