package main

func main() {
	a := 1
	b := 2
	c := add(a, b)
	println(c)

	tot := proAdder(1, 2, 3, 4, 5)
	println(tot)

}

func add(a int, b int) int {
	return a + b
}

func proAdder(val ...int) int {
	total := 0
	for _, v := range val {
		total += v
	}
	// println(total) 
	return total
}