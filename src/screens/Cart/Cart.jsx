import { Pressable, ScrollView, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './cartStyles'
import globalStyles from '../../assets/styles/globalStyles'
import { useStore } from '../../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import {CartCard, EmptyCartAnimation, HeaderDynamic, PaymentCard } from '../../components'
import { Routes } from '../../navigation/Routes'

const Cart = ({navigation, route}) => {
  const cart = useStore((state) => state.cartList)
  const cartPrice = useStore((state) => state.cartPrice)
  const calculateCartPrice = useStore((state) => state.calculateCartPrice)
  const reset = useStore((state) => state.resetAll)
  const increment = useStore((state) => state.incrementCartItemQuantity)
  const decrement = useStore((state) => state.decrementCartItemQuantity)

  const tabBarHeight = useBottomTabBarHeight()
  
  // useEffect(() => {
  //   reset()
  // }, [])
  
    const incrementQuantityHandler = (id, size) => {
      increment(id, size)
      calculateCartPrice()
    }
    const decrementQuantityHandler = (id, size) => {
      decrement(id, size)
      calculateCartPrice()
    }
    const payOnAction = () => {
      navigation.push(Routes.Payment)
    }

  return (
    <View style={[globalStyles.screen]}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <View style={[styles.innerScreen, {marginBottom: tabBarHeight}]}>
          <View style={styles.cartContainer}>
          <HeaderDynamic enableBack={false} icon='menu' needProfile={true} title='Cart' />
          {cart.length == 0 && <EmptyCartAnimation title='Cart is Empty!' />}
          {cart.length > 0 && 
            <View style={styles.cartListContainer}>
              {cart.map((item, i) => {
                return(
                <Pressable onPress={() => navigation.push(Routes.Details, {index: item.index, id: item.id, type: item.type})} key={i}>
                  <CartCard 
                    id={item.id} 
                    title={item.name} 
                    imageLink={item.imagelink_square} 
                    roasted={item.roasted} 
                    prices={item.prices} 
                    type={item.type} 
                    incrementQuantity={incrementQuantityHandler} 
                    decrementQuantity={decrementQuantityHandler} 
                    specialIngredient={item.special_ingredient}
                  />
                </Pressable>
              )})}
            </View>
          }
          </View>
          {cart.length !=0 && <PaymentCard title='Total Price' price={`${cartPrice}`} onAction={() => payOnAction()} actionText='Pay' />
}
        </View>
      </ScrollView>
    </View>
  )
}


export default Cart
