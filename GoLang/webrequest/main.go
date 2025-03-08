package main

import (
	"fmt"
	// "io/ioutil"
	"net/http"
	"net/url"
)

const urlString = "https://neetcode.io/practice?tab=allNC"

func main() {
	fmt.Println("Web request in GoLang")
	response,err := http.Get(urlString)
	// response,err := http.Get(url)

	if err != nil {
		fmt.Println("Error fetching the URL")
		return
	}
	fmt.Println("Response:", response)
	defer response.Body.Close()

	data := make([]byte, 99999)
	response.Body.Read(data)
	// fmt.Println("Data:", string(data))
	result, _ := url.Parse(urlString)
	// result ,_ := url.Parse(url)
	fmt.Println("Result: \n", result.Scheme)
	fmt.Println("Result: \n", result.Host)
	fmt.Println("Result: \n", result.Path)
	fmt.Println("Result: \n", result.RawQuery)
	// fmt.Println("Result: \n", result)
	 
	qparams := result.Query()
	fmt.Println("Query Params: \n", qparams["tab"])

	for i,val := range qparams{
		fmt.Println("Query Params: \n",i, val)
	}

	// fmt.Println("Query Params: \n", qparams)

	// partsOfURL := result.Path


}
