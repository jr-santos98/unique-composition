def isValid(cnpj):
    """Performs CNPJ validation"""
    # Digits of verification
    v = [0, 0]
    # Converts string for list of int
    digits=[]
    for i in range(14):
        digits.append(int(cnpj[i]))
    
    # Check firts number
    v[0] = 5*digits[0] + 4*digits[1]  + 3*digits[2]  + 2*digits[3]
    v[0] += 9*digits[4] + 8*digits[5]  + 7*digits[6]  + 6*digits[7]
    v[0] += 5*digits[8] + 4*digits[9] + 3*digits[10] + 2*digits[11]
    v[0] = 11 - v[0] % 11
    if v[0] >= 10: v[0] = 0

    # Check second number
    v[1] = 6*digits[0] + 5*digits[1]  + 4*digits[2]  + 3*digits[3]
    v[1] += 2*digits[4] + 9*digits[5]  + 8*digits[6]  + 7*digits[7]
    v[1] += 6*digits[8] + 5*digits[9] + 4*digits[10] + 3*digits[11]
    v[1] += 2*digits[12]
    v[1] = 11 - v[1] % 11
    if v[1] >= 10: v[1] = 0

    # Validation
    return v[0] == digits[12] and v[1] == digits[13]
    

def main():
    cnpj = input().replace('.', '').replace('/', '').replace('-', '')
    # Check if the cnpj is in a valid format
    if cnpj.isdigit() and len(cnpj) == 14:
        if isValid(cnpj):
            print('CNPJ is valid!')
        else:
            print('CNPJ is invalid!')
    else:
        print("The format provided is invalid.")

main()