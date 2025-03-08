package main

import "fmt"

func main() {
	fmt.Println("struct and no classes in GoLang")

	raghu := User{
		FirstName: "Raghu",
		LastName:  "Ram",
		Email:     "easfsd",
		Age:       21,
	}
	fmt.Println("User:", raghu)
	fmt.Printf("detail %+v\n", raghu)  // %+v will print the field names "f"
	fmt.Println("User:", raghu.FirstName)

	raghu.GetEmail()
}

// Structs are a way to define a new type that is a collection of named fields.

type User struct {
	FirstName string
	LastName  string
	Email     string
	Age       int
}

func (u User) GetEmail(){
	fmt.Println("Email:", u.Email)
}