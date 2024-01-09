package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type LinkRequest struct {
	Destination string `json:"destination"`
}

type LinkResponse struct {
	LongUrl  string `json:"longUrl"`
	ShortUrl string `json:"shortUrl"`
}

func main() {
	fmt.Println("Initializing routes...")
	http.HandleFunc("/shorten", handleShorten)
	fmt.Println("Running web server...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handlePreflight(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*") // Adjust this according to your needs
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func setupCORS(w *http.ResponseWriter, req *http.Request) {
	(*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type, apikey")
}

func handleShorten(w http.ResponseWriter, r *http.Request) {
	setupCORS(&w, r)

	if r.Method == "OPTIONS" {
		handlePreflight(w, r)
		return
	}

	if r.Method != "POST" {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	var req LinkRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Call the external API
	response, err := callExternalAPI(req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(response)
	fmt.Println("A request handled")
}

func callExternalAPI(req LinkRequest) (*LinkResponse, error) {
	requestBody, err := json.Marshal(map[string]string{
		"destination": req.Destination,
	})
	if err != nil {
		return nil, err
	}

	apiURL := "https://api.rebrandly.com/v1/links"
	client := &http.Client{}
	request, err := http.NewRequest("POST", apiURL, bytes.NewBuffer(requestBody))
	if err != nil {
		return nil, err
	}

	request.Header.Set("Content-Type", "application/json")
	request.Header.Set("apikey", "5ea5168dab01412585fcd8464f475da1")

	resp, err := client.Do(request)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var linkResponse LinkResponse
	err = json.Unmarshal(body, &linkResponse)
	if err != nil {
		return nil, err
	}

	return &linkResponse, nil
}
