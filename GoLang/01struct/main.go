package main

import (
	"encoding/json"
	"fmt"
)

func main() {
	fmt.Println("struct and no dsadf classes in GoLang")

	fmt.Println("Json in GoLang")
	EncodeJson()
	// raghu := User{
	// 	FirstName: "Raghu",
	// 	LastName:  "Ram",
	// 	Email:     "easfsd",
	// 	Age:       21,
	// }
	// fmt.Println("User:", raghu)
	// fmt.Printf("detail %+v\n", raghu)  // %+v will print the field names "f"
	// fmt.Println("User:", raghu.FirstName)

}

type User struct {
	FirstName string
	LastName  string
	Email     string
	Age       int
}

type course struct {
	Name     string
	Price    int
	Platform string
	Tags     []string
}

func EncodeJson() {

	lcoUser := []course{
		{"React", 0, "Udemy", nil},
		{"Angular", 0, "Udemy", []string{"web-dev", "google", "js"}},
		{"Golang", 0, "Youtube", []string{"web-dev", "go"}},
	}

	finalJson, err := json.Marshal(lcoUser)
	if err != nil {
		fmt.Println("Error in marshalling")
	}
	fmt.Println("jhblh" ,string(finalJson))

}
