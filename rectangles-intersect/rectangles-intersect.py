def main():
    n = int(input())
    rectangles = []
    i = 0
    while i < n:
        rectangle = input().split()
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

    print(rectangles)

main()