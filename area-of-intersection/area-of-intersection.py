def intersects(rectangles, A, B):
    """Checks if rectangle A and B have interction"""
    maiorXA, menorXA, maiorYA, menorYA = max(rectangles[A][0],rectangles[A][2]), \
        min(rectangles[A][0],rectangles[A][2]), max(rectangles[A][1],rectangles[A][3]), \
        min(rectangles[A][1],rectangles[A][3])
    maiorXB, menorXB, maiorYB, menorYB = max(rectangles[B][0],rectangles[B][2]), \
        min(rectangles[B][0],rectangles[B][2]), max(rectangles[B][1],rectangles[B][3]), \
        min(rectangles[B][1],rectangles[B][3])
    # Case A -> menorXA <= maiorXB <= maiorXA and menorYA <= menorYB <= maiorYA
    if menorXA <= maiorXB and maiorXB <= maiorXA and menorYA <= menorYB and menorYB <= maiorYA:
        return True
    # Case B -> menorXA <= menorXB <= maiorXA and menorYA <= menorYB <= maiorYA
    elif menorXA <= menorXB and menorXB <= maiorXA and menorYA <= menorYB and menorYB <= maiorYA:
        return True
    # Case C -> menorXA <= maiorXB <= maiorXA and menorYA <= maiorYB <= maiorYA
    elif menorXA <= maiorXB and maiorXB <= maiorXA and menorYA <= maiorYB and maiorYB <= maiorYA:
        return True
    # Case D -> menorXA <= menorXB <= maiorXA and menorYA <= maiorYB <= maiorYA
    elif menorXA <= menorXB and menorXB <= maiorXA and menorYA <= maiorYB and maiorYB <= maiorYA:
        return True
    # without intersection
    else:
        return False

def main():
    print("*******************************************************")
    n = int(input("Insert the number of rectangles: "))
    rectangles = []
    i = 0
    while i < n:
        rectangle = input("Insert the coordinates of rectangle " + str(i+1) + ": ").split()
        # Checks if format is valid
        if len(rectangle) == 4 and rectangle[0].isdigit() and \
        rectangle[1].isdigit() and rectangle[2].isdigit() and rectangle[3].isdigit():
            # Convert input for int
            rectangle[0] = int(rectangle[0])
            rectangle[1] = int(rectangle[1])
            rectangle[2] = int(rectangle[2])
            rectangle[3] = int(rectangle[3])
            # Adds in rectangles list
            rectangles.append(rectangle)
        else:
            print("The input format is invalid. Re-enter in a valid format.")
            i -= 1
        i += 1

    # There cannot be an intersection with less than 2 rectangles
    if n < 2:
        print("There cannot be an intersection with less than 2 rectangles")
        exit()
    # Request intersection
    r = input("The have rectangles intersect ? ")
    while r != '-1':
        r = r.split()
        # Checks if format is valid
        if len(r) == 2 and r[0].isdigit() and r[1].isdigit() and \
            int(r[0]) <= n and int(r[0]) > 0 and int(r[1]) <= n and int(r[1]) > 0:
            # Convert for int and calls the function
            A, B = int(r[0]), int(r[1])
            result = intersects(rectangles,A-1, B-1)
            print("The rectangle", str(A), "have intersection with the", str(B) + "?", result)
        else:
            print("The input format is invalid. Re-enter in a valid format.")
        r = input("The have rectangles intersect ? ")
    print("*******************************************************")

main()