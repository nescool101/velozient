package main

import (
	"log"
	"net/http"
)

func main() {
	router := Routers()
	log.Println("Starting the HTTP server on port 9080")
	http.ListenAndServe(":9080", &CORSRouterDecorator{R: router})
}
