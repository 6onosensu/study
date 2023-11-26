askForInput = True
hasEnteredNumber = False
fullAnswer = ''
result = 0
lastOperation = ''
operations = ['+','-','*','/','**','%','//']
while askForInput:
  userInput = input('Enter your number or sign: ')
  fullAnswer += userInput

  if hasEnteredNumber:
    result = float(userInput)
    hasEnteredNumber = True

  if userInput in operations:
    lastOperation = userInput

  if isinstance(userInput, (int, float)):
    userInput = float(userInput)

    if lastOperation == '+':
      result += userInput
    elif lastOperation == '-':
      result -= userInput
    elif lastOperation == '*':
      result *= userInput
    elif lastOperation == '/':
      result /= userInput
    elif lastOperation == '**':
      result = result ** userInput
    elif lastOperation == '%':
      result = result % userInput
    elif lastOperation == '//':
      result = result // userInput

  if userInput == '=':
    askForInput = False

print (fullAnswer,result)