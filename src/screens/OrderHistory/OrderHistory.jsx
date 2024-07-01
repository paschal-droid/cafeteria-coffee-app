import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './orderStyles'
import globalStyles from '../../assets/styles/globalStyles'
import { useStore } from '../../store/store'
import { EmptyCartAnimation, HeaderDynamic, HistoryCard, PaymentCard, PopupAnimation } from '../../components'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { Routes } from '../../navigation/Routes'

const OrderHistory = ({navigation}) => {
  const orderHistoryList = useStore((state) => state.orderHistoryList)
  const reset = useStore((state) => state.resetAll)
  const tabBarHeight = useBottomTabBarHeight()
  const [showAnimation, setShowAnimation] = useState(false)


  const navigationHandler = (type, id, index) => {
    navigation.push(Routes.Details, {
      index,
      id,
      type,
    })
  }

  const downloadHistory = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 3000);
  }

  // useEffect(() => {reset()}, [])
  return (
    <View style={[globalStyles.screen]}>
      {showAnimation && <PopupAnimation style={styles.lottieStyles} source={require('../../lottie/download.json')} />}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}} >
        <View style={[styles.innerScreen, { marginBottom: tabBarHeight }]}>
          <View style={styles.orderContainer}>
            <HeaderDynamic enableBack={false} icon='menu' needProfile={true} title='Order History' />
            {orderHistoryList.length == 0 && <EmptyCartAnimation title='No Order History!' />}
            <View style={styles.orderHistoryContainer}>
            {orderHistoryList.map((data, index) => (
              <HistoryCard
              navigationHandler={navigationHandler}
              key={index.toString()}
              cartList={data.cartList}
              orderDate={data.orderDate}
              cartListPrice={data.cartListPrice}
            />
            ))}
            </View>
          </View>
          {orderHistoryList != 0 && <PaymentCard styles={styles.downloadButton}  actionText='Download' onAction={() => downloadHistory()} /> }
      </View>
      </ScrollView>
    </View>
  )
}

export default OrderHistory