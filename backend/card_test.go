package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/mux"
	"github.com/stretchr/testify/assert"
)

func TestGetCards(t *testing.T) {
	router := mux.NewRouter()
	router.HandleFunc("/cards", GetCards).Methods("GET")

	req, err := http.NewRequest("GET", "/cards", nil)
	if err != nil {
		t.Fatal(err)
	}

	rr := httptest.NewRecorder()

	router.ServeHTTP(rr, req)

	assert.Equal(t, http.StatusOK, rr.Code)

	var responseCards []Card
	err = json.Unmarshal(rr.Body.Bytes(), &responseCards)
	if err != nil {
		t.Fatal(err)
	}

	assert.Len(t, responseCards, len(cards))
}
