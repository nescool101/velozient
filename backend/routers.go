package main

import (
	"github.com/gorilla/mux"
)

func Routers() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/cards", GetCards).Methods("GET")
	router.HandleFunc("/cards", CreateCard).Methods("POST")
	router.HandleFunc("/cards/{id}", GetCard).Methods("GET")
	router.HandleFunc("/cards/name/{name}", GetCardByName).Methods("GET")
	router.HandleFunc("/cards/{id}", UpdateCard).Methods("PUT")
	router.HandleFunc("/cards/{id}", DeleteCard).Methods("DELETE")
	return router
}
