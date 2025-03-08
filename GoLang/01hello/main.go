package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
	"time"
)


func main() {
	fmt.Println("Hello, World!")
	var user string
	fmt.Println("What is your name?") 
	fmt.Scanln(&user) // 
	fmt.Println("Hello",user + "!" + " Welcome to the Go programming language.");
	fmt.Println("Goodbye", user)

	number_input :=  300023.0
	fmt.Println("The number is", number_input)
	fmt.Println("The number is", &number_input)

	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter text: ")

	text, _ := reader.ReadString('\n')  // error , ok syntax

	ratingReader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter rating: ")

	rating, _ := ratingReader.ReadString('\n')  // error , ok syntax

	numRating, err := strconv.ParseFloat(strings.TrimSpace(rating), 64)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Rating is: ", numRating) 
	}
	
	fmt.Println("You entered: ", text)

	fmt.Println(time.Now())
	// fmt.Println(time.Now().Format(time.RFC3339))
}