package main

import (
	"encoding/json"
	"fmt"
)

func main() {
	fmt.Println("struct and no dsadf classes in GoLang")

	fmt.Println("Json in GoLang")
	EncodeJson()
	DecodeJson()

}

type course struct {
	Name     string     `json:"coursename"`
	Price    int		
	Platform string      `json:"website"`
	Tags     []string     `json:"tags,omitempty"`
}

func EncodeJson() {

	lcoUser := []course{
		{"React", 0, "Udemy", nil},
		{"Angular", 0, "Udemy", []string{"web-dev", "google", "js"}},
		{"Golang", 0, "Youtube", []string{"web-dev", "go"}},
	}

	// finalJson, err := json.Marshal(lcoUser)
	finalJson,err := json.MarshalIndent(lcoUser,"","\t")
	if err != nil {
		fmt.Println("Error in marshalling")
	}
	fmt.Println("jhblh" ,string(finalJson))

}

func DecodeJson() {
	jsonData := `[
		{
			"coursename": "React",
			"Price": 0,
			"website": "Udemy"
		},
		{
			"coursename": "Angular",
			"Price": 0,
			"website": "Udemy",
			"tags": ["web-dev", "google", "js"]
		},
		{
			"coursename": "Golang",
			"Price": 0,
			"website": "Youtube",
			"tags": ["web-dev", "go"]
		}
	]`

	var myCourses []course    
	err := json.Unmarshal([]byte(jsonData), &myCourses)  // &myCourses is the address of myCourses

	checkValid := json.Valid([]byte(jsonData))
	fmt.Println(checkValid)

	if err != nil {
		fmt.Println("Error in unmarshalling")
	}
	fmt.Println(myCourses)
	fmt.Printf("%+v\n", myCourses)

	var onlineData map[string]interface{}

	err = json.Unmarshal([]byte(jsonData), &onlineData)
	if err != nil {
		fmt.Println("Error in unmarshalling")
	}
	fmt.Println(onlineData)
}
