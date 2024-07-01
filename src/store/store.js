import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BeansData from '../data/BeansData'
import CoffeeData from '../data/CoffeeData';
import categories from '../data/coffeeCategories';


export const useStore = create(
    persist((set, get) => ({
        coffeeList: CoffeeData, 
        beansList: BeansData,
        categoryList: categories,
        favoritesList: [],
        cartList: [],
        orderHistoryList: [],
        cartPrice: 0,
        selectedCategoryId: 0,
        updateSelectedCategoryId: (payload) => set(() => ({
            selectedCategoryId: payload
        })),
        addToCart: (cartItem) => set(produce((state) => {
            let found = false;
            // ! a loop that checks if the cartItem passed in the AddToCart function is already
            //! present in the cartList by matching its id first and then checks again if the selected size is also 
            //! already present in the cartItem and then adds a quantity to it instead of creating another cartItem.

            for (let i = 0; i < state.cartList.length; i++) {
                if (state.cartList[i].id === cartItem.id) {
                    let size = false; // Move inside the outer loop
                    for (let p = 0; p < state.cartList[i].prices.length; p++) {
                        if (state.cartList[i].prices[p].size === cartItem.prices[0].size) {
                            size = true;
                            state.cartList[i].prices[p].quantity++;
                            break; // Move inside the if statement
                        }
                    }
                    
                    if (!size) { // Use !size instead of size == false
                        state.cartList[i].prices.push(cartItem.prices[0]);
                    }
                    state.cartList[i].prices.sort((a, b) => {
                        return a.size > b.size ? -1 : a.size < b.size ? 1 : 0;
                    });
                    found = true; // Update found flag
                    break; // Break the outer loop if item is found
                }
            }
            //! to add a fresh cart item with no present size or quantity or price
            if (!found) { // Check if item was not found after the loop
                state.cartList.push(cartItem);
            }
        })),
        calculateCartPrice: () => set(produce(state => {
            let totalPrice = 0
            for (let i = 0; i < state.cartList.length; i++) {
                let tempPrice = 0;
                for (let p = 0; p < state.cartList[i].prices.length; p++) {
                   tempPrice = tempPrice + parseFloat(state.cartList[i].prices[p].price) * parseFloat(state.cartList[i].prices[p].quantity) 
                }
                state.cartList[i].itemPrice = tempPrice.toFixed(2).toString()
                totalPrice = totalPrice + tempPrice
            }
            state.cartPrice = totalPrice.toFixed(2).toString()
        })),
        addToFavourites: (type, id) => set(produce((state) => {
            if(type == 'Coffee'){
                for (let i = 0; i < state.coffeeList.length; i++) {
                    if(state.coffeeList[i].id == id){
                        if(!state.coffeeList[i].favourite){
                            state.coffeeList[i].favourite = true;
                            state.favoritesList.unshift(state.coffeeList[i])
                        } else {
                            state.coffeeList[i].favourite = false;
                          }
                    break;
                    }
                }
            }
            else if(type == 'Bean'){
                for (let i = 0; i < state.beansList.length; i++) {
                    if(state.beansList[i].id === id){
                        if(!state.beansList[i].favourite){
                            state.beansList[i].favourite = true;
                            state.favoritesList.unshift(state.beansList[i])
                        }
                    break;
                    }
                }
            }
        })),
        removeFromFavourites: (type, id) => set(produce(state => {
            if(type == 'Coffee'){
                for (let i = 0; i < state.coffeeList.length; i++) {
                    if(state.coffeeList[i].id === id){
                        if(state.coffeeList[i].favourite){
                            state.coffeeList[i].favourite = false;
                        }
                    break;
                    }
                }
            }
            else if(type == 'Bean'){
                for (let i = 0; i < state.beansList.length; i++) {
                    if(state.beansList[i].id === id){
                        if(state.beansList[i].favourite){
                            state.beansList[i].favourite = false;
                        }
                    break;
                    }
                }
            }
            let spliceIndex = -1
            for (let i = 0; i < state.favoritesList.length; i++) {
                if(state.favoritesList[i].id == id) {
                    spliceIndex = i
                    break
                }
            }
            state.favoritesList.splice(spliceIndex, 1)
        })), 
        incrementCartItemQuantity: (id, size) => set(produce(state => {
            for (let i = 0; i < state.cartList.length; i++) {
                if(state.cartList[i].id == id){
                    for (let q = 0; q < state.cartList[i].prices.length; q++) {
                        if(state.cartList[i].prices[q].size == size){
                            state.cartList[i].prices[q].quantity++;
                            break
                        }
                    }
                }
            }
        })),
        decrementCartItemQuantity: (id, size) => set(produce(state => {
            for (let i = 0; i < state.cartList.length; i++) {
                if(state.cartList[i].id == id){
                    for (let q = 0; q < state.cartList[i].prices.length; q++) {
                        if(state.cartList[i].prices[q].size == size){
                            if(state.cartList[i].prices.length > 1){
                                //! to decrease the quantity if there's more than 1
                                if(state.cartList[i].prices[q].quantity > 1){
                                    state.cartList[i].prices[q].quantity--;
                                } else {
                                //! to remove the price (price, size, quantity, currency) item if there is only 1 quantity of it
                                    state.cartList[i].prices.splice(q, 1)
                                }
                            } else {
                                //! to remove the entire cartItem from the list if the lenth of the price is less than 1
                                if (state.cartList[i].prices[q].quantity > 1) {
                                    state.cartList[i].prices[q].quantity--;
                                } else {
                                    state.cartList.splice(i, 1)
                                }
                            }
                            break;
                        }
                    }
                }
            }
    })),
    addToOrderHistoryList: () => set(produce(state => {
        let temp = state.cartList.reduce(
          (accumalator, currentValue) =>
            accumalator + parseFloat(currentValue.itemPrice),
          0,
        );
        if(state.orderHistoryList.length > 0) {
            state.orderHistoryList.unshift({
                orderDate: new Date().toDateString()+' '+new Date().toLocaleTimeString(),
                cartList: state.cartList,
                cartListPrice: temp.toFixed(2).toString(),
            })
        }else {
            state.orderHistoryList.push({
                orderDate: new Date().toDateString()+' '+new Date().toLocaleTimeString(),
                cartList: state.cartList,
                cartListPrice: temp.toFixed(2).toString(),
            })
        }
        state.cartList = []
    })),   
    resetAll: () => set(produce(state => {
        for (let i = 0; i < state.coffeeList.length; i++) {
            if(state.coffeeList[i].favourite){
                state.removeFromFavourites(state.coffeeList[i].type, state.coffeeList[i].id)
                state.coffeeList[i].favourite = false;
            }
            break;
        };
        for (let i = 0; i < state.beansList.length; i++) {
            if(state.beansList[i].favourite){
                state.removeFromFavourites(state.beansList[i].type, state.beansList[i].id)
                state.beansList[i].favourite = false;
            }
            break;
        };
        state.cartList = []
        state.orderHistoryList = []
        state.favoritesList = []
        state.cartPrice = 0
    }))     
    }), {name: "coffee-app", storage: createJSONStorage(() => AsyncStorage)},
    ))


