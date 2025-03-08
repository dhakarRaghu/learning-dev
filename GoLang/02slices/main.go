package main

import (
	"fmt"
	"sort"
)

func main() {
	fmt.Println("Hello, World!")

	var fruit = []string{}
	fmt.Printf("Fruit: %T\n", fruit)
	fruit = append(fruit, "apple")

	fruit = append(fruit, "banana")
	fruit = append(fruit, "cherry")
	fruit = append(fruit, "durian")
	fruit = append(fruit, "elderberry")

	fmt.Println(fruit)

	fruit = append(fruit[:2], fruit[3:]...)  // remove cherry
	fmt.Println(fruit)

	 numbers := make([]int, 4)
	 numbers[0] = 1
	 numbers[1] = 323
	 numbers[2] = 233
	 numbers[3] = 4
	 fmt.Println(numbers)
	numbers = append(numbers , 5)
	fmt.Println(numbers)

	sort.Ints(numbers)
	fmt.Println(numbers)
	
	fmt.Println(sort.IntsAreSorted(numbers))

	language := make(map[string]string)
	language["en"] = "English"
	language["fr"] = "French"
	language["es"] = "Spanish"
	language["de"] = "German"

	fmt.Println("Language:", language["en"])

	delete(language, "fr")
	fmt.Println("Language:", language)

	//loop through map

	for key , value := range language{
		fmt.Println("Key:", key, "Value:", value)
	}

}