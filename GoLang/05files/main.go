package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"os"
)

func main() {
	fmt.Println("welocme to files in golang")

	content := "Hello, I am writing to a file"

	file,err := os.Create("test.txt")

	if err != nil {
		fmt.Println("Error creating file")
		return
	}

	length,err :=  io.WriteString(file, content)

	if err != nil {
		panic(err)
	}

	fmt.Println("length of the file is ", length)
	defer file.Close()

	readFile("test.txt")



}


func readFile(filename string) {
	dataByte,err := ioutil.ReadFile(filename)
	if err != nil {
		fmt.Println("Error opening file")
		return
	}
	fmt.Println("File content is ", string(dataByte))
}