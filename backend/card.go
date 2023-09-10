package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"io/ioutil"
	"net/http"
)

type Card struct {
	ID               string `json:"id"`
	Name             string `json:"name"`
	CardType         string `json:"cardType"`
	Favorite         string `json:"favorite"`
	Url              string `json:"url"`
	Folder           string `json:"folder"`
	Username         string `json:"username"`
	Password         string `json:"password"`
	Notes            string `json:"notes"`
	AdvancedSettings string `json:"advancedSettings"`
}

var cards []Card

func GetCards(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(cards)
}

func CreateCard(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var newCard Card
	body, _ := ioutil.ReadAll(r.Body)
	json.Unmarshal(body, &newCard)
	newCard.ID = fmt.Sprintf("%d", len(cards)+1)
	cards = append(cards, newCard)
	json.NewEncoder(w).Encode(newCard)
}

func GetCard(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for _, card := range cards {
		if card.ID == params["id"] {
			json.NewEncoder(w).Encode(card)
			return
		}
	}
	fmt.Fprintf(w, "Card with ID %s not found", params["id"])
}

func UpdateCard(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var updatedCard Card
	body, _ := ioutil.ReadAll(r.Body)
	json.Unmarshal(body, &updatedCard)
	for i, card := range cards {
		if card.ID == params["id"] {
			updatedCard.ID = params["id"]
			cards[i] = updatedCard
			json.NewEncoder(w).Encode(updatedCard)
			return
		}
	}
	fmt.Fprintf(w, "Card with ID %s not found", params["id"])
}

func DeleteCard(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for i, card := range cards {
		if card.ID == params["id"] {
			cards = append(cards[:i], cards[i+1:]...)
			fmt.Fprintf(w, "Card with ID %s was deleted", params["id"])
			return
		}
	}
	fmt.Fprintf(w, "Card with ID %s not found", params["id"])
}
