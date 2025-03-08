package main

import (
	"fmt"
	"io"
	"net/http"
	"strings"
)

func main() {
	fmt.Println("requestAPI")
	// PerformGetRequest()
	// PerformPostRequest()
	PerfromFormDataRequest()
}

func PerformGetRequest() {
	fmt.Println("PerformGetRequest")

	const myurl = "http://localhost:3000/get" // Updated to correct endpoint

	response, err := http.Get(myurl)
	if err != nil {
		fmt.Println("Error fetching the URL:", err)
		return
	}
	defer response.Body.Close()

	// Read response body
	data, err := io.ReadAll(response.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}

	fmt.Println("Response Status Code:", response.StatusCode)
	fmt.Println("Data:", string(data))
}

func PerformPostRequest() {
	fmt.Println("PerformPostRequest")
	const myurl = "http://localhost:3000/post" // Corrected endpoint

	reqBody := strings.NewReader(`
	{
		"FirstName": "Raghu",
		"LastName": "Ram",
		"Email": "easfsd",
		"Age": 21
	}`)    // Updated JSON data

	fmt.Printf("Request Body: %T\n", reqBody)

	response, err := http.Post(myurl, "application/json", reqBody)
	if err != nil {
		fmt.Println("Error sending the request:", err)
		return
	}
	defer response.Body.Close()

	// Read response body
	data, err := io.ReadAll(response.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}

	fmt.Println("Response Status Code:", response.StatusCode)
	fmt.Println("Data:", string(data))
}


func PerfromFormDataRequest() {
	fmt.Println("PerfromFormDataRequest")
	const myurl = "http://localhost:3000/postform" // Corrected endpoint

	reqBody := strings.NewReader("FirstName=Raghu&LastName=Ram&Email=easfsd&Age=21")

	response, err := http.Post(myurl, "application/x-www-form-urlencoded", reqBody)
	if err != nil {
		fmt.Println("Error sending the request:", err)
		return
	}
	defer response.Body.Close()

	// Read response body
	data, err := io.ReadAll(response.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}

	fmt.Println("Response Status Code:", response.StatusCode)
	fmt.Println("Data:", string(data))
}