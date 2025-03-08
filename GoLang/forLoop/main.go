package main

import "fmt"

func main() {
	for  i :=0 ; i < 5; i++{
		fmt.Println(i)
	}

	week := []string{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"}
	for i := range week {
		fmt.Println("Day: " ,i , week[i])
	}
	for _,day := range week {
		fmt.Println("Day: " , day)
	}
}