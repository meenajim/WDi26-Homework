# Create a function to find the difference between the square of the sum and the sum of the squares of the first N natural numbers. Your function should accept a number as an argument and return the difference as described below;
#
# The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)² = 55² = 3025.
#
# The sum of the squares of the first ten natural numbers is 1² + 2² + ... + 10² = 385.
#
# Hence the difference between the square of the s
class Squares

  def initialize num
    @num = num
    @arr = (1..@num).to_a
  end

  def square_of_sum

    #####################################
    # This is the long loopy way.
    # i = @num
    # sum = 0
    # while i > 0
    #   sum = sum + i
    #   i = i -1
    # end
    #
    # return sum  ** 2
    #####################################

    @arr.sum ** 2   ## This is the quicker ruby way
  end


  def sum_of_squares

    @arr.map { |number| number ** 2 }.reduce(:+)
    # arr.map { |number| number ** 2 }.sum   ## alternative method
  end


  def difference
    square_of_sum - sum_of_squares
  end


end


puts "This makes a new instance of the class 'Squares' named 'a'"
a = Squares.new(5)


puts "This is the variable 'a', an instance of class Squares: " + a.to_s

puts "within the class there are some methods"
puts "This is the result of the method 'sum_of_squares': " + a.sum_of_squares.to_s
puts "This is the result of the method 'square_of_sum': " + a.square_of_sum.to_s
puts "This is the result of the method 'difference': " + a.difference.to_s
